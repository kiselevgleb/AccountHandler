/**
 * Класс RegisterForm управляет формой
 * регистрации
 * Наследуется от AsyncForm
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(options) {
    console.log("reg")
    // if (User.register(options).user != undefined) {
      User.register(options);
      options.addEventListener('submit', (e) => {
        App.setState('user-logged');
        Modal.close();
      });


    // }
  }
}