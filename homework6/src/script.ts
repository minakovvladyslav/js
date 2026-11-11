window.addEventListener(`load`,() => {
  document.addEventListener(`click`,(e:MouseEvent) => {
    const targetElement = e.target as HTMLElement
    if(targetElement.closest(`#button1`)) {
      function getTypeOfStudent(grades:number[]):string {
        let sum:number = 0
        let message = ``
        let statusStudent = false
        for(let i = 0;i < grades.length;i++) {
          if(grades[i] < 3) {
            message = 'Ви двійочник,ваш середній бал:'
            statusStudent = true
          } else if(grades[i] < 4 && statusStudent === false) {
            message = 'Ви трійочник,ваш середній бал:'
            statusStudent = true
          }
          sum += grades[i]
        }
        const averageScore = sum/grades.length 
        if(averageScore < 5 && statusStudent === false) message = 'Ви хорошист,ваш середній бал:'
        else if(averageScore === 5 && statusStudent === false) message = 'Ви відмінник,ваш середній бал:'
        return `${message}${averageScore}`
      }
    function setArr(quantity:number):number[] {
      const arr = new Array(quantity)
      for(let i = 0; i < quantity;i++) {
        const grade = parseInt(prompt(`Введіть оцінку від 1 до 5 (оцінка ${i+1})`) ?? `1`)
        if(grade >= 1 && grade <= 5) {
          arr[i]=(grade)
        }
        else {
          alert(`Невірно задана оцінка`)
          throw new Error(`Error of grade!`)
        } 
    }
    return arr
    }
    const QUANTITY_OF_GRADES = parseInt(prompt(`Введіть кількість оцінок`) ?? `0`)
    const GRADES_OF_STUDENT = setArr(QUANTITY_OF_GRADES)
    document.write(getTypeOfStudent(GRADES_OF_STUDENT))
  }

  if(targetElement.closest(`#button2`)) {
    const MASSIVE_LENG = parseInt(prompt(`введіть довжину ігрового поля(мінімум 2!)`) ?? `2`)
    const QUANTITY_OF_SHIPS = parseInt(prompt(`введіть кількість кораблів`) ?? `1`)
    const gamePlace = setShips(MASSIVE_LENG, QUANTITY_OF_SHIPS)
    function setShips(lenght:number,quantity:number):number[] {
      if(isFinite(lenght) && lenght > 1 && lenght < 100 && lenght >= quantity && quantity > 0 && isFinite(quantity) && quantity < 100) {
        const arr = new Array(lenght).fill(0)
        do {
          const setShip = 1 + Math.floor(Math.random() * lenght)
          if(arr[setShip] === 0){
            arr[setShip] = 1
            quantity--
          }
          else continue
        } while (quantity > 0)
        return arr
      }
      else {
        alert(`Помилка!`)
        throw new Error(`Невірно введені координати`)
      }
    }

    function setGame(lenght:number,arr:number[],quantity:number):void {
      do {
        const USER_CHOOSE_A_TARGET:number = parseInt(prompt(`Введіть число клітинки куди будете стріляти від 1 до ${lenght}`) ?? `2`) - 1
        if(isFinite(USER_CHOOSE_A_TARGET) && USER_CHOOSE_A_TARGET <= lenght) {
          if(arr[USER_CHOOSE_A_TARGET] === 1) {
            quantity--
            alert(`Супер,ви поцілили точно у ціль!`)
          } else {
            alert(`Промах...`)
          }
        } else {
          alert(`Помилка,введіть потрібні координати.`)
        }
      }while(quantity > 0)
      alert(`Супер,знищенно усі кораблі!`)  
    }
    setGame(MASSIVE_LENG,gamePlace,QUANTITY_OF_SHIPS)
  }

  if(targetElement.closest(`#button3`)) {
    const productTitles = [`Сир`,`Ковбаса`,`Молоко`,`Лимонад`,`Пиріжок`]
    const productPrices = [100, 250, 50,30,15]
    const userMoney = parseInt(prompt(`Введіть кількіть грошей`) ?? `100`)
    function giveUserProducts(titles:string[],prices:number[], money:number):void {
      document.write(`Що можу вам запропонувати, за сумму ${userMoney} гривень? </br>`)
      let offerProduct = false
      for(let i = 0; i < titles.length; i++) {
        if(money >= prices[i]) {
          document.write(`${titles[i]}: ${prices[i]} </br>`)
          offerProduct = true
        }
      }
      if(offerProduct === false)
        document.write(`Нажаль, нічого`)
    }
    giveUserProducts(productTitles,productPrices,userMoney)
  }
  if(targetElement.closest(`#button4`)) {
    const PAYMENTS = setArr()
    function setArr():number[] {
      const arr = []
      let month = 1
      do {
        const USER_SET_PAYMENT = parseInt(prompt(`Введіть сумму платіжки за місяць${month}`) ?? `1`)
        if(USER_SET_PAYMENT > 0) {
          arr.push(USER_SET_PAYMENT)
          month++
        }
        else
          alert('Уважно,невірно введена сума!')
      } while(month <= 12)
      return arr
    }
    function sumForWholeYear(arr:number[]):void{
      let sum = 0
      for(let i = 0; i <arr.length; i++) {
        sum +=arr[i]
      }
      document.write(`сума за весь рік: ${sum}</br>`)
    }

    function sumForFirstPartOfYear(arr:number[]):void {
      let sum = 0
      for(let i = 0; i <arr.length / 2; i++) {
        sum +=arr[i]
      }
      document.write(`сума за першу половину року: ${sum}</br>`)
    }

    function sumForSEcondPartOfYear(arr:number[]):void {
      let sum = 0
      for(let i = arr.length / 2; i <arr.length; i++) {
        sum +=arr[i]
      }
      document.write(`сума за другу половину року: ${sum}</br>`)
    }

    function sumForSummer(arr:number[]):void {
      let sum = 0
      for(let i = 6; i <9; i++) {
        sum +=arr[i]
      }
      document.write(`сума за літо ${sum}</br>`)
    }

    function sumForQuarter(arr:number[]):void {
      let sum = 0
      for(let i = 4; i <7; i++) {
        sum +=arr[i]
      }
      document.write(`сума за другий квартал ${sum}</br>`)
    }

    function sumForEvenMonth(arr:number[]):void {
      let sum = 0
      for(let i = 0; i < arr.length; i+=2) {
        sum +=arr[i]
      }
      document.write(`сума за парні місяці ${sum}</br>`)
    }

    function sumForMonthStartOfSeason(arr:number[]):void {
      let sum = 0
      for(let i = 2; i < arr.length; i+=3) {
        sum +=arr[i]
      }
      document.write(`сума за місяці на початку сезону ${sum} </br>`)
    }

    sumForMonthStartOfSeason(PAYMENTS)
    sumForEvenMonth(PAYMENTS)
    sumForSummer(PAYMENTS)
    sumForSEcondPartOfYear(PAYMENTS)
    sumForFirstPartOfYear(PAYMENTS)
    sumForWholeYear(PAYMENTS)
  }

  if(targetElement.closest(`#button5`)) {
    const QUANTITY_OF_NUMBERS = parseInt(prompt(`Введіть кількісь номерів`) ?? `2`)
    const NUMBERS = setNumbers(QUANTITY_OF_NUMBERS)
    function setNumbers(quantity:number):string[] {
      if(quantity > 0) {
          const arr = new Array(quantity)
        for(let i = 0; i < quantity; i++) {
        const NUM = prompt(`Введіть ваш номер`)
        arr[i] = NUM
      }
      return arr
      } else 
        alert('Введіть кількість номерів!')
        throw new Error(`Помилка у данних!`)
    }
    
    function startFromA(arr:string[]):void {
      for(let i = 0; i < arr.length; i++) {
        const numString:string = arr[i]
        if(numString[0].toLowerCase() === `a`) {
          document.write(`Починаются з А: ${arr[i]}</br>`)
        } 
      }
    }

    function startEndAreSame(arr:string[]):void {
      for(let i = 0; i < arr.length; i++) {
        const numString:string = arr[i]
        if(numString[0].toLowerCase() ===  numString[numString.length-1].toLowerCase()) {
          document.write(`Перші і останні символи однакові: ${arr[i]}</br>`)
        } 
      }
    }

    function longNum(arr:string[]):void {
      for(let i = 0; i < arr.length; i++) {
        const numString:string = arr[i]
        if(numString.length > 5) {
          document.write(`Номер більше за 5 симолів: ${arr[i]}</br>`)
        } 
      }
    }

    longNum(NUMBERS)
    startEndAreSame(NUMBERS)
    startFromA(NUMBERS)
  }
  })
})