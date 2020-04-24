/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
// let form;
// let ee;
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    // console.log(element.className);
    if (element.className == "form") {
      this.element = element;
      this.registerEvents();
    } else {
      throw "переданный элемент не существует";
    }
  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */

  registerEvents() {
    let bb = this.onSubmit;
    this.element.addEventListener("submit", function (e) {
      e.preventDefault();
      if (e.target != null) {
        let object = {};
        let formData = new FormData(e.target);
        formData.forEach(function (value, key) {
          object[key] = value;
        });
        console.log('JSON.stringify(object)');
        console.log(object);
        bb(object);
      }
    });
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  // getData() {
  //   let object = {};
  //   let formData = new FormData(form);
  //   formData.forEach(function (value, key) {
  //     object[key] = value;
  //   });
  //   // let json = object;
  //   return object;
  // }

  // onSubmit(options) {

  // }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  // submittt() {
  //   console.log(window);
  //   console.log(form);
  //   console.log(ee.getData());

  //   // form.onSubmit(this.getData());
  // }
}