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
    let urlTemp =options.url+"?";
    // d = options.data;
    // d = new FormData();
    if (options.data != null) {
      // 'https://example.com?mail=ivan@biz.pro&password=odinodin'
      let k = JSON.parse(options.data, (key, val) => key=="name"||key=="id"? urlTemp +=key+"="+val+"&":"");
      // if(key=="name"||key=="id"){
      //   urlTemp +=key+"="+val+"&"});
    }
    url = urlTemp.substring(0, urlTemp.length - 1);
    console.log(url);

    // xhr.setRequestHeader('Content-Type', 'application/json');
  } else if (options.method === "POST") {
    url = options.url
    d = new FormData();
    if (options.data != null) {
      let k = JSON.parse(options.data, (key, val) => d.append(key, val));
    }
    // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
  }
  xhr.open(options.method, url);
  let error = null;
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      options.callback(error, xhr.response);
    }
  };
  try {
    xhr.send(d);
  } catch (err) {
    error = err;
    options.callback(error, null);
  }
  return xhr;
}