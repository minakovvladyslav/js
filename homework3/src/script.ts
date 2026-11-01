window.addEventListener(`load`, () => {
  document.addEventListener(`click`, (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement
    if(targetElement.closest(`#button01`)) {
      //Беремо у масив всі літери англійського алфавіту
      const letters =[`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`]
    //Створюємо два цикли до п'яти,бо в завданні був квадрат 5 на 5
      for(let i = 0; i < 5; i++) {
        for(let num = 0; num < 5; num++) {
      //створюємо внутрішній цикл,з умою,після кожного завершення цикла(5 ітерацій),цикл буде заповнюватись наступними сусідніми літерами
          document.write(`${letters[num+i]}`)
        }
        document.write(`<br>`)
      }
    }

    if(targetElement.closest(`#button02`)) {
    //Стоврюємо зовнішній цикл,він виконається 3 рази,для того, щоб було 3 гілки 
      for(let i = 0; i < 3; i++) {
      //Створюємо пусту змінну,для того щоб додавати сюди 0, і з кожною ітерацією буде на 1 нуль більше,з кожною зовніщньою ітерацією circles буде регеструватись наново(дорівнювати ' ') 
        let circles = ``
        for(let num = 0; num < 5; num++) {
          circles += `0`
      //Виводимо нулі на екран,після кожної внутрішньої ітерації
          document.write(`${circles}</br>`)
        }
      }
    }

    if(targetElement.closest(`#button03`)) {
      //Запускаємо цикл від 100 до 999, щоб знайти всі числа Армстронга для n = 3
      for(let i = 100; i < 1000; i++) {
      //Перетворюємо і на рядок,для того щоб можна було працювати з окремими цифрами числа  
        const numStr: string = i.toString()
      //Створюємо змінну для того щоб додавати сюди суму кожної цифри в степені n  
        let numSum:number = 0
      //Створюємо цикл для того щоб опрацювати кожне число окремо(ао факту робимо це для скророчення коду)
      //Ми скоротили цей запис
      // const numSum:number = Math.pow(Number(numStr[0]),numStr.length) + Math.pow(Number(numStr[1]),numStr.length) + Math.pow(Number(numStr[2]),numStr.length) 
        for(let j = 0; j < numStr.length; j++) {
      //До змінної додаємо добуток кожної степені
          numSum += Math.pow(Number(numStr[j]),numStr.length)
        }  
      //Порівнюємо чи сумма степені трох чисел в степені n дорівнює числу ітерації  
        if(numSum === i) {
      //Якщо умова виконується - виводимо це число    
          document.write(`${i}</br>`)
        }
      }
      document.write(`<hr>`)
      //теж саме для чисел Армстронга для n = 4(від 1000 до 9999)
      for(let i = 1000; i < 10000; i++) {
        const numStr: string = i.toString()
        let numSum = 0
        for(let j = 0; j< numStr.length; j++) {
          numSum += Math.pow(Number(numStr[j]),numStr.length)
        } 
        if(numSum === i) {
          document.write(`${i}</br>`)
        }
      }
    }
  })
})