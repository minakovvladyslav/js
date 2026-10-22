window.addEventListener(`load`, () => {
  document.addEventListener(`click`, actions);
  function actions(e: MouseEvent) {
    const targetElement = e.target as HTMLElement;
    const elementType = e.type;
    if (targetElement.closest(`.btn0`)) {
      const nameOfFirstChildren: string =
        prompt(`Введіть ім'я першої дитини`) ?? `дитина №1`;
      const firstChildrenQuantityOfCandies: number = parseInt(
        prompt(`Введіть кількість цукерок першої дитини`) ?? `1`,
      );
      const nameOfSecondChildren: string =
        prompt(`Введіть ім'я другої дитини`) ?? `дитина №2`;
      const secondChildrenQuantityOfCandies: number = parseInt(
        prompt(`Введіть кількість цукерок друшгої дитиини`) ?? `2`,
      );
      const spanElement = document.querySelector(`.span0`)!;
      let text:string = ``
      if (firstChildrenQuantityOfCandies != secondChildrenQuantityOfCandies) {
        if (firstChildrenQuantityOfCandies > secondChildrenQuantityOfCandies) {
          text = `У дитини ${nameOfFirstChildren} на ${firstChildrenQuantityOfCandies - secondChildrenQuantityOfCandies} цукерок більше`;
        } else {
          text = `У дитини ${nameOfSecondChildren} на ${secondChildrenQuantityOfCandies - firstChildrenQuantityOfCandies} цукерок більше`;
        }
      } else {
        text = `В обох дітей цукерок порівну!`;
      }
      spanElement.textContent = `${text}`
    }

    if (targetElement.closest(`.btn1`)) {
      const priceOfProduct = parseFloat(prompt(`Введіть ціну товару`)!);
      const money = parseFloat(prompt(`Введіть кількість грошей`)!);
      const spanElement = document.querySelector(`.span1`)!;
      let text :string = ``
      if (priceOfProduct > money) {
        alert(`Вибачте, не вистачає грошей`)
        throw new Error("Помилка, не достатньо грошей")
      } else {
        let change: number = money - priceOfProduct;
        if (change > 0) {
          if (change >= 4) {
            const quantityOfLottery: number = Math.round(change / 4);
            switch (quantityOfLottery) {
              case 1:
              case 1 + 1:
              case 4 - 1:
              case 4:
              case 5:
                text = `Дякуємо за вашу покупку, ось ваша решта(${change.toFixed(2)}),та за вашу решту можу вам запропонувати ${quantityOfLottery} - лотереєк`;
                break;
              default:
                text = `Дякуємо за вашу покупку, ось ваша решта(${change.toFixed(2)}),хочете лотерейку?`;
                break
            }
          } else {
            text = `Дякуємо за вашу покупку, ось ваша решта(${change.toFixed(2)})`;
          }
        } else {
          text = `Дякуємо за вашу покупку, бажаю тихого вечора`;
        }
      }

      spanElement.textContent = `${text}`
    }

    if (targetElement.closest(`.btn2`)) {
      const randomNumber: number = Math.floor(Math.random() * 5 + 1);
      let numberOfUser: number = parseInt(
        prompt(`Спробуйте вгадати число`) ?? `1`,
      );
      const congratulationMessage: string = `Супер!Ви вгадали!`;
      if (randomNumber === numberOfUser) {
        alert(congratulationMessage);
      } else {
        let numberOfUser: number = parseInt(
          prompt(`Нажаль це не воно.Спробуйте ще раз`) ?? `1`,
        );
        if (randomNumber === numberOfUser) {
          alert(congratulationMessage);
        } else {
          alert(
            `Шкода,але ви не вгадали.Загадане число було(${randomNumber}). Може повезе іншим разом :)`,
          );
        }
      }
    }
    if (targetElement.closest(`.btn3`)) {
      const userAge: number = parseInt(prompt(`Введіть вік людини`) ?? "18");
      const spanElement = document.querySelector(`.span3`)!;
      let text = ``!;
      if (userAge <= 0 ||  userAge > 150) {
        alert(`невірно введений вік`);
        throw new Error("Помилка, скорегуйте вік");
      } else if (userAge <= 3) {
        text = `Мала дитина`;
      } else if (userAge <= 6) {
        text = `Дитина у садочку`;
      } else if (userAge <= 17) {
        text = `Школяр`;
      } else if (userAge <= 23) {
        text = `Студент`;
      } else if (userAge <= 65) {
        text = `Працівник`;
      } else {
        text = `А вік це просто цифра!`;
      }
      spanElement.textContent = `${text}`;
    }

    if(targetElement.closest(`.btn4`)) {
      const category:string = prompt(`Введіть категорію посвідчення`) ?? `A`
      const spanElement = document.querySelector(`.span4`)!
      let text:string = ``
      switch(category.toUpperCase()) {
        case `A`:
          text = `Мотоцикли`
          break
        case `B`:
            text ='Автомобілі легкові'
            break
        case `C`: 
            text ='Автомобілі вантажні'
            break
        default :
          alert('Невірно введена категорія')
          throw new Error(`Помилка задання категорії`)
      }
      spanElement.textContent = `${text}`
    }

    if(targetElement.closest(`.btn5`)) {
      const dayOfWeek:number = parseInt(prompt(`Введіть цифру дня тижня`) ?? `1`)
      const spanElement = document.querySelector(`.span5`)!
      let text:string = ``
      switch(dayOfWeek) {
        case 1:
          text = `Понеділок`
          break
        case 2:
          text = `Вівторок`
          break
        case 3:
          text = `Середа`
          break
        case 4:
          text = `Четверг`
          break
        case 5:
          text = `П'ятниця`
          break
        case 6:
          text = `Субота`
          break
        case 7:
          text = `Неділя`
          break
        default :
        alert(`невірно заданний день тижня!`)
        throw new Error(`невірно заданний день тижня`)
      }
      spanElement.textContent = `${text}`
    }

    if(targetElement.closest(`.btn6`)) {
      const month:number = parseInt(prompt(`Введіть число місяця`) ?? `1`)
      const spanElement  = document.querySelector(`.span6`)!
      let text: string = ``
      if(month >= 3 && month<= 5) {
        text = `Весна`
      } else if(month >= 6 && month<= 8) {
        text = `Літо`
      } else if(month >= 9 && month<= 11) {
        text = `Осінь`
      } else if(month === 12 || month<= 2) {
        text = `Зима`
      } else {
        alert(`Невірне число місяця`)
        throw new Error(`Невірне число місяця`)
      }
      spanElement.textContent = `${text}`
    }
  }
});
