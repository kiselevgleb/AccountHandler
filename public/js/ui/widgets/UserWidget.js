/**
 * Класс UserWidget отвечает за
 * отображение информации о имени пользователя
 * после авторизации или его выхода из системы
 * */
class UserWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (element != null) {
      this.element = element;
      // widgets.AccountsWidget.registerEvents();
      // AccountsWidget.registerEvents();
    } else {
      throw "null";
    }
  }

  /**
   * Получает информацию о текущем пользователе
   * с помощью User.current()
   * Если пользователь авторизован,
   * в элемент .user-name устанавливает имя
   * авторизованного пользователя
   * */
  update() {
    let n = document.querySelector(".user-name");
    let u = User.current();
    console.log("kkkk", u);
    console.log("user");
    console.log(u);
    if(u!=null){
      n.textContent=u.name;
    }
  }
}
