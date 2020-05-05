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
    let listAcc;
    try {
      listAcc = User.login(options);
      
    } catch (error) {}

    // listAcc.onreadystatechange = function () {
    // if (listAcc.readyState == 4&&xhr.status == 200) {

    App.setState('user-logged');
    let mod = document.querySelectorAll('.modal.fade.in');
    Array.from(mod).forEach(element => element.style.display = 'none');
    // }
    // };

  }
}