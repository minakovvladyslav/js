"use strict";
window.addEventListener(`load`, () => {
    document.addEventListener(`click`, (e) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const targetElement = e.target;
        if (targetElement.closest(`#button1`)) {
            //Питаємо користувача яка кількість елементів
            const USER_SET_NUM = parseInt((_a = prompt(`Введіть число довжини масиву`)) !== null && _a !== void 0 ? _a : `0`);
            //Функція на вивелення масиву
            function setArr(num, numFill) {
                //Перевірка числа яке ввів користувач
                if (num > 0) {
                    //створюємо масив та заповнюємо його нулями
                    const newArr = new Array(num).fill(numFill);
                    //повертаємо масив
                    return newArr;
                }
                else {
                    //що з'явится у випадку коли користувач введе некоректне число
                    alert(`Введіть число від 0!`);
                    throw new Error(`Помилка користувача у першому завданні!`);
                }
            }
            //викликаємо функцію в пустому мавиві
            const NEW_ARR = setArr(USER_SET_NUM, 0);
            document.write(`${NEW_ARR}`);
        }
        if (targetElement.closest(`#button2`)) {
            //Питаємо користувача яка кількість елементів
            const USER_SET_NUM = parseInt((_b = prompt(`Введіть число довжини масиву`)) !== null && _b !== void 0 ? _b : `0`);
            //Функція на заповнення масиву
            function setArr(num, fillNumFirst, fillNumSecond) {
                //Перевірка числа яке ввів користувач
                if (USER_SET_NUM > 0) {
                    //створення пустого масиву
                    let arr = new Array(num);
                    //цикл на заповнення першої половини
                    for (let i = 0; i < arr.length / 2; i++) {
                        arr[i] = fillNumFirst;
                    }
                    //цикл на заповнення другої половини
                    for (let i = Math.round(arr.length / 2); i < arr.length; i++) {
                        arr[i] = fillNumSecond;
                    }
                    //повернення масиву  
                    return arr;
                }
                else {
                    alert(`Введіть число більше за 0!`);
                    throw new Error(`Помилка у завданні 2!`);
                }
            }
            document.write(`${setArr(USER_SET_NUM, 1, 7)}`);
        }
        if (targetElement.closest(`#button3`)) {
            //Питаємо користувача яка довжина масиву
            const USER_SET_NUM = parseInt((_c = prompt(`Введіть число довжини масиву`)) !== null && _c !== void 0 ? _c : `0`);
            //Функція на заповнення масиву
            const setArr = ((num, limit, fillNumFirst, fillNumSecond) => {
                //перевірка числа - яке задає довжину масиву
                if (num <= 0 || isNaN(num)) {
                    alert(`Введіть число більше за 0!`);
                    throw new Error(`Помилка у завданні 3!`);
                }
                else {
                    //спершу створюємо масив та заповнюємо його одиницями
                    const arr = new Array(num).fill(fillNumFirst);
                    //перевірка чи масив довший за 5
                    if (num > limit) {
                        //Якщо масив довший, то заповнюємо інші дільниці маисву 7-ми
                        for (let i = limit; i < num; i++) {
                            arr[i] = fillNumSecond;
                        }
                    }
                    return arr;
                }
            });
            //Викликаємо функцію до константи
            const RESULT = setArr(USER_SET_NUM, 5, 1, 7);
            document.write(`${RESULT}`);
        }
        if (targetElement.closest(`#button4`)) {
            //Питаємо користувача яка довжина масиву
            const USER_SET_LENGTH = parseInt((_d = prompt(`Введіть число довжини масиву`)) !== null && _d !== void 0 ? _d : `0`);
            //Викликаємо функцію для заповнення масиву у пустий масив
            const USER_ARROW = setArrow(USER_SET_LENGTH);
            function setArrow(num) {
                var _a;
                // Свторення пустого масиву
                const arr = [];
                //Перевірка змінної(num)
                if (num > 0) {
                    //Використовуємо змінну і - для зручного введення номерів
                    let i = 1;
                    do {
                        //Користувач вводить число
                        const USER_SET_A_NUM = parseInt((_a = prompt(`Введіть число ${i}`)) !== null && _a !== void 0 ? _a : `0`);
                        //Перевірка числа яке ввів користувач,якщо воно додатне - додаємо його до масиву
                        if (USER_SET_A_NUM > 0) {
                            arr.push(USER_SET_A_NUM);
                            i++;
                            //Якщо користувач ввів не число або число менше за 1 - просимо дотримуватися правил
                        }
                        else {
                            alert(`Введіть число більше за 0!`);
                        }
                        //допоки довжина пустого масиву менша num 
                    } while (arr.length < num);
                }
                else {
                    //Повідомлення, якщо користувач ввів не число до змінної num
                    alert(`Введіть чилсло більше 0!`);
                    throw new Error(`Неправильна довжина масиву!`);
                }
                return arr;
            }
            //Цикл для показу чисел більше за 100
            for (let num of USER_ARROW) {
                if (num > 100)
                    document.write(`${num} </br>`);
            }
        }
        if (targetElement.closest(`#button5`)) {
            //Питаємо користувача яка довжина масиву
            const USER_SET_LENGTH = parseInt((_e = prompt(`Введіть число довжини масиву`)) !== null && _e !== void 0 ? _e : `0`);
            //Викликаємо функцію для заповнення масиву у пустий масив
            const USER_ARROW = setArrow(USER_SET_LENGTH);
            function setArrow(num) {
                var _a;
                // Свторення пустого масиву
                const arr = [];
                //Перевірка змінної(num)
                if (num > 0) {
                    //Використовуємо змінну і - для зручного введення номерів
                    let i = 1;
                    do {
                        const USER_SET_A_NUM = parseInt((_a = prompt(`Введіть число ${i}`)) !== null && _a !== void 0 ? _a : `0`);
                        //Перевірка чи дійсно користувач вводіть число
                        if (!isNaN(USER_SET_A_NUM)) {
                            arr.push(USER_SET_A_NUM);
                            i++;
                        }
                        else {
                            alert(`Введіть число!`);
                        }
                        //допоки довжина пустого масиву менша num 
                    } while (arr.length < num);
                }
                //Повідомлення, якщо користувач ввів не число до змінної num
                else {
                    alert(`Введіть чиcло більше 0!`);
                    throw new Error(`Неправильна довжина масиву!`);
                }
                return arr;
            }
            //Фунція яка виводить суму додатніх чисел масиву
            function sumNum(arr) {
                let sum = 1;
                for (let num of USER_ARROW) {
                    if (num > 0) {
                        sum = sum * num;
                    }
                }
                document.write(`сума чисел більше 0 = ${sum}`);
            }
            //Виклик фунції
            sumNum(USER_ARROW);
        }
        if (targetElement.closest(`#button6`)) {
            //Питаємо користувача яка довжина масиву
            const USER_SET_LENGTH = parseInt((_f = prompt(`Введіть число довжини масиву`)) !== null && _f !== void 0 ? _f : `0`);
            //Викликаємо функцію для заповнення масиву у пустий масив
            const USER_ARROW = setArrow(USER_SET_LENGTH);
            //Функція на заповнення масиву
            function setArrow(num) {
                var _a;
                const arr = [];
                if (num > 0) {
                    //Використовуємо змінну і - для зручного введення номерів
                    let i = 1;
                    do {
                        const USER_SET_A_NUM = parseInt((_a = prompt(`Введіть число ${i}`)) !== null && _a !== void 0 ? _a : `0`);
                        if (!isNaN(USER_SET_A_NUM)) {
                            arr.push(USER_SET_A_NUM);
                            i++;
                        }
                        else {
                            alert(`Введіть число!`);
                        }
                    } while (arr.length < num);
                }
                else {
                    alert(`Введіть чиcло більше 0!`);
                    throw new Error(`Неправильна довжина масиву!`);
                }
                return arr;
            }
            //Функція на перевірку якщо елемент масиву більший за перший то помножуємо на 2
            function multiplicationForArr(arr, multiplicationNum) {
                const NEW_ARR = arr.map((num, index, arr) => num > arr[0] ? arr[index] * multiplicationNum : num);
                //Змінюємо масив за допомогою MAP- та повертаємо його
                return NEW_ARR;
            }
            //Виклик фунції до константи
            const NEW_ARRAY = multiplicationForArr(USER_ARROW, 2);
            document.write(`${NEW_ARRAY}`);
        }
        if (targetElement.closest(`#button7`)) {
            //Питаємо користувача яка довжина масиву
            const USER_SET_LENGTH = parseInt((_g = prompt(`Введіть число довжини масиву`)) !== null && _g !== void 0 ? _g : `0`);
            //Викликаємо функцію для заповнення масиву у пустий масив
            const USER_ARROW = setArrow(USER_SET_LENGTH);
            function setArrow(num) {
                var _a;
                const arr = [];
                if (num > 0) {
                    //Використовуємо змінну і - для зручного введення номерів
                    let i = 1;
                    do {
                        const USER_SET_A_NUM = parseInt((_a = prompt(`Введіть число ${i}`)) !== null && _a !== void 0 ? _a : `0`);
                        if (USER_SET_A_NUM > 0) {
                            arr.push(USER_SET_A_NUM);
                            i++;
                        }
                        else {
                            alert(`Введіть число більше за 0!`);
                        }
                    } while (arr.length < num);
                }
                else {
                    alert(`Введіть чилсло більше 0!`);
                    throw new Error(`Неправильна довжина масиву!`);
                }
                return arr;
            }
            //Функція на зміну цін які більше за 1000
            function setNewPrices(arr, saleNum) {
                //Якщо число більше за 1000 - віднімаємо 30% від суми 
                const NEW_ARR = arr.map((price, index, arr) => price > 1000 ? arr[index] - (price * saleNum) : price);
                //Повертаємо масив
                return NEW_ARR;
            }
            //Виклик функції до масиву
            const NEW_ARRAY = setNewPrices(USER_ARROW, 0.3);
            document.write(`${NEW_ARRAY}`);
        }
        if (targetElement.closest(`#button8`)) {
            //Питаємо користувача яка довжина масиву
            const USER_SET_LENGTH = parseInt((_h = prompt(`Введіть число довжини масиву`)) !== null && _h !== void 0 ? _h : `0`);
            //Викликаємо функцію для заповнення масиву у пустий масив
            const USER_ARROW = setArrow(USER_SET_LENGTH);
            function setArrow(num) {
                var _a;
                const arr = [];
                //Перевірка змінної на число
                if (num > 0) {
                    //Використовуємо змінну і - для зручного введення номерів
                    let i = 1;
                    do {
                        //Вводимо номери
                        const USER_SET_A_NUM = (_a = prompt(`Введіть номер Авта номер ${i}(Використовувати англійські літери!)`)) !== null && _a !== void 0 ? _a : `0`;
                        arr.push(USER_SET_A_NUM);
                        i = i + 1;
                    } while (i <= num);
                }
                else {
                    alert(`Введіть чилсло більше 0!`);
                    throw new Error(`Неправильна довжина масиву!`);
                }
                return arr;
            }
            //Функція на перевірку першого символа номера
            function collectNumbers(arr, symbol) {
                //створення порожнього масиву
                const NUMBERS_START_WITH_SYMBOL = [];
                //Цикл,якщо першой символ дорівнює А - то додаємо його до маисву
                for (let number of arr) {
                    const NUMBER_FIRST_SYMBOL = number[0];
                    if (NUMBER_FIRST_SYMBOL.toLowerCase() === symbol) {
                        NUMBERS_START_WITH_SYMBOL.push(number);
                    }
                }
                return NUMBERS_START_WITH_SYMBOL;
            }
            //Виклик функції до пустого масиву
            const NEW_ARRAY = collectNumbers(USER_ARROW, `a`);
            document.write(`Номера які починаются з символа А : ${NEW_ARRAY}`);
        }
        if (targetElement.closest(`#button9`)) {
            //Питаємо користувача яка довжина масиву
            const USER_SET_LENGTH = parseInt((_j = prompt(`Введіть число довжини масиву`)) !== null && _j !== void 0 ? _j : `0`);
            //Викликаємо функцію для заповнення масиву у пустий масив
            const USER_ARROW = setArrow(USER_SET_LENGTH);
            function setArrow(num) {
                var _a;
                const arr = [];
                //Перевірка змінної на число
                if (num > 0) {
                    //Використовуємо змінну і - для зручного введення номерів
                    let i = 1;
                    do {
                        const USER_SET_A_NUM = (_a = prompt(`Введіть ім'я номер ${i}`)) !== null && _a !== void 0 ? _a : `Name`;
                        if (USER_SET_A_NUM !== `Name`) {
                            arr.push(USER_SET_A_NUM);
                            i = i + 1;
                        }
                        else
                            alert(`Введіть і'мя!`);
                    } while (i <= num);
                }
                else {
                    alert(`Введіть чилсло більше 0!`);
                    throw new Error(`Неправильна довжина масиву!`);
                }
                return arr;
            }
            //Функція на створення маисву з перших літер імен
            function setArrWithFirstSymbol(arr) {
                //Створюємо пустий масив
                const NEW_ARR = [];
                //Додаємо перші літери імен до масиву
                arr.forEach(name => {
                    NEW_ARR.push(name[0]);
                });
                //Повертаємо масив
                return NEW_ARR;
            }
            //Викликаємо функцію до пустого масиву
            const FIRST_SYMBOL_OF_NAME = setArrWithFirstSymbol(USER_ARROW);
            document.write(`${FIRST_SYMBOL_OF_NAME}`);
        }
        if (targetElement.closest(`#button10`)) {
            //Питаємо користувача яка довжина масиву
            const USER_SET_LENGTH = parseInt((_k = prompt(`Введіть число довжини масиву`)) !== null && _k !== void 0 ? _k : `0`);
            //Викликаємо функцію для заповнення масиву у пустий масив
            const USER_ARROW = setArrow(USER_SET_LENGTH);
            //Фунцкія на заповнення масиву
            function setArrow(num) {
                var _a;
                const arr = [];
                if (num > 0) {
                    let i = 1;
                    do {
                        const USER_SET_A_NUM = parseInt((_a = prompt(`Введіть число номер ${i}`)) !== null && _a !== void 0 ? _a : `0`);
                        if (USER_SET_A_NUM > 0) {
                            arr.push(USER_SET_A_NUM);
                            i++;
                        }
                        else {
                            alert(`Введіть число більше за 0!`);
                        }
                    } while (arr.length < num);
                }
                else {
                    alert(`Введіть чилсло більше 0!`);
                    throw new Error(`Неправильна довжина масиву!`);
                }
                return arr;
            }
            //Функція на вирахуванння податку
            function setNewPrices(arr, saleNum) {
                const PRICE_ARR = [];
                for (let price of arr) {
                    //Множемо кожне число на відсоток податку і додаємо його до порожнього масиву
                    const taxes = price * saleNum;
                    PRICE_ARR.push(taxes);
                }
                //повертаємо масив
                return PRICE_ARR;
            }
            //Викликаємо функцію до пустого масиву
            const newPrices = setNewPrices(USER_ARROW, 0.2);
            document.write(`${newPrices}`);
        }
    });
});
