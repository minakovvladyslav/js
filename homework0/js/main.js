window.addEventListener(`load`, () => {
  document.addEventListener(`click`, homeWork)
  function homeWork (e) {
    const targetType = e.type
    const targetElement = e.target
    if(targetType == `click`) {
      if(targetElement.closest(`#ex0`)) {
        //Введення чисел
        const numberA = parseInt(prompt(`Введіть а`, `2`))
        const numberB = parseInt(prompt(`Введіть b`, `2`))
        const numberC = parseInt(prompt(`Введіть c`, `4`))
        //Знаходження їх суми
        const sum0 = numberA + 12 + numberB
        document.querySelector(`#ex00Span`).textContent= `Завдання 0.1,Відовідь =  ${sum0}`
        //Квадратний корінь
        const sum1 = Math.sqrt((numberA + numberB) / (numberA * numberA))
        document.querySelector(`#ex01Span`).textContent= `Завдання 0.2,Відовідь =  ${sum1.toFixed(4)}`
        //Кубічний корінь
        const sum2 = Math.cbrt((numberA + numberB)* numberC)
        document.querySelector(`#ex02Span`).textContent= `Завдання 0.3,Відовідь =  ${sum2.toFixed(4)}`
        //Знаходження сінуса
        const sum3 = Math.sin(numberA / -numberB)
        document.querySelector(`#ex03Span`).textContent= `Завдання 0.4,Відовідь =  ${sum3.toFixed(4)}`
      }

      if(targetElement.closest(`#ex1`)) {
        const numberA = parseFloat(prompt(`Введіть дійсне число`, `1.23`))
        const numberB = parseFloat(prompt(`Введіть дійсне число`, `2.45`))
        //Знаходження їх суми
        const sum0 = numberA + numberB
        //Знаходження добутка
        const sum1 = numberA * numberB
        //Знаходження частки
        const sum2 = numberA /  numberB
        document.querySelector(`#ex1Sum`).textContent = sum0.toFixed(4)
        document.querySelector(`#ex1Share`).textContent = sum1.toFixed(4)
        document.querySelector(`#ex1Multiplication`).textContent = sum2.toFixed(4)
      }

      if(targetElement.closest(`#ex2`)) {
        //Введення сьогоднішньої дати
        const todayYear = parseInt(prompt(`Введіть сьогоднішній рік`, `2026`))
        const todayMonth = parseInt(prompt(`Введіть сьогоднішній місяць(без нуля)`, `8`))
        const todayDay = parseInt(prompt(`Введіть сьогоднішній день(без нуля)`, `27`))
        //Введення дати народження
        const birthdayYear = parseInt(prompt(`Введіть рік свого народження`, `2002`))
        const birthdayMonth = parseInt(prompt(`Введіть місяць свого народження(без нуля)`, `9`))
        const birthdayDay = parseInt(prompt(`Введіть день свого народження(без нуля)`, `9`))
        //обчислення днів, місяців, років
        let sumYear = todayYear - birthdayYear
        let sumDay = todayDay - birthdayDay
        let sumMonth = todayMonth - birthdayMonth
        //Беремо сьогоднішній місяць в змінну,будемо брати на минулий місяць у випадку якщо різніця днів < 0
        let monthForChange = todayMonth
        //Якщо різниця місяців число менше 0 - віднімаємо 1 рік
        if(sumMonth < 0) {
          --sumYear
          sumMonth = 12-Math.abs(sumMonth)
        }
        //Якщо різниця днів число менше 0 - віднімаємо 1 місяць
        if(sumDay < 0) {
          --sumMonth
          //Беремо в масив дні місяців по порядку для зручного користування
          const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
          if(sumMonth < 0) {
            //Якщо різниця місяців число менше 0 - віднімаємо 1 рік
            --sumYear
            //Знаходження місяця шляхов віднімання різниці місяців від 12
            sumMonth = 12-Math.abs(sumMonth)
          }
          //Перевірка,на перший та останній місяці року,якщо зараз в нас січень - треба відняти від грудня,якщо грудень - то від листопада
          if((monthForChange -=1) < 0) {
            monthForChange = 12
          }
          if((monthForChange -=2) < 0) {
            monthForChange = 13
          }
          //обичлюємо дні минулого місяця та різницю днів
          sumDay = daysInMonth[monthForChange -=2] - Math.abs(sumDay)
        }
        //вивід у span
        document.querySelector(`#ex2Span`).textContent = `Станом на ${todayYear}.${todayMonth}.${todayDay} Вам є ${sumYear} років,${sumMonth} місяіцв та ${sumDay} днів`
      }

      if(targetElement.closest(`#ex3`)) {
        //задання кількості та ціни
        const price = parseInt(prompt(`Введіть вартість товару`,`10`))
        const quantity = parseInt(prompt(`Введіть кількість товару`,`10`))
        //знаходження ціни
        const sum = price * quantity
        //знаходження НДС
        const taxes = sum * 5 / 100
        document.querySelector(`#ex3Span`).textContent = `Сума до сплати: ${sum}, з цього податки: ${taxes}`
      }

      if(targetElement.closest(`#ex4`)) {
        //введення сантиметрів
        const centimeters = parseInt(prompt(`Введіть кількість сантиметрів`,`10`))
        //знаходження метрів
        const meters = centimeters / 100
        //знаходження кілометрів
        const kilometers = centimeters / 100000 
        document.querySelector(`#ex4Span`).textContent = `метри: ${meters}, кіллометри: ${kilometers}`
      }
      
      if(targetElement.closest(`#ex5`)) {
        //введення секунд
        const secunds = parseInt(prompt(`Введіть кількість секунд`,`10`))
        //знаходження хвилин
        const minutes = secunds / 60
        //знаходження годин
        const hours = secunds / 3600
        document.querySelector(`#ex5Span`).textContent = `хвилин:${minutes}, годин: ${hours}`
      }

      if(targetElement.closest(`#ex6`)) {
        //це зробленно виключно для анімації появи чеку
        document.documentElement.setAttribute(`data-show`,``)
        //введеня кількості та ціни товарів
        const firstProductPrice = parseFloat(prompt(`Введіть ціну першого товару`,`20`))
        const firstProductQuantity = parseInt(prompt(`Введіть кількість першого товару`,`2`))
        const secondProductPrice = parseFloat(prompt(`Введіть ціну другого товару`,`20`))
        const secnodnProductQuantity = parseInt(prompt(`Введіть другого першого товару`,`2`))
        const thirdProductPrice = parseFloat(prompt(`Введіть ціну третього товару`,`20`))
        const thirdProductQuantity = parseInt(prompt(`Введіть третього першого товару`,`2`))
        //знаходження суми
        const sum = (firstProductQuantity * firstProductPrice) + (secnodnProductQuantity * secondProductPrice) + (thirdProductPrice * thirdProductQuantity)
        //вівід данних у чек шляхом множення кількості на ціну
        document.querySelector(`#ex6P1`).textContent = `Товар №1(кількість: ${firstProductQuantity},ціна за таку кількіть :${(firstProductQuantity * firstProductPrice).toFixed(2)}) `
        document.querySelector(`#ex6P2`).textContent = `Товар №2(кількість: ${secnodnProductQuantity},ціна за таку кількіть :${(secnodnProductQuantity * secondProductPrice).toFixed(2)}) `
        document.querySelector(`#ex6P3`).textContent = `Товар №3(кількість: ${thirdProductQuantity},ціна за таку кількіть :${(thirdProductPrice * thirdProductQuantity).toFixed(2)}) `
        document.querySelector(`#ex6P4`).textContent = `Cума :${sum.toFixed(2)} `
        //знаходження НДС
        document.querySelector(`#ex6P5`).textContent = `НДС :${((firstProductQuantity * firstProductPrice) + (secnodnProductQuantity * secondProductPrice) + (thirdProductPrice * thirdProductQuantity)) * 5 / 100} `
        //нарахування балів
        if(sum / 100 < 1) {
          document.querySelector(`#ex6P6`).textContent = `Нарахованно балів :1 `
        } else {
          document.querySelector(`#ex6P6`).textContent = `Нарахованно балів :${parseInt(sum / 100)} `
        }
      }

      if(targetElement.closest(`#ex7`)) {
        //в цих константах кожен раз задаються нові рандомні числа
        const month = parseInt(Math.random()*(12 - 1 +1)+ 1)
        const day = parseInt(Math.random()*(6 - 0 + 1)+ 0)
        //знаходження їх суми
        document.querySelector(`#ex7Span`).textContent = `${day + month}`
      }
    }
  }
})
