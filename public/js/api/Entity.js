/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'https://bhj-diplom.letsdocode.ru'.
 * */
class Entity {
  URL = '';
  HOST = "http://localhost:8000/";
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback) {
    let d;
    let res;
    console.log("data");
    console.log(data);
    console.log(this.URL);
    if(localStorage.user!=null){
      d = localStorage.user;
      // let mas = d.split(",");
      // data=mas[0]+","+mas[2];
    }
    createRequest({
      url: this.URL,
      data: d,
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        console.log("entityList");
        console.log(response);
        res=response;
        // return response;
        // console.log(d);
        // console.log(response);
        // if (response.success) {
        //   User.setCurrent(response.user);
        // }
        // else{
        //   User.unsetCurrent();
        // }
      }
      
    });
    return res;
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    createRequest({
      url: this.URL,
      data: data,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        console.log("entityCreate");
        console.log(response);
        return response;
      }
    });
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get(id = '', data, callback) {
    let d;
    if(localStorage.user!=null){
      d = Object.assign({ "id": id }, localStorage.user );
    }
    createRequest({
      url: this.URL,
      data: d,
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        console.log("entityGet");
        console.log(response);
        return response;
      }
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(id = '', data, callback = f => f) {
    let d;
    if(localStorage.user!=null){
      d = Object.assign({ "id": id }, localStorage.user );
    }
    createRequest({
      url: this.URL,
      data: data,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        console.log("entityDel");
        console.log(response);
        return response;
      }
    });
  }
}