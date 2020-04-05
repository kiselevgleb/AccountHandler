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
    User.register(options);
    App.setState('user-logged');
    // console.log(this);
    let mod = document.querySelectorAll('.modal.fade.in');
    console.log(mod);
    Array.from(mod).forEach(element => element.style.display = 'none');

  }
}