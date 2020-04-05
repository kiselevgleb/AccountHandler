/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
let mod;
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (element != null) {
      this.element = element;
      // console.log(element);
      this.registerEvents();
      // AccountsWidget.registerEvents();
    } else {
      throw "null";
    }
  }


  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    // console.log("111");
    console.log(this.element);
    let el = this.element;
    let closeBut = this.close();
    mod = document.querySelectorAll('[data-dismiss="modal"]');
    Array.from(mod).forEach(element => element.addEventListener("click", function (e) {
      el.style.display = 'none';
    }));
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    // e.addEventListener("click", function(){
    e.close();
    // })
  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {
    Array.from(mod).forEach(element => element.removeEventListener("click"));
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = 'block';
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close() {
    this.element.style.display = 'none';
    // Array.from(mod).forEach(element => element.style.display = 'none');
    // this.element.style.display = 'none';
  }
}