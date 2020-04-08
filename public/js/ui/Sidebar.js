/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
let but = document.querySelector(".sidebar-toggle");
let body = document.querySelector("body");
let regBut = document.querySelector(".menu-item_register");
let logBut = document.querySelector(".menu-item_login");
let logOutBut = document.querySelector(".menu-item_logout");

class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
    // console.log("init11");
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    but.addEventListener("click", function () {
      console.log("menu");
      if (body.classList.length == 3) {
        body.classList.add("sidebar-open");
        body.classList.add("sidebar-collapse");
      } else {
        body.classList.remove("sidebar-open");
        body.classList.remove("sidebar-collapse");
      }
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {

    logBut.addEventListener("click", function () {
      console.log("log");
      App.getModal('login').open();
    });
    regBut.addEventListener("click", function () {
      App.getModal('register').open(); 
    });
    logOutBut.addEventListener("click", function () {
      User.logout(); 
    });
  }

}