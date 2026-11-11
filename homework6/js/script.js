"use strict";
window.addEventListener(`load`, () => {
    document.addEventListener(`click`, (e) => {
        var _a, _b, _c, _d, _e;
        const targetElement = e.target;
        if (targetElement.closest(`#button1`)) {
            //Об'ява функції для визначення статусу студента
            function getTypeOfStudent(grades) {
                //Змінна для суми оцінок,щоб в подальшому визначити середню оцінку
                let sum = 0;
                //Повідомдення для учня
                let message = ``;
                //Змінна яка впливає на повідомдення
                let statusStudent = false;
                //Цикл для перегляду всіх оцінок
                for (let i = 0; i < grades.length; i++) {
                    //Умова якщо оцінка менше 3,якщо це так то змінюємо повідомлення навіть якщо в повідомленні вже вказано що учень трійочник
                    if (grades[i] < 3) {
                        message = 'Ви двійочник,ваш середній бал:';
                        statusStudent = true;
                        //Умова якщо оцінка менше 4
                    }
                    else if (grades[i] < 4 && statusStudent === false) {
                        message = 'Ви трійочник,ваш середній бал:';
                        statusStudent = true;
                    }
                    sum += grades[i];
                }
                //Серелня оцінка
                const averageScore = sum / grades.length;
                //Виводимо повідомлення якщо не було оцінок 2 або 3
                if (averageScore < 5 && statusStudent === false)
                    message = 'Ви хорошист,ваш середній бал:';
                else if (averageScore === 5 && statusStudent === false)
                    message = 'Ви відмінник,ваш середній бал:';
                //повертаємо речення
                return `${message}${averageScore}`;
            }
            //Функція на встановлення оцінок
            function setArr(quantity) {
                var _a;
                const arr = new Array(quantity);
                for (let i = 0; i < quantity; i++) {
                    const grade = parseInt((_a = prompt(`Введіть оцінку від 1 до 5 (оцінка ${i + 1})`)) !== null && _a !== void 0 ? _a : `1`);
                    //перевірка діапазону оцінок
                    if (grade >= 1 && grade <= 5) {
                        arr[i] = (grade);
                    }
                    else {
                        alert(`Невірно задана оцінка`);
                        throw new Error(`Error of grade!`);
                    }
                }
                //Поверенення масиву оцінок
                return arr;
            }
            //Задання кількості оцінок
            const QUANTITY_OF_GRADES = parseInt((_a = prompt(`Введіть кількість оцінок`)) !== null && _a !== void 0 ? _a : `0`);
            //Задання оцінок
            const GRADES_OF_STUDENT = setArr(QUANTITY_OF_GRADES);
            //Виведення результату
            document.write(getTypeOfStudent(GRADES_OF_STUDENT));
        }
        if (targetElement.closest(`#button2`)) {
            //Задання розміру ігорового поля
            const MASSIVE_LENG = parseInt((_b = prompt(`введіть довжину ігрового поля(мінімум 2!)`)) !== null && _b !== void 0 ? _b : `2`);
            //Задання кількості кораблів
            const QUANTITY_OF_SHIPS = parseInt((_c = prompt(`введіть кількість кораблів`)) !== null && _c !== void 0 ? _c : `1`);
            //Отримання масиву зі встановленними одиницями(кораблями)
            const gamePlace = setShips(MASSIVE_LENG, QUANTITY_OF_SHIPS);
            function setShips(lenght, quantity) {
                //перевірка вказаних данних
                if (isFinite(lenght) && lenght > 1 && lenght < 100 && lenght >= quantity && quantity > 0 && isFinite(quantity) && quantity < 100) {
                    //Заповнюємо масив нулями
                    const arr = new Array(lenght).fill(0);
                    do {
                        //Встановлюємо одиницю на рандомну позицію
                        const setShip = 1 + Math.floor(Math.random() * lenght);
                        //Перевірка на те, чи ця клітинка порожня
                        if (arr[setShip] === 0) {
                            arr[setShip] = 1;
                            quantity--;
                        }
                        //Якщо ні,продовжуємо цикл
                        else
                            continue;
                    } while (quantity > 0);
                    return arr;
                }
                else {
                    alert(`Помилка!`);
                    throw new Error(`Невірно введені координати`);
                }
            }
            //Задання функції на саму гру
            function setGame(lenght, arr, quantity) {
                var _a;
                //Граємо до останнього вибитого корабля
                do {
                    //Обрана гравцем позиція
                    const USER_CHOOSE_A_TARGET = parseInt((_a = prompt(`Введіть число клітинки куди будете стріляти від 1 до ${lenght}`)) !== null && _a !== void 0 ? _a : `2`) - 1;
                    //Перевірка позиції
                    if (isFinite(USER_CHOOSE_A_TARGET) && USER_CHOOSE_A_TARGET <= lenght) {
                        //Перевірка на влучання
                        if (arr[USER_CHOOSE_A_TARGET] === 1) {
                            quantity--;
                            alert(`Супер,ви поцілили точно у ціль!`);
                        }
                        else {
                            alert(`Промах...`);
                        }
                    }
                    else {
                        alert(`Помилка,введіть потрібні координати.`);
                    }
                } while (quantity > 0);
                //Кінець гри
                alert(`Супер,знищенно усі кораблі!`);
            }
            //Виклик функції та задання до неї данних
            setGame(MASSIVE_LENG, gamePlace, QUANTITY_OF_SHIPS);
        }
        if (targetElement.closest(`#button3`)) {
            //Задання назв продуктів та їх цін
            const productTitles = [`Сир`, `Ковбаса`, `Молоко`, `Лимонад`, `Пиріжок`];
            const productPrices = [100, 250, 50, 30, 15];
            //Введення грошей покупця
            const userMoney = parseInt((_d = prompt(`Введіть кількіть грошей`)) !== null && _d !== void 0 ? _d : `100`);
            function giveUserProducts(titles, prices, money) {
                document.write(`Що можу вам запропонувати, за сумму ${userMoney} гривень? </br>`);
                //Змінна на те,якщо в покупця не вистачає грошей,то виводемо повідомлення
                let offerProduct = false;
                //Проходимось по ціні кожного продукту
                for (let i = 0; i < titles.length; i++) {
                    if (money >= prices[i]) {
                        //Виводми продукти на які витсачає грошей
                        document.write(`${titles[i]}: ${prices[i]} </br>`);
                        //Змінюємо змінну
                        offerProduct = true;
                    }
                }
                if (offerProduct === false)
                    document.write(`Нажаль, нічого`);
            }
            giveUserProducts(productTitles, productPrices, userMoney);
        }
        if (targetElement.closest(`#button4`)) {
            //Встановлюємо масив оплат за допомогою функції
            const PAYMENTS = setArr();
            function setArr() {
                var _a;
                const arr = [];
                let month = 1;
                //Цикл триває поки не буде введена сумма за 12 місяців
                do {
                    const USER_SET_PAYMENT = parseInt((_a = prompt(`Введіть сумму платіжки за місяць${month}`)) !== null && _a !== void 0 ? _a : `1`);
                    //Перевірка сумми 
                    if (USER_SET_PAYMENT > 0) {
                        //Вкладаємо суму до масиву
                        arr.push(USER_SET_PAYMENT);
                        //Збільшуємо місяць
                        month++;
                    }
                    else
                        alert('Уважно,невірно введена сума!');
                } while (month <= 12);
                return arr;
            }
            //Функція на вивід суми за рік
            function sumForWholeYear(arr) {
                let sum = 0;
                //проходимося по всьому масиву
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                //Результат на екран
                document.write(`сума за весь рік: ${sum}</br>`);
            }
            //Функція на вивід суми за рік
            function sumForFirstPartOfYear(arr) {
                let sum = 0;
                for (let i = 0; i < arr.length / 2; i++) {
                    sum += arr[i];
                }
                document.write(`сума за першу половину року: ${sum}</br>`);
            }
            //Функція на вивід суми за пів року
            function sumForSEcondPartOfYear(arr) {
                let sum = 0;
                for (let i = arr.length / 2; i < arr.length; i++) {
                    sum += arr[i];
                }
                document.write(`сума за другу половину року: ${sum}</br>`);
            }
            //Функція на вивід суми за літо
            function sumForSummer(arr) {
                let sum = 0;
                for (let i = 6; i < 9; i++) {
                    sum += arr[i];
                }
                document.write(`сума за літо ${sum}</br>`);
            }
            //Функція на вивід суми за перший квартал
            function sumForQuarter(arr) {
                let sum = 0;
                for (let i = 4; i < 7; i++) {
                    sum += arr[i];
                }
                document.write(`сума за другий квартал ${sum}</br>`);
            }
            //Функція на вивід суми за парні місяці
            function sumForEvenMonth(arr) {
                let sum = 0;
                for (let i = 0; i < arr.length; i += 2) {
                    sum += arr[i];
                }
                document.write(`сума за парні місяці ${sum}</br>`);
            }
            //Функція на вивід суми за місяці на початку сезону
            function sumForMonthStartOfSeason(arr) {
                let sum = 0;
                for (let i = 2; i < arr.length; i += 3) {
                    sum += arr[i];
                }
                document.write(`сума за місяці на початку сезону ${sum} </br>`);
            }
            sumForMonthStartOfSeason(PAYMENTS);
            sumForQuarter(PAYMENTS);
            sumForEvenMonth(PAYMENTS);
            sumForSummer(PAYMENTS);
            sumForSEcondPartOfYear(PAYMENTS);
            sumForFirstPartOfYear(PAYMENTS);
            sumForWholeYear(PAYMENTS);
        }
        if (targetElement.closest(`#button5`)) {
            //Введення кількості номерів
            const QUANTITY_OF_NUMBERS = parseInt((_e = prompt(`Введіть кількісь номерів`)) !== null && _e !== void 0 ? _e : `2`);
            //Заповнюємо масив номерами за допомогою функції
            const NUMBERS = setNumbers(QUANTITY_OF_NUMBERS);
            function setNumbers(quantity) {
                //перевірка кількості
                if (quantity > 0) {
                    //Обьява масиву
                    const arr = new Array(quantity);
                    //Заповнення масиву
                    for (let i = 0; i < quantity; i++) {
                        const NUM = prompt(`Введіть ваш номер`);
                        arr[i] = NUM;
                    }
                    return arr;
                }
                else
                    alert('Введіть кількість номерів!');
                throw new Error(`Помилка у данних!`);
            }
            //Функція на перевірку номера з буквою на початку А
            function startFromA(arr) {
                //Проходимося по всьому масиву
                for (let i = 0; i < arr.length; i++) {
                    //Присвоюємо константі значення масиву за номером
                    const numString = arr[i];
                    //Перевірка на першу букву
                    if (numString[0].toLowerCase() === `a`) {
                        //Вивід номера на першу букву А
                        document.write(`Починаются з А: ${arr[i]}</br>`);
                    }
                }
            }
            //Функція на перевірку номера з одинаковими символами на початку та на кінці
            function startEndAreSame(arr) {
                for (let i = 0; i < arr.length; i++) {
                    const numString = arr[i];
                    //порівняння першого символа та останього
                    if (numString[0].toLowerCase() === numString[numString.length - 1].toLowerCase()) {
                        document.write(`Перші і останні символи однакові: ${arr[i]}</br>`);
                    }
                }
            }
            //Функція на перевірку номера з довжиною символів більше 5
            function longNum(arr) {
                for (let i = 0; i < arr.length; i++) {
                    const numString = arr[i];
                    //перевірка номера
                    if (numString.length > 5) {
                        document.write(`Номер більше за 5 симолів: ${arr[i]}</br>`);
                    }
                }
            }
            longNum(NUMBERS);
            startEndAreSame(NUMBERS);
            startFromA(NUMBERS);
        }
    });
});
