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
      
      console.log("options.data");
      console.log(options.data);
      console.log(options.url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4&&xhr.status>400) {
          console.log("xhr.responseText");
          console.log(this);
          return xhr.responseText;
        }
      };
      xhr.send(options.data);
    }
      catch (e) {
        // перехват сетевой ошибки
        callback(e);
      }
    }

  //   xhr.onreadystatechange = function() {
  //     if (this.readyState === 4) {
  //       if (this.status >= 200 && this.status < 400) {
  //         var r=JSON.parse(this.responseText);
  //         text=r.text[0];
  //         resolve(text); // Вызываем resolve и передаем text в качестве параметра
  //       } else {
  //         reject(new Error('Error')); // Обработка ошибки
  //     }
  //    }
  //   };
  //   xhr.send();
  // });
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