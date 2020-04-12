/**
 * Класс AccountsWidget управляет блоком
 * отображения счетов в боковой колонке
 * */
let butAccount = document.querySelectorAll(".account");
let butCreate = document.querySelector(".create-account");
class AccountsWidget {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Вызывает AccountsWidget.update() для получения
   * списка счетов и последующего отображения
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (element != null) {
      this.element = element;
      this.registerEvents();
      this.update();
    } else {
      throw "null";
    }
  }
  /**
   * При нажатии на .create-account открывает окно
   * #modal-new-account для создания нового счёта
   * При нажатии на один из существующих счетов
   * (которые отображены в боковой колонке),
   * вызывает AccountsWidget.onSelectAccount()
   * */
  registerEvents() {
    butCreate.addEventListener("click", function () {
      App.getModal('createAccount').open();
    });
    Array.from(butAccount).forEach(element => this.onSelectAccount());
  }

  /**
   * Метод доступен только авторизованным пользователям
   * (User.current()).
   * Если пользователь авторизован, необходимо
   * получить список счетов через Account.list(). При
   * успешном ответе необходимо очистить список ранее
   * отображённых счетов через AccountsWidget.clear().
   * Отображает список полученных счетов с помощью
   * метода renderItem()
   * */
  update() {
    if (User.current() != null) {
      console.log(this.element);
      let masAcc = Account.list();
      console.log("mas "+masAcc);
      if (masAcc != null) {
        this.clear();
        masAcc.forEach(element => renderItem(element));
      }
      
    }
  }

  /**
   * Очищает список ранее отображённых счетов.
   * Для этого необходимо удалять все элементы .account
   * в боковой колонке
   * */
  clear() {
    Array.from(butAccount).forEach(element => element.remove);
  }

  /**
   * Срабатывает в момент выбора счёта
   * Устанавливает текущему выбранному элементу счёта
   * класс .active. Удаляет ранее выбранному элементу
   * счёта класс .active.
   * Вызывает App.showPage( 'transactions', { account_id: id_счёта });
   * */
  onSelectAccount(element) {
    Array.from(butAccount).forEach(e => e.classList.remove(".active"));
    element.classList.add(".active");
    App.showPage('transactions', {
      account_id: element.account_id
    });
  }

  /**
   * Возвращает HTML-код счёта для последующего
   * отображения в боковой колонке.
   * item - объект с данными о счёте
   * */
  getAccountHTML(item) {
    return `<li class="active account" data-id="${item.account_id}"><a href="#"><span>${item.name}</span> /<span>${item.sum} ₽</span></a></li>`;

  }

  /**
   * Получает массив с информацией о счетах.
   * Отображает полученный с помощью метода
   * AccountsWidget.getAccountHTML HTML-код элемента
   * и добавляет его внутрь элемента виджета
   * */
  renderItem(item) {
    let mas = JSON.parse(item);
    mas.forEach(e => insertAdjacentHTML("beforeend", this.getAccountHTML(e)));
    }
}