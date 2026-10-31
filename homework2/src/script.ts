window.addEventListener(`load`,() => {
  let userMoney:number = 1500 
  const spanELement = document.querySelector(`#span3`)!
  spanELement.textContent=`Ваші гроші ${userMoney}`
  //рядки з верху використовуються у завданні про казіно
  document.addEventListener(`click`, (e:MouseEvent) => {
    const targetElement = e.target as HTMLElement
    const typeElement = e.type
    if(targetElement.closest(`#button1`)) {
    //Задаємо пусті змінні для парних та непарних
      let EVEN_NUM:number = 0   
      let ODD_NUM:number = 0  
    //Результат з'явиться в SPAN  
      const spanElement = document.querySelector(`#span1`)!
    //Будуємо цикл  
      for(let i = 0; i< 100; i++) {
        const RANDOM_NUM:number = Math.floor((Math.random() *1000) + 1)
      //Перевірка на парність чисел,якщо число парне то додаємо бал у потрібну змінну  
        if(RANDOM_NUM % 2 === 0) EVEN_NUM++
        else ODD_NUM++
      }
    //Виведення результату  
      if(EVEN_NUM > ODD_NUM)
        spanElement.textContent = `Переможець:Парні-Їх було:${EVEN_NUM}`
      else if(EVEN_NUM < ODD_NUM)
        spanElement.textContent = `Переможець:Непарні-Їх було:${ODD_NUM}`
      else {
        spanElement.textContent = `Кількість рівна`
      }
    }

    if(targetElement.closest(`#button2`)) {
    //Ця змінна для того,чи з'явиться поаідомлення для того щоб підбадьорити гравця
      let userHitTheShip:boolean = false
    //Задання координат кораблю  
      const shipColumnPosition:number = (Math.floor(Math.random()*(4)+1)) ?? 1
      const shipRowPosition:number = (Math.floor(Math.random()*(4)+1)) ?? 1
      const shipPosition:number = (shipRowPosition-1)*2+shipColumnPosition
    //Повідомлення гравцю  
      alert(`Пограємо в морський бій, в нас клітинки 4 на 4:
        # # # #
        # # # #
        # # 🚢#
        # # # #

        десь тут ворожий корабель, знищте його!Маєте 4 спроби`)
      //Кількість спроб  
      let times = 0
      //Обирамо Do While - тому що хочаб один раз цикл мусить виконатись
      do {
      //Гравець задає координати  
        const USER_CHOOSE_A_COLUMN:number = parseInt(prompt(`Введіть яку колонку обираємо, капітане👮🏽‍♂️! (1-4)`) ?? '2')
        const USER_CHOOSE_A_ROW:number = parseInt(prompt(`Введіть який рядок обираємобкапітане👮🏽‍♂️! (1-4)`) ?? '2')
        const userPosition:number = (USER_CHOOSE_A_ROW-1)*2+USER_CHOOSE_A_COLUMN
      //перевірка на те,чи відповідають координати ігровому полю  
        if(USER_CHOOSE_A_COLUMN < 5 && USER_CHOOSE_A_COLUMN > 0 && USER_CHOOSE_A_ROW < 5 && USER_CHOOSE_A_ROW > 0) {
          times++
        //порівняння координат  
          if(userPosition === shipPosition) {
            alert(`Ви його знищили,вітаю!`)
            userHitTheShip = true
            break
          } else {
            if(4 - times > 0) {
              alert(`нажал промах...Але ви ще маєете :${4 - times} спроб`)
            }
          }
        } else alert('Задані хибні координати капітане! 👮🏽‍♂️')
      } while(times < 4)
    //Повідомлення щоб підбадьорити гравця  
      if(userHitTheShip === false)
        alert(`Нажаль вам сьогдні не счастить, але посчастить наступного разу!`)
    }
    
    if(targetElement.closest(`#button3`)) {
      //знаходження результата
      let result:string = ``
      //приз
      let prise:number = 0
      //прівітання граця з призом
      let userGet:number = 0
      //привітання спрацьовує лише при
      let userWin = false
      //Знаходження елементу куди вставимо картки
      const blockElement = document.querySelector(`.exercise-3__pictures`)!
      //ця дія видаляє минулі картки для наступних
      blockElement.querySelectorAll(`img`).forEach(item => {
        item.remove()
      })
      //перевірка якщо у гравця вистачає грошей
      if(userMoney >= 100) {
      //Кожен крок коштуе 100 монет 
        userMoney -= 100
      //Задаємо рандомні картки  
        for(let i = 0; i < 3; i++) {
          const randomNum = Math.floor(Math.random()*(4)+1)
          blockElement.insertAdjacentHTML("beforeend",`<img src="./img/${randomNum}.jpg" alt="fruit">`)
        //Знаходження результату(номерів) рандомних карток для визначення чи вийграв щось гравець
          result += randomNum
        }
      //що саме гравець отримує  
        switch(result) {
          case `111`:
            userGet = 100
            userMoney += userGet
            break

          case `222`:
            userGet = 200
            userMoney += userGet
            break

          case `333`:
            userGet = 500
            userMoney += userGet
            break

          case `444`:
            userGet = 1000
            userMoney += userGet
            break 

          default: 
            prise = 0                       
        } 
        //Для будь якого призу ми повинні привітати гравця
        switch(result) {
          case `111`:
          case `222`:
          case `333`:
          case `444`:
          userWin = true
        }
      } else {
        //Якщо у гравця немає більше грошей
        alert(`В вас немає більше грошей`)
      }
      if(userWin === true) {
        //привітання граця,використано таймер,щоб спершу з'явилися картинки
        setTimeout(()=> {
          alert(`Вітаю,ваш приз: ${userGet}`)
        },100)
      }
      //показ балансу гравця,вставляемо це в SPAN
      spanELement.textContent=`Ваші гроші ${userMoney}` 
    }  

    if(targetElement.closest(`#button4`)) {
      //Задаємло цикл
      for(let i = 0; i < 10; i++) {
        //Вставляємо кожну ітерацію через document.write - потім попрошу перезапустити сторінку для повернення до інших завдань
        document.write(`<div style="margin-bottom:10px;"><span>Product #${i+1}</span><input type="text"></div>`)
      }
    }
    if(targetElement.closest(`#button5`)) {
      //Користувач задає скільки абзаців хоче
      const USER_SET_PARAGRAPH:number = parseInt(prompt(`Яку кількість абзаців хочете?`) ?? `2`)
      //Задаємо цикл,з омеженням числа користувача
      for(let i = 0; i < USER_SET_PARAGRAPH; i++ ) {
        //Задаємо заголовок
        document.write(`<h2>Заголовок${i+1}</h2>`)
        //задаємо скільки параграфів буде у абзаці,параграфів немає бути більше ніж число ітерації
        for(let num = 0; num <=i; num++) {
          document.write(`<p>Розділ${i+1}, параграф${num+1}</p>`)
        }
      //Відокремлення розділів  
      document.write(`<hr>`)  
      }
    }    
  })
})