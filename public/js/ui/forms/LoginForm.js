/**
 * Класс LoginForm управляет формой
 * входа в портал
 * Наследуется от AsyncForm
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(options) {
    console.log(options);
    User.login(options, function() {
      App.setState('user-logged');
      App.getModal("login").close();      
    });
  }
}