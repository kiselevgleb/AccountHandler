/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
let form;
let ee;
// let json;
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
      throw "null";
    }
  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */

  registerEvents() {
    ee==this;
    let b = this.submittt;
    let bb = this.onSubmit;
    this.element.addEventListener("submit", function (e) {
      e.preventDefault();
      if(e.target!=null){
        form = e.target; 
        let object = {};
        let formData = new FormData(form);
        formData.forEach(function (value, key) {
          object[key] = value;
        });
        bb(object)
        // e.onSubmit(object);
        // console.log(b);
        // b();
      }
      // console.log(ee);
      // console.log(form);
      // let object = {};
      // let formData = new FormData(e.target);
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });
      // json = object;
      // console.log(json);
      // ee = "{"+ e.target.elements[0].name+": " + e.target.elements[0].value+", " + e.target.elements[1].name+": " + e.target.elements[1].value+", " + e.target.elements[2].name+": " + e.target.elements[2].value+"}"
      // console.log(ee);
      // console.log(JSON.stringify(ee));

      // return false;
      // form.submit();
    });
    // console.log(bool);
    
    // if(bool){
    //   console.log("3");
    //   this.submittt();
    // }
    
    // console.log(this.getData());
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

  onSubmit(options) {

  }

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