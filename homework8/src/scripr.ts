window.addEventListener(`load`, () => {
  document.addEventListener(`click`,(e:MouseEvent) => {
    const targetElement = e.target as HTMLElement
    if(targetElement.closest(`#button1`)) {
      //Формуємо масив рандомних цін
      // const PRICE_OF_SECURITIES_FOR_ONE_YEAR:number[] = [1000,550,700,1300,1300,9000,1250.25]
      const PRICE_OF_SECURITIES_FOR_ONE_YEAR:number[] = setRandomNum(1,10000)
      function setRandomNum(from:number, to:number):number[] {
        const arr:number[] = Array.from({length:12}, item => from+Math.floor(Math.random() * (10000 - from + 1)))
        return arr
      }
      //1.Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
      const ARR_WITH_PRICES_HIGHER_1000:number[] = PRICE_OF_SECURITIES_FOR_ONE_YEAR.filter(item => item > 1000)
      document.write(`1)Ціни більше 1000 : ${ARR_WITH_PRICES_HIGHER_1000}</br>`)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
      const ARR_WITH_INDEX_OF_PRICES_HIGHER_1000:number[] = PRICE_OF_SECURITIES_FOR_ONE_YEAR.reduce((indexes,item,index) => {
        //Якщо ціна підходить пушемо її до акумулятора
        if(item > 1000)
          indexes.push(index )
        return indexes 
      },[] as number[])
      document.write(`2) Індекси цін,які більше за 1000: ${ARR_WITH_INDEX_OF_PRICES_HIGHER_1000}</br>`)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //3.Сформувати список з тих цін, які більші за попереднє значення
      function setListOfPrices(arr:number[]):void {
        const prices:number[] = arr.reduce((acc,_,index,arr) => {
          //Якщо наступна ціна більша за попередню-пушемо її до акумулятора
          if(arr[index] < arr[index+1]) {
            acc.push(arr[index+1])
          } 
          return acc
        },[] as number[])
        document.write(`<h2>3)список з тих цін, які більші за попереднє значення</h2>`)
        document.write(`<ol>`)
        //створення циклу для виведення цін у вигляді списку
        for(let i = 0;i < prices.length;i++){
          document.write(`<li>${prices[i]}</li>`)
        }
        document.write(`</ol>`)
      }
      ///Виклик функції
      setListOfPrices(PRICE_OF_SECURITIES_FOR_ONE_YEAR)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
      function returnArrWithPercentOfMaxPrice(arr:number[],maxNum:number):string {
        const ARR_WITH_PRICES_IN_PERCENT_OF_MAX_PRICE:number[] = arr.map(item => item/maxNum*100)
        //округлюємо значення за допомогою toFixed() 
        const correctArr:string[] = ARR_WITH_PRICES_IN_PERCENT_OF_MAX_PRICE.map((_,index,arr) => arr[index].toFixed(1))
        //Виводимо речення для кращого відображення
        const messageForBetterView:string = correctArr.join(`% - `)
        return messageForBetterView
      }
      const ArrWithPricesPercentOfMaxPrice= returnArrWithPercentOfMaxPrice(PRICE_OF_SECURITIES_FOR_ONE_YEAR,10000)
      document.write(`4)Новий масив, що міститить значення цін у відсотках стосовно максимального:</br> ${ ArrWithPricesPercentOfMaxPrice}%</br>`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //5)Підрахувати кількість змін цін
      function countChangesOfPrices(arr:number[]):number {            
        const COUNT_OF_CHANGED_PRICES:number = arr.reduce((acc,_,index,arr) => {
          //Якщо сусідні ціни різні,збільшуємо аккумулятор на 1
          if(arr[index] > arr[index+1] || arr[index] < arr[index+1]) {
            acc++
          }
          return acc
        },0)
        return COUNT_OF_CHANGED_PRICES
      }
      //Виклик функції 
      const COUNT_OF_CHANGED_PRICES:number = countChangesOfPrices(PRICE_OF_SECURITIES_FOR_ONE_YEAR)
      document.write(`5)Ціна змінювалась:${COUNT_OF_CHANGED_PRICES} разів</br>`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 6)Визначити, чи є ціна, що менше 1000
      const checkOfPresentPriceLowerThanNum = (arr:number[],num:number):string => {
        const CHECK_PRICE_LOWER_NUM:boolean = arr.some(price => price < num)
        let MESSAGE:string =`` 
        ///Виводимо повідомлення того,що дала перевірка
        if(CHECK_PRICE_LOWER_NUM !== false) {
          MESSAGE = `Taк є!`
        } else {
          MESSAGE = `Ні,немає!`
        }

        return MESSAGE
      }

      document.write(`6)Чи є ціна, що менше 1000 : ${checkOfPresentPriceLowerThanNum(PRICE_OF_SECURITIES_FOR_ONE_YEAR,1000)}</br>`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //7)Визначати, чи усі ціни більше за 1000
      function checkIfPricesAreHigh(arr:number[],num:number):string {
        const CHECKED_PRICES:boolean = arr.every(price => price > num)
        let MESSAGE:string =`` 
        ///Виводимо повідомлення того,що дала перевірка
        if(CHECKED_PRICES !== false) {
          MESSAGE = `Taк всі!`
        } else {
          MESSAGE = `Ні, не всі!`
        }

        return MESSAGE
      }

      const PRICE_ARE_HIGHER_1000 = checkIfPricesAreHigh(PRICE_OF_SECURITIES_FOR_ONE_YEAR,1000)
      document.write(`7)Чи всі ціни,більші за 1000: ${PRICE_ARE_HIGHER_1000}</br>`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////      
      // 8)Підрахувати кількість цін, що більше за 1000
      function countOfPricesHigherNum(arr:number[], num:number):number {
        const COUNT_OF_PRICES:number = arr.reduce((acc,price) => {
          ///Якщо ціна більше за 1000 - додаємо до акк. +1
          if(price > num) acc++
          return acc
        },0)
        return COUNT_OF_PRICES 
      }

      const COUNT_OF_HIGHER_THAN_1000:number = countOfPricesHigherNum(PRICE_OF_SECURITIES_FOR_ONE_YEAR,1000)
      document.write(`8)Kількість цін, що більше за 1000 : ${COUNT_OF_HIGHER_THAN_1000}</br>`)
///////////////////////////////////////////////////////////////////////////////////////////////////////
      // 9)Підрахувати суму цін, що більше за 1000
      function countSumOfHighPrices(arr:number[], num:number):number {
        const SUM_OF_PRICES:number = arr.reduce((acc,item) => {
          ///Якщо ціна більше за 1000 - додаємо її до акк
          if(item > num) acc += item
          return acc
        },0)

        return SUM_OF_PRICES
      }

      document.write(`9)Cумa цін, що більше за 1000 = ${countSumOfHighPrices(PRICE_OF_SECURITIES_FOR_ONE_YEAR,1000)}</br>`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //10)Знайти першу ціну, що більше за 1000    
      function findTheFirstPriceHigherThanNum(arr:number[], num:number):number {
        const FIRST_PRICE:number = arr.find(price => price > num) !
        return FIRST_PRICE
      }

      document.write(`10)Перша ціна, що більше за 1000 : ${findTheFirstPriceHigherThanNum(PRICE_OF_SECURITIES_FOR_ONE_YEAR,1000)}</br>`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //11)Знайти індекс першої ціни, що більше за 1000      
      const FIRST_INDEX_OF_PRICE_HIGHER_THAN_1000:number = PRICE_OF_SECURITIES_FOR_ONE_YEAR.findIndex(price => price > 1000)
      document.write(`11)Iндекс першої ціни, що більше за 1000 : ${FIRST_INDEX_OF_PRICE_HIGHER_THAN_1000}</br>`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //12)Знайти останню ціну, що більше за 1000 
      const LAST_PRICE_HIGHER_THAN_1000:number = PRICE_OF_SECURITIES_FOR_ONE_YEAR.findLast(price => price > 1000)!
      document.write(`12)Oстанньоя ціна, що більше за 1000 : ${LAST_PRICE_HIGHER_THAN_1000}</br>`)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //13)Знайти індекс останньої ціни, що більше за 1000
      const LAST_INDEX_OF_PRICE_HIGHER_THAN_1000:number = PRICE_OF_SECURITIES_FOR_ONE_YEAR.findLastIndex(price => price > 1000)
      document.write(`13)Iндекс останньої ціни, що більше за 1000 : ${LAST_INDEX_OF_PRICE_HIGHER_THAN_1000}</br>`)
    }
  })
})