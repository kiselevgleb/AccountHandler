/**
 * Класс TransactionsPage управляет
 * страницей отображения доходов и
 * расходов конкретного счёта
 * */
class TransactionsPage {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    if (element != null) {
      this.element = element;
      this.registerEvents();
    } else {
      throw "null";
    }
  }

  /**
   * Вызывает метод render для отрисовки страницы
   * */
  update() {
    console.log(this.element);
    this.render(this.element);
  }

  /**
   * Отслеживает нажатие на кнопку удаления транзакции
   * и удаления самого счёта. Внутри обработчика пользуйтесь
   * методами TransactionsPage.removeTransaction и
   * TransactionsPage.removeAccount соответственно
   * */
  registerEvents() {
    let btnAcc = document.querySelector('.remove-account');
    btnAcc.addEventListener("click", function (e) {
      this.removeAccount();
    });
    // let btntrans = document.querySelector('.transaction__remove');
    // btntrans.addEventListener("click", function (e) {
    //   this.removeTransaction(e.data - id);
    // });
  }

  /**
   * Удаляет счёт. Необходимо показать диаголовое окно (с помощью confirm())
   * Если пользователь согласен удалить счёт, вызовите
   * Account.remove, а также TransactionsPage.clear с
   * пустыми данными для того, чтобы очистить страницу.
   * По успешному удалению необходимо вызвать метод App.update()
   * для обновления приложения
   * */
  removeAccount() {
    if (lastOptions != null) {
      if (confirm("Вы действительно хотите удалить счёт?")) {
        if (Account.remove()) {
          this.clear();
          App.update();
        }
      } else {}
    }
  }

  /**
   * Удаляет транзакцию (доход или расход). Требует
   * подтверждеия действия (с помощью confirm()).
   * По удалению транзакции вызовите метод App.update()
   * */
  removeTransaction(id) {

  }

  /**
   * С помощью Account.get() получает название счёта и отображает
   * его через TransactionsPage.renderTitle.
   * Получает список Transaction.list и полученные данные передаёт
   * в TransactionsPage.renderTransactions()
   * */
  render(options) {
    if (options != undefined || options != null) {
      lastOptions = options;
    }
    if (Account.get()) {
      this.renderTitle(Account.get().name);
    }
    this.renderTransactions(Transaction.list());
  }

  /**
   * Очищает страницу. Вызывает
   * TransactionsPage.renderTransactions() с пустым массивом.
   * Устанавливает заголовок: «Название счёта»
   * */
  clear() {
    this.renderTransactions([]);
    this.renderTitle("Название счёта");
    lastOptions = null;
  }

  /**
   * Устанавливает заголовок в элемент .content-title
   * */
  renderTitle(name) {
    let title = document.querySelector('.content-title');
    title.textContent = name;
  }

  /**
   * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
   * в формат «10 марта 2019 г. в 03:20»
   * */
  formatDate(date) {
    let d = new Date(date);
    return d.getDate()+" "+d.getMonth()+" "+d.getFullYear()+" г. в "+d.getHours()+":"+d.getMinutes();
    // let d = new Date(date);
    // return dateformat(d, "dd mmmm yyyy HH:mm");
  }

  /**
   * Формирует HTML-код транзакции (дохода или расхода).
   * item - объект с информацией о транзакции
   * */
  getTransactionHTML(item) {
    d = this.formatDate(item.date);
    return `<div class="transaction transaction_${item.type} row">
    <div class="col-md-7 transaction__details">
      <div class="transaction__icon">
          <span class="fa fa-money fa-2x"></span>
      </div>
      <div class="transaction__info">
          <h4 class="transaction__title">${item.name}</h4>
          <!-- дата -->
          <div class="transaction__date">${d}</div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="transaction__summ">
      <!--  сумма -->
      ${item.sum} <span class="currency">₽</span>
      </div>
    </div>
    <div class="col-md-2 transaction__controls">
        <!-- в data-id нужно поместить id -->
        <button class="btn btn-danger transaction__remove" data-id="12">
            <i class="fa fa-trash"></i>  
        </button>
    </div>
</div>`
  }

  /**
   * Отрисовывает список транзакций на странице
   * используя getTransactionHTML
   * */
  renderTransactions(dat) {
    let cont = document.querySelector('.content');
    if(dat.length!=null){
    dat.forEach(element => {cont.innerHTML+=this.getTransactionHTML(element)});}
  }
}
let lastOptions = null;
// let d = new Date("2019-03-10 03:20:41");
// console.log(d.getDate()+" "+d.getMonth()+" "+d.getFullYear()+" г. в "+d.getHours()+":"+d.getMinutes());
// console.log(d);
  /**
   * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
   * в формат «10 марта 2019 г. в 03:20»
   * */