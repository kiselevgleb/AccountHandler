/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = options.responseType;
  xhr.withCredentials = true;
  let d;
  let url;
  // let asyn = true;
  if (options.method === "GET") {
    url = options.url + "?";
    if (options.data != null) {
      // JSON.parse(options.data, (key, val) => url += key + "=" + val + "&");
      for (var key in JSON.parse(options.data)) {
        console.log(key, JSON.parse(options.data)[key]);
        if(JSON.parse(options.data)[key]!="[object Object]"){
        url += key + "=" + JSON.parse(options.data)[key] + "&";}
      }
      console.log(url);
    }
  } else if (options.method === "POST") {
    url = options.url;
    d = new FormData();
    if (options.data != null) {
      JSON.parse(options.data, (key, val) => d.append(key, val));
    }
  }
  xhr.open(options.method, url);

  let error = null;

  try {
    xhr.send(d);
  } catch (err) {
    error = err;
    options.callback(error, null);
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      console.log(xhr.response);
      options.callback(error, xhr.response);
    }
  };
  return xhr;
}