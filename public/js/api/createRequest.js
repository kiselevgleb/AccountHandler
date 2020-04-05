/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = options => {
    // ...
    const xhr = new XMLHttpRequest;
    // ...
    try {
      xhr.open(options.method, options.url);
      xhr.send(options.data);
      // console.log(options.data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log("xhr.responseText");
          console.log(xhr.responseText);
          return xhr.responseText;
        }
      };
    }
      catch (e) {
        // перехват сетевой ошибки
        callback(e);
      }
    }
    // return createRequest;
    // const xhr = createRequest({
    //     url: 'http://localhost:8000',
    //     method: 'GET',
    //     callback: ( err, response ) => {
    //       /*
    //         при успешном выполнении err = null, response содержит данные ответа
    //       */
    //       console.log( err ); // null
    //       console.log( response ); // ответ
    //     }
    //   });

    //   function updateFilteredTable() {
    //     $.ajax({
    //         type: "GET",
    //         url: mealAjaxUrl + "filter",
    //         data: $("#filter").serialize()
    //     }).done(updateTableByData);
    // }