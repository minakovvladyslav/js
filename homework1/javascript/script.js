"use strict";
window.addEventListener(`load`, () => {
    document.addEventListener(`click`, actions);
    function actions(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const targetElement = e.target;
        const elementType = e.type;
        if (targetElement.closest(`.btn0`)) {
            const nameOfFirstChildren = (_a = prompt(`Введіть ім'я першої дитини`)) !== null && _a !== void 0 ? _a : `дитина №1`;
            const firstChildrenQuantityOfCandies = parseInt((_b = prompt(`Введіть кількість цукерок першої дитини`)) !== null && _b !== void 0 ? _b : `1`);
            const nameOfSecondChildren = (_c = prompt(`Введіть ім'я другої дитини`)) !== null && _c !== void 0 ? _c : `дитина №2`;
            const secondChildrenQuantityOfCandies = parseInt((_d = prompt(`Введіть кількість цукерок друшгої дитини`)) !== null && _d !== void 0 ? _d : `2`);
            const spanElement = document.querySelector(`.span0`);
            let text = ``;
            if (firstChildrenQuantityOfCandies != secondChildrenQuantityOfCandies) {
                if (firstChildrenQuantityOfCandies > secondChildrenQuantityOfCandies) {
                    text = `У дитини ${nameOfFirstChildren} на ${firstChildrenQuantityOfCandies - secondChildrenQuantityOfCandies} цукерок більше`;
                }
                else {
                    text = `У дитини ${nameOfSecondChildren} на ${secondChildrenQuantityOfCandies - firstChildrenQuantityOfCandies} цукерок більше`;
                }
            }
            else {
                text = `В обох дітей цукерок порівну!`;
            }
            spanElement.textContent = `${text}`;
        }
        if (targetElement.closest(`.btn1`)) {
            const priceOfProduct = parseFloat(prompt(`Введіть ціну товару`));
            const money = parseFloat(prompt(`Введіть кількість грошей`));
            const spanElement = document.querySelector(`.span1`);
            let text = ``;
            if (priceOfProduct > money) {
                alert(`Вибачте, не вистачає грошей`);
                throw new Error("Помилка, не достатньо грошей");
            }
            else {
                let change = money - priceOfProduct;
                if (change > 0) {
                    if (change >= 4) {
                        const quantityOfLottery = Math.round(change / 4);
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
                                break;
                        }
                    }
                    else {
                        text = `Дякуємо за вашу покупку, ось ваша решта(${change.toFixed(2)})`;
                    }
                }
                else {
                    text = `Дякуємо за вашу покупку, бажаю тихого вечора`;
                }
            }
            spanElement.textContent = `${text}`;
        }
        if (targetElement.closest(`.btn2`)) {
            const randomNumber = Math.floor(Math.random() * 5 + 1);
            let numberOfUser = parseInt((_e = prompt(`Спробуйте вгадати число`)) !== null && _e !== void 0 ? _e : `1`);
            const congratulationMessage = `Супер!Ви вгадали!`;
            if (randomNumber === numberOfUser) {
                alert(congratulationMessage);
            }
            else {
                let numberOfUser = parseInt((_f = prompt(`Нажаль це не воно.Спробуйте ще раз`)) !== null && _f !== void 0 ? _f : `1`);
                if (randomNumber === numberOfUser) {
                    alert(congratulationMessage);
                }
                else {
                    alert(`Шкода,але ви не вгадали.Загадане число було(${randomNumber}). Може повезе іншим разом :)`);
                }
            }
        }
        if (targetElement.closest(`.btn3`)) {
            const userAge = parseInt((_g = prompt(`Введіть вік людини`)) !== null && _g !== void 0 ? _g : "18");
            const spanElement = document.querySelector(`.span3`);
            let text = ``;
            if (userAge <= 0 || userAge > 150) {
                alert(`невірно введений вік`);
                throw new Error("Помилка, скорегуйте вік");
            }
            else if (userAge <= 3) {
                text = `Мала дитина`;
            }
            else if (userAge <= 6) {
                text = `Дитина у садочку`;
            }
            else if (userAge <= 17) {
                text = `Школяр`;
            }
            else if (userAge <= 23) {
                text = `Студент`;
            }
            else if (userAge <= 65) {
                text = `Працівник`;
            }
            else {
                text = `А вік це просто цифра!`;
            }
            spanElement.textContent = `${text}`;
        }
        if (targetElement.closest(`.btn4`)) {
            const category = (_h = prompt(`Введіть категорію посвідчення`)) !== null && _h !== void 0 ? _h : `A`;
            const spanElement = document.querySelector(`.span4`);
            let text = ``;
            switch (category.toUpperCase()) {
                case `A`:
                    text = `Мотоцикли`;
                    break;
                case `B`:
                    text = 'Автомобілі легкові';
                    break;
                case `C`:
                    text = 'Автомобілі вантажні';
                    break;
                default:
                    alert('Невірно введена категорія');
                    throw new Error(`Помилка задання категорії`);
            }
            spanElement.textContent = `${text}`;
        }
        if (targetElement.closest(`.btn5`)) {
            const dayOfWeek = parseInt((_j = prompt(`Введіть цифру дня тижня`)) !== null && _j !== void 0 ? _j : `1`);
            const spanElement = document.querySelector(`.span5`);
            let text = ``;
            switch (dayOfWeek) {
                case 1:
                    text = `Понеділок`;
                    break;
                case 2:
                    text = `Вівторок`;
                    break;
                case 3:
                    text = `Середа`;
                    break;
                case 4:
                    text = `Четверг`;
                    break;
                case 5:
                    text = `П'ятниця`;
                    break;
                case 6:
                    text = `Субота`;
                    break;
                case 7:
                    text = `Неділя`;
                    break;
                default:
                    alert(`невірно заданний день тижня!`);
                    throw new Error(`невірно заданний день тижня`);
            }
            spanElement.textContent = `${text}`;
        }
        if (targetElement.closest(`.btn6`)) {
            const month = parseInt((_k = prompt(`Введіть число місяця`)) !== null && _k !== void 0 ? _k : `1`);
            const spanElement = document.querySelector(`.span6`);
            let text = ``;
            if (month >= 3 && month <= 5) {
                text = `Весна`;
            }
            else if (month >= 6 && month <= 8) {
                text = `Літо`;
            }
            else if (month >= 9 && month <= 11) {
                text = `Осінь`;
            }
            else if (month === 12 || month <= 2) {
                text = `Зима`;
            }
            else {
                alert(`Невірне число місяця`);
                throw new Error(`Невірне число місяця`);
            }
            spanElement.textContent = `${text}`;
        }
    }
});
