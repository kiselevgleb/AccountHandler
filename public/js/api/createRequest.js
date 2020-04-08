/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url);
  xhr.responseType = options.responseType;
  xhr.withCredentials = true;
  let d;
  if (options.method === "GET") {
    d = options.data;
    // d = new FormData();
    // if (options.data != null) {
    //   let k = JSON.parse(options.data, (key, val) => d.append(key, val));
    // }
    // xhr.setRequestHeader('Content-Type', 'application/json');
  } else if (options.method === "POST") {
    d = new FormData();
    if (options.data != null) {
      let k = JSON.parse(options.data, (key, val) => d.append(key, val));
    }
    // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
  }
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