/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'https://bhj-diplom.letsdocode.ru'.
 * */
// var URL = '';
// var HOST = "http://localhost:8000";
class Entity {

  // static getHost(){
  //   return HOST;
  // }
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback = f => f) {
    console.log(data);
    return createRequest({
      url: this.HOST + this.URL,
      method: "GET",
      responseType: "json",
      data: data,
      callback
      // : (err, response) => {
      //   console.log("list");
      //   console.log(response);

      //   callback(err, response);
      // }
    });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback = f => f) {
    return createRequest({
      url: this.HOST + this.URL,
      method: "POST",
      responseType: "json",
      data: Object.assign(data, {
        _method: 'PUT'
      }),
      callback
    });
  }
  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get(id = '', data, callback = f => f) {
    return createRequest({
      url: this.HOST + this.URL,
      method: "GET",
      responseType: "json",
      data: Object.assign({
        "id": id
      }, data),
      callback
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(id = '', data, callback = f => f) {
    return createRequest({
      url: this.HOST + this.URL,
      method: "POST",
      responseType: "json",
      data: Object.assign({
        "id": id
      }, data),
      callback
    });
  }
}
Entity.URL = '';
Entity.HOST = "http://localhost:8000";