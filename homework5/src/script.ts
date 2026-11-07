window.addEventListener(`load`, () => {
  document.addEventListener(`click`,(e:MouseEvent) => {
    const targetElement = e.target as HTMLElement
    if(targetElement.closest(`#button1`)) {
      //Задаємо числа
      const NUM_FIRST:number = parseFloat(prompt(`Введіть перше число:`) ?? `0`)
      const NUM_SECOND:number = parseFloat(prompt(`Введіть друге число:`) ?? `0`) 
      const NUM_THIRD:number = parseFloat(prompt(`Введіть третє число:`) ?? `0`) 
      const NUM_FOURTH:number = parseFloat(prompt(`Введіть четверте число:`) ?? `0`) 
    //Функція на знаходження суми  
      function toSum(num1:number, num2:number, num3:number, num4:number):number {
        return num1 + num2 + num3 + num4
      }
    //Функція на знаходження добутку
      function toMultiplication(num1:number, num2:number, num3:number, num4:number):number {
        return num1 * num2 * num3 * num4
      }
    //Функція на знаходження середнє арифметичне
      function toArithmeticMean(num1:number, num2:number, num3:number, num4:number):number {
        return (num1 + num2 + num3 + num4) / 4
      }
    //Функція на знаходження мінімальне значення.
      function findTheMinNum(num1:number, num2:number, num3:number, num4:number):number {
        const firstNum:number = num1 < num2 ? num1 : num2
        const secondNum:number = num3 < num4 ? num3 : num4
        return firstNum < secondNum ? firstNum : secondNum
      }
    //Виводимо до SPAN  
      document.querySelector(`#span1`)!.textContent = `Сума:${toSum(NUM_FIRST,NUM_SECOND, NUM_THIRD, NUM_FOURTH )}`
      document.querySelector(`#span2`)!.textContent = `Добуток:${toMultiplication(NUM_FIRST,NUM_SECOND, NUM_THIRD, NUM_FOURTH )}`
      document.querySelector(`#span3`)!.textContent = `Середнє арифметичне:${toArithmeticMean(NUM_FIRST,NUM_SECOND, NUM_THIRD, NUM_FOURTH )}`
      document.querySelector(`#span4`)!.textContent = `Мінімальне значення:${findTheMinNum(NUM_FIRST,NUM_SECOND, NUM_THIRD, NUM_FOURTH )}`
    }

    if(targetElement.closest(`#button2`)) {
    //Задаєемо аосилання на фото
      const imageElement:string = prompt(`Введіть посилання на ваше фото:`) ?? ``
    //Задання теску заголовку 
      const titleElement:string = prompt(`Введіть заголовок:`) ?? `Заголовок`
    //Посилання на сайт з банера
      const linkElement:string = prompt(`Введіть посилання на ваш сайт:`) ?? ``
    //Задаємо функію на створення банера(void - тому,що нічого не повертаємо)
      function setABanner(imgWay:string, title:string, linkWay: string):void {
      //Вставляємо елементи до document.write,та додаємо трохи стилів
        document.write(`<a href="${linkElement}" style="color:Green;text-decoration:none;overflow: hidden;top: 0;width: 100%;height: 300px;display: block;position:relative;"><img src="${imageElement}" style="z-index:1;position:absolute;width:100%;height:100%;top:0;left:0;object-fit:cover;"><h2 style="text-transform:uppercase;margin-top:200px;text-align:center;position:relative;z-index:5;">${titleElement}</h2></a>`)
      }
    //Передаємо те, що задав користувач у функцію
      setABanner(imageElement,titleElement,linkElement)
    }

    if(targetElement.closest(`#button3`)) {
    //Задання данних для таблиці,кількість стовпчиків,рядків,повідомлення
      const quantityOfColumns:number = parseFloat(prompt(`Введіть кількість стовпчиків`) ?? `1`) 
      const quantityOfRows:number = parseFloat(prompt(`Введіть кількість рядків`) ?? `1`) 
      const messageInTable:string = prompt(`Введіть ваше повідомлення для таблиці`) ?? `Ваше повідомлення`
      function setATable(numRows:number, numColumns:number, message:string):void {
        //Створюємо таблицю
        document.write(`<table border="2px solid black">`)
        //Задаємо цикл для створення рядка
        for(let numR = 0;numR < numRows; numR++) {
          document.write(`<tr>`)
        //Задаємо цикл в середині циклу для створення колонок
          for(let numC = 0; numC < numColumns; numC++) {
            document.write(`<td>`)
            //Виводимо повідомлення в середені колонки
            document.write(`${message}`)
            document.write(`</td>`)
          }
          document.write(`<tr>`)
        }
        document.write(`</table>`)
      }
     //Передаємо данні до функції 
      setATable(quantityOfRows,quantityOfColumns,messageInTable)
    }

    if(targetElement.closest(`#button4`)) {
     //Задаємо даннні для переводу до інших одиниць вимірювання
      const centimetersEl = parseFloat(prompt(`Скільки сантиметрів перевести у дюми?`) ?? `0`) 
      const kilogramsEl = parseFloat(prompt(`Скільки кілограмм перевести у фунти?`) ?? `0`) 
      const kilometersEl = parseFloat(prompt(`Скільки кіллометрів перевести у милі?`) ?? `0`) 
     //Функція для переводу сантиметрів у дюйми 
      function toInch(quantity:number):number {
        return quantity / 2.54
      }
      //Функція для переводу кілограм у фунти
      function toPound(quantity:number):number {
        return quantity * 2.2046
      }
      //Функція для переводу кілломерти у милі
      function toMiles(quantity:number):number {
        return quantity * 0.621371
      }
      //Вивід данних у SPAN 
      document.querySelector(`#span5`)!.textContent = `Сантиметри у дюйми: ${(toInch(centimetersEl))}`
      document.querySelector(`#span6`)!.textContent = `Кілограми у фунти: ${toPound(kilogramsEl)}`
      document.querySelector(`#span7`)!.textContent = `Кілометри у милі: ${toMiles(kilometersEl)}`
    }

    if(targetElement.closest(`#button5`)) {
    //Вводяться три рандомних числа користувачем 
      const FIRST_NUM = parseInt(prompt(`Ввеідть перше число`) ?? `0`)
      const SECOND_NUM = parseInt(prompt(`Ввеідть друге число`) ?? `0`)
      const THIRD_NUM = parseInt(prompt(`Ввеідть третє число`) ?? `0`)
    //Можнна було зробити три окремих функції,але в умові йдеться про одну
      function toCheckNum(num1:number, num2:number, num3:number):string {
      //Задаємо перемінні для подальшого виводу інформації
        let normalNum = 0
        let evenNum = 0
        let biggerThenOneHundred = 0
      //Перевірка цифр на додатнє число
        if(num1 > 0) normalNum++
        if(num2 > 0) normalNum++
        if(num3 > 0) normalNum++
      //Перевірка на парне число
        if(num1%2 === 0) evenNum++
        if(num2%2 === 0) evenNum++
        if(num3%2 === 0) evenNum++
      //Перевірка на число більше 100
        if(num1 > 100) biggerThenOneHundred++
        if(num2 > 100) biggerThenOneHundred++
        if(num3 > 100) biggerThenOneHundred++
      //Вивід інформації у вигляді рядка зі вставленними змінними
        return `Кількість парних чисел: ${evenNum}, Кількість чисел більше 0 - ${normalNum}, Кількість чисел більше 100 - ${biggerThenOneHundred}`
      }
      //Вивід інформації до SPAN
      document.querySelector(`#span8`)!.textContent = `${toCheckNum(FIRST_NUM,SECOND_NUM,THIRD_NUM)}`
    }
  })
})