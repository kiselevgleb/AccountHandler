/**
 * Класс LoginForm управляет формой
 * входа в портал
 * Наследуется от AsyncForm
 * */
class LoginForm extends AsyncForm{
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {
    // if(User.login(options).user!= undefined){
      User.login(options);
      App.setState( 'user-logged' );
      let mod = document.querySelectorAll('.modal.fade.in');
      console.log(mod);
      Array.from(mod).forEach(element => element.style.display = 'none');
  
    // }
  }
}
