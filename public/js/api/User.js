/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство HOST, равно значению Entity.HOST.
 * Имеет свойство URL, равное '/user'.
 * */

class User {
  // constructor(URL, HOST) {
  // }
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    localStorage.user = JSON.stringify(user);
    console.log(user);
    // localStorage.user = user;
  }
  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    console.log(current());

    localStorage.removeItem("user");
    console.log(current());
    // localStorage.clear();
  }
  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    try {
      return JSON.parse(localStorage.user);
    } catch (error) {
      return null;
    }
  }
  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(data, callback = f => f) {
    let d = localStorage.user;
    // data=d;
    console.log(this.HOST + this.URL + "/current");
    if (localStorage.user != null) {
      d = localStorage.user;
      let mas = d.split(",");
      data = mas[0] + "," + mas[2];
    }
    return createRequest({
      url: this.HOST + this.URL + "/current",
      data: data,
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        console.log("response11");
        console.log(d);
        console.log(response);
        if (response != null) {
          User.setCurrent(response.user);
        } else {
          User.unsetCurrent();
        }
        callback(err, response);
      }
    });
  }
  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback = f => f) {
    return createRequest({
      url: this.HOST + this.URL + '/login',
      data: data,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response.success) {
          console.log("777");
          User.setCurrent(response.user);
        } 
        callback(err, response);
      }
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback = f => f) {
    return createRequest({
      url: this.HOST + this.URL + '/register',
      data: data,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response.success) {
          User.setCurrent(response.user);
          //     // return response;
        } else {
        }
        callback(err, response);
      }
    });
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(data, callback = f => f) {
    return createRequest({
      url: this.HOST + this.URL + '/logout',
      data: data,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        console.log("resOut");
        console.log(response);
        if (response.success) {
          console.log("777logout");
          User.unsetCurrent();
        } 
        callback(err, response);
      }
    });
  }
}
User.URL = '/user';
User.HOST = Entity.HOST;