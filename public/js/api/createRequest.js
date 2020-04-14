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
  if (options.method === "GET") {
    let urlTemp = options.url + "?";
    if (options.data != null) {
      console.log("options.data");
      let u = options.data.replace(/[{"}]/g, "");
      let urlRep = u.replace(/:/g, "=");
      url = urlTemp + urlRep.replace(/,/g, "&");
    }
  } else if (options.method === "POST") {
    url = options.url;
    d = new FormData();
    if (options.data != null) {
      let k = JSON.parse(options.data, (key, val) => d.append(key, val));
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