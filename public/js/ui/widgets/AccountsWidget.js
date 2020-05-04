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

    console.log(butCreate);
    butCreate.addEventListener("click", function () {
      console.log("createAccount");
      App.getModal('createAccount').open();
    });

    Array.from(butAccount).forEach(element => {
      element.onclick = function () {
        this.onSelectAccount(element);
      }
    });
  }
  // logBut.addEventListener("click", function () {
  //   console.log("log");
  //   App.getModal('login').open();
  // });
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
    if (User.current() != undefined) {
      console.log(localStorage.user);
      let masAcc;
      let ren = this;
      try {
        masAcc = Account.list(JSON.parse(localStorage.user));
        
      } catch (error) {}
      masAcc.onreadystatechange = function () {
        if (masAcc.readyState == 4) {
          ren.clear();
          ren.renderItem(masAcc.response.data);
        }
      };
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
    console.log(item);
    let panel = document.querySelector('.accounts-panel');
    console.log(panel);
    console.log(this);
    if (item.length != null) {
      item.forEach(element => {
        panel.innerHTML += this.getAccountHTML(element);
      });
    }
    // try {

    // let mas = item;
    // item.forEach(e => insertAdjacentHTML("beforeend", this.getAccountHTML(e)));
    // } catch (e) {}
    // renderTransactions(dat) {
    //   let cont = document.querySelector('.content');
    //   if(dat.length!=null){
    //   dat.forEach(element => {cont.innerHTML+=this.getTransactionHTML(element)});}
    // }
  }
}