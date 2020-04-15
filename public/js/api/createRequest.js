/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = options.responseType;
  xhr.withCredentials = true;
  let formData = new FormData();

  if (options.method === "GET") {
    options.url += "?";
    console.log(options.data);
    try {
      for (var key in JSON.parse(options.data)) {
        options.url += `${key}=${JSON.parse(options.data)[key]}&`;
      }
    } catch {};
    console.log(options.url);
  } else if (options.method === "POST") {
    if (options.data != null) {
      JSON.parse(options.data, (key, val) => formData.append(key, val));
    }
  }
  xhr.open(options.method, options.url);
  let error = null;
  try {
    xhr.send(formData);
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