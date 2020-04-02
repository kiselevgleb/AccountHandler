/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    console.log(element.className);
    if (element.className == "form") {
      this.element = element;
      this.registerEvents();
    } else {
      throw "null";
    }
  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
     let ee = this.element;
    this.element.addEventListener("submit", function (e) {
      console.log(e);

      this.submit();
      e.preventDefault();    
    });
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    let object = {};
    let formData = new FormData(this.element);
    formData.forEach(function (value, key) {
      object[key] = value;
      console.log("eppp");
    });
    var json = JSON.stringify(object);
    return json;
  }

  onSubmit(options) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    console.log("sub2");
    element.onSubmit(getData());
    

  }
}