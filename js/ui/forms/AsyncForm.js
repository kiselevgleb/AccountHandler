/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
let ee;
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
    ee==this.element;
    
    this.element.addEventListener("submit", function (e) {
      console.log(e.target.elements[0].name);
      console.log(e.target.elements[0].value);
      console.log(e.target.elements[1].name);
      console.log(e.target.elements[1].value);
      console.log(e.target.elements[2].name);
      console.log(e.target.elements[2].value);
      ee = "{"+ e.target.elements[0].name+": " + e.target.elements[0].value+", " + e.target.elements[1].name+": " + e.target.elements[1].value+", " + e.target.elements[2].name+": " + e.target.elements[2].value+"}"
      console.log(ee);
      e.preventDefault();
       this.submit();
       
    });
    // console.log(this.getData());
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
    console.log(this.element)
    let formData = new FormData(this.element);
    formData.forEach(function (value, key) {
      object[key] = value;
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
    console.log(this.element);
    this.element.onSubmit(JSON.stringify(ee));
  }
}