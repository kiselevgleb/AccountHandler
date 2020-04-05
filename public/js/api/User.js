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
    // localStorage.user = user;
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    localStorage.removeItem("user");
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
  static fetch(data, ccc) {
    // createRequest({
    //   url: URL,
    //   method: 'GET',
    //   callback: ( err, response ) => {
    //     console.log( err ); // null
    //     console.log( response ); // ответ
    //   }
    // });
    const xhr = createRequest({
      url: Entity.HOST + Entity.URL + URL,
      data: data,
      method: 'GET',
      callback(err, response) {
        // if (response && response.user) {
          User.setCurrent(response.user);
          return response;
        // } else {
          // ...
          // вызываем параметр, переданный в метод fetch
          // callback(err, response);
        // }
      }
    });
    // return response;
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    let res = createRequest({
      url: Entity.HOST + Entity.URL + '/login',
      data: data,
      method: 'POST',
      callback(err, response) {
        // if (res.user != undefined) {
          User.setCurrent(response.user);
          return response;
        // } else {

        //   callback(err, response);
        // }
      }
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
      url: Entity.HOST + Entity.URL + '/register',
      data: data,
      method: 'POST',
      callback(err, response) {
        // if (res.user != undefined) {
          User.setCurrent(response.user);
          console.log("response");
          console.log(response);
          return response;
        // } else {
        //   callback(err, response);
        //   return err;
        // }
      }
    });
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(data, callback) {
    let res = createRequest({
      url: Entity.HOST + Entity.URL + '/logout',
      data: data,
      method: 'POST',
      callback(err, response) {
        if (res.user != undefined) {
          User.unsetCurrent();
        } else {

          callback(err, response);
        }
      }
    });
  }
}