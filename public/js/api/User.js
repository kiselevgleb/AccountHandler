/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство HOST, равно значению Entity.HOST.
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  // constructor(URL, HOST) {
  URL = '/user';
  HOST = Entity.HOST;
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
    localStorage.removeItem("user");
    console.log("777logout2");
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
  static fetch(data, callback) {
    let d = localStorage.user;
    data=d;
    console.log(data);

    const xhr = createRequest({
      url: "/user/current",
      data: data,
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        console.log("response11");
        console.log(d);
        console.log(response);
        if (response.success) {
          User.setCurrent(response.user);
        }
        // else{
        //   User.unsetCurrent();
        // }
      }
    });

  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    let res = createRequest({
      url: '/user/login',
      data: data,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response!=undefined) {
              console.log("777");
          User.setCurrent(response.user);
          //     // return response;
        } else {

        }
      }
      // callback(err, response) {
      //   if (response.success) {
      //     console.log("777");
      //     User.setCurrent(response.user);
      //     // return response;
      //   } else {
      //     callback(err);
      //   }
      // }
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {
    let res = createRequest({
      url: '/user/register',
      data: data,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response!=undefined) {
              console.log("777");
          User.setCurrent(response.user);
          //     // return response;
        } else {

        }
      }
    });
    console.log("res");
    console.log(res);

  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(data, callback) {
    let res = createRequest({
      url: '/user/logout',
      data: data,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response!=undefined) {
              console.log("777logout");
          User.unsetCurrent();
          //     // return response;
        } else {

        }
      }
    });
  }
}