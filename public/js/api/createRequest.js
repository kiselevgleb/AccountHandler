/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = options.responseType;
  xhr.withCredentials = true;
  let formData = new FormData();
console.log("all ",options.data);
console.log(options.method);
  if (options.method === "GET") {
    options.url += "?";
    try {
      for (var key in options.data) {
        options.url += `${key}=${options.data[key]}&`;
      }
    } catch {};
    console.log(options.url);
  } else if (options.method === "POST") {
    if (options.data != null) {
      try {
        for (var key in options.data) {
          formData.append(key, options.data[key]);
        }
      } catch {};
    }
  }
  xhr.open(options.method, options.url);
  let error = null;
  try {
    console.log(formData.getAll(name));

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