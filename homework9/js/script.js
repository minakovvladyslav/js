"use strict";
window.addEventListener(`load`, () => {
    //Це ми робимо для того щоб була змого підключити 1 TS документ
    const firstExercise = document.querySelector(`.firstEx`);
    const secondExercise = document.querySelector(`.secondEx`);
    const thirdExercise = document.querySelector(`.thirdEx`);
    if (firstExercise) {
        //Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
        //Цей масив я заповнюю рандомними значеннями,якщо буде потрібно для перевірки,в низу є готовий маисв.    
        const firstExArr = fillTwoDimensionalArr(1, 100, 8, 8);
        //Виводимо масив для того щоб було можливо візуально його перевірити
        document.write(`<h1>Ми працюємо з цим масивом</h1>`);
        document.write(`<table border="1px solid black;">`);
        for (let i = 0; i < firstExArr.length; i++) {
            document.write(`<tr>`);
            for (let col = 0; col < firstExArr[i].length; col++) {
                document.write(`<td>`);
                document.write(`${firstExArr[i][col]}`);
                document.write(`</td>`);
            }
            document.write(`</tr>`);
        }
        document.write(`</table>`);
        document.write(`<hr>`);
        ///Готовий масив для перевірки
        // document.write(`
        //   [101,102,103,104,105,106,107,108],</br>
        //   [109,110,111,112,113,114,115,116],</br>
        //   [117,118,119,120,121,122,123,124],</br>
        //   [125,126,127,128,129,130,131,132],</br>
        //   [133,134,135,136,137,138,139,140],</br>
        //   [125,126,127,128,129,130,131,132],</br>
        //   [117,118,119,120,121,122,123,124],</br>
        //   [109,110,111,112,113,114,115,116],</br><hr>`)
        //Функція на створення рандомного числа
        function setRandomNum(minNum, maxNum) {
            return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
        }
        //Функція на створення одновимірного маисву
        function setRandomArr(minNum, maxNum, quantityOfCol) {
            return Array.from({ length: quantityOfCol }, () => setRandomNum(minNum, maxNum));
        }
        //Функція на створення двомірного маисву
        function fillTwoDimensionalArr(minNum, maxNum, quantityOfCol, quantityOfRow) {
            return Array.from({ length: quantityOfRow }, () => setRandomArr(minNum, maxNum, quantityOfCol));
        }
        // 1)номери рядків від 0 до половини, стовпці від 0 до половини
        //Функція на перерахунок сум у завданні 1-4
        function findSumOfExercise(fromRowNum, toRowNum, fromColNum, toColNum, arr) {
            let sum = 0;
            //Цикл на перерахування рядків(від - до)
            for (let row = fromRowNum; row <= toRowNum; row++) {
                //Цикл на перерахування колонок(від - до)
                for (let col = fromColNum; col <= toColNum; col++) {
                    //Додавання до сумми елементу масиву в заданному рядку та колонці
                    sum += arr[row][col];
                }
            }
            return sum;
        }
        //Відповіді на завднання 1-4
        const sumOfFirstExercise = findSumOfExercise(0, 3, 0, 3, firstExArr);
        const sumOfSecondExercise = findSumOfExercise(0, 3, 4, 7, firstExArr);
        const sumOfThirdExercise = findSumOfExercise(4, 7, 0, 3, firstExArr);
        const sumOfFourthExercise = findSumOfExercise(4, 7, 4, 7, firstExArr);
        //5) Суму парних рядків
        let emptySpotForExerciseFive = 0;
        //Цикл на лише парні рядки
        for (let row = 0; row < firstExArr.length; row += 2) {
            //Цикл на додавання всіх елементів у рядку
            for (let column of firstExArr[row]) {
                emptySpotForExerciseFive += column;
            }
        }
        ///
        const sumOfFifthExercise = emptySpotForExerciseFive;
        //6) Суму непарних стовпців
        let emptySpotForExerciseSix = 0;
        for (let row of firstExArr) {
            for (let col = 1; col < row.length; col += 2) {
                emptySpotForExerciseSix += row[col];
            }
        }
        const sumOfSixthExercise = emptySpotForExerciseSix;
        //7) У парних рядках – непарні стовпці, у непарних – парні.
        let firstPartOfExerciseSeven = 0;
        let secondPartOfExerciseSeven = 0;
        //парних рядках – непарні стовпці
        for (let row = 0; row < firstExArr.length; row += 2) {
            for (let col = 1; col < firstExArr[row].length; col += 2) {
                firstPartOfExerciseSeven += firstExArr[row][col];
            }
        }
        //у непарних – парні
        for (let row = 1; row < firstExArr.length; row += 2) {
            for (let col = 0; col < firstExArr[row].length; col += 2) {
                secondPartOfExerciseSeven += firstExArr[row][col];
            }
        }
        const firstAnswerOfExerciseSeven = firstPartOfExerciseSeven;
        const secondAnswerOfExerciseSeven = secondPartOfExerciseSeven;
        ///Виводимо результати обчислень
        document.write(`Сума першого завдання:${sumOfFirstExercise}<br>`);
        document.write(`Сума другого завдання:${sumOfSecondExercise}<br>`);
        document.write(`Сума третього завдання:${sumOfThirdExercise}<br>`);
        document.write(`Сума четвертого завдання:${sumOfFourthExercise}<br>`);
        document.write(`Сума п'ятого завдання:${sumOfFifthExercise}<br>`);
        document.write(`Сума шостого завдання:${sumOfSixthExercise}<br>`);
        document.write(`У парних рядках – непарні стовпці:${firstAnswerOfExerciseSeven}<br>`);
        document.write(`у непарних рядках – парні стовпці :${secondAnswerOfExerciseSeven}<br>`);
    }
    /////////////////////////Друге завдання//////////////////////////////////////
    //Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
    if (secondExercise) {
        //Цей масив я заповнюю рандомними значеннями,якщо буде потрібно для перевірки,в низу є готовий маисв.    
        const profitOfShops = fillTwoDimensionalArr(100, 1000, 7, 8);
        //Виводимо масив для того щоб було можливо візуально його перевірити
        document.write(`<h1>Ми працюємо з цим масивом</h1>`);
        document.write(`<h2>8 Магазинів та їх прибуток за тиждень`);
        document.write(`<table border="1px solid black;">`);
        for (let i = 0; i < profitOfShops.length; i++) {
            document.write(`<tr>`);
            for (let col = 0; col < profitOfShops[i].length; col++) {
                document.write(`<td>`);
                document.write(`${profitOfShops[i][col]}`);
                document.write(`</td>`);
            }
            document.write(`</tr>`);
        }
        document.write(`</table>`);
        document.write(`<hr>`);
        ///Готовий масив для перевірки
        // document.write(`
        //   [101,102,103,104,105,106,107,108],</br>
        //   [109,110,111,112,113,114,115,116],</br>
        //   [117,118,119,120,121,122,123,124],</br>
        //   [125,126,127,128,129,130,131,132],</br>
        //   [133,134,135,136,137,138,139,140],</br>
        //   [125,126,127,128,129,130,131,132],</br>
        //   [117,118,119,120,121,122,123,124],</br>
        //   [109,110,111,112,113,114,115,116],</br><hr>`)
        //Функція на створення рандомного числа
        function setRandomNum(minNum, maxNum) {
            return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
        }
        //Функція на створення одновимірного маисву
        function setRandomArr(minNum, maxNum, quantityOfCol) {
            return Array.from({ length: quantityOfCol }, () => setRandomNum(minNum, maxNum));
        }
        //Функція на створення двомірного маисву
        function fillTwoDimensionalArr(minNum, maxNum, quantityOfCol, quantityOfRow) {
            return Array.from({ length: quantityOfRow }, () => setRandomArr(minNum, maxNum, quantityOfCol));
        }
        ///1) загальний прибуток кожного масиву за тиждень;
        let sumOfFirstExercise = 0;
        for (let week of profitOfShops) {
            for (let day of week) {
                sumOfFirstExercise += day;
            }
        }
        const profitOfAllShops = sumOfFirstExercise;
        ///2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
        const sumOfDays = [];
        for (let day = 0; day < 7; day++) {
            let sum = 0;
            for (let shop = 0; shop < profitOfShops.length; shop++) {
                sum += profitOfShops[shop][day];
            }
            sumOfDays.push(sum);
        }
        ///3) загальний прибуток за робочі дні
        let sumForWorkDay = 0;
        for (let store of profitOfShops) {
            for (let i = 0; i < 5; i++) {
                sumForWorkDay += store[i];
            }
        }
        // 4) загальний прибуток за вихідні дні
        let sumForRestDay = 0;
        for (let store of profitOfShops) {
            for (let i = 5; i < 7; i++) {
                sumForRestDay += store[i];
            }
        }
        ////5) максимальний прибуток за середу
        let theBiggestSumOfWeednasday = 0;
        for (let store of profitOfShops) {
            if (theBiggestSumOfWeednasday < store[2]) {
                theBiggestSumOfWeednasday = store[2];
            }
        }
        ///6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
        const allSumsBeggerThan200 = [];
        for (let store of profitOfShops) {
            for (let sum of store) {
                if (sum > 200) {
                    allSumsBeggerThan200.push(sum);
                }
            }
        }
        ////7) відсортувати кожен тиждень за зростанням
        //Задаємо нову константу для вже відсортованого маисву
        const copyForSeventhExerise = [];
        ///Робимо глибоке копіювання,щоб запобігти мутіції масиву оригінального маисву через сортування елеменів в середені внутрішніх масивів
        for (let i = 0; i < profitOfShops.length; i++) {
            const mainArr = [];
            for (let j = 0; j < profitOfShops[i].length; j++) {
                const arr = profitOfShops[i][j];
                mainArr.push(arr);
            }
            copyForSeventhExerise.push(mainArr);
        }
        const sortedArr = sortArr(copyForSeventhExerise);
        //Функція для сортування
        function sortArr(arr) {
            //Задаємо маств який будемо повертати
            const globalArr = [];
            for (let i = 0; i < arr.length; i++) {
                //Задаємо одновимірний масив
                let oneArr = [];
                //В цей одновимірний масив сортуємо одновимірний маисв нашого масиву
                oneArr = arr[i].sort((a, b) => b - a);
                //Пушемо це до маисву який повертаємо
                globalArr.push(oneArr);
            }
            return globalArr;
        }
        ////8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
        ///В цьому випадку вистачить зовнішнього копіювання
        const copyForEightExercise = [...profitOfShops];
        //Результат виконання функції
        const sortedArrByHaggerNum = setsortedArrByHaggerNum(copyForEightExercise);
        //Функція на сортування за максимальним елементом
        function setsortedArrByHaggerNum(arr) {
            return arr.sort((a, b) => {
                //присвоюємо змінним елементи за індексом 0,тому що можуть бути і від'ємні числа
                let firstNum = a[0];
                let secondNum = b[0];
                //Пошук найбільшого в внутрішніх масивах
                for (let i = 1; i < a.length; i++) {
                    if (firstNum < a[i])
                        firstNum = a[i];
                }
                for (let i = 1; i < b.length; i++) {
                    if (secondNum < b[i])
                        secondNum = b[i];
                }
                //Повертаємо результат віднімання найбільших чисел у масивах
                return secondNum - firstNum;
            });
        }
        //////9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
        const copyForNinethExercise = [...profitOfShops];
        const sortedBySumArr = copyForNinethExercise.sort((a, b) => {
            //присвоюємо змінним елементи за індексом 0,тому що можуть бути і від'ємні числа
            let firstSumOfWeek = a[0];
            let secondSumOfWeek = b[0];
            //Знаходження суми в кожному внутрішньому масиві
            for (let sum = 1; sum < a.length; sum++) {
                firstSumOfWeek += a[sum];
            }
            for (let sum = 1; sum < b.length; sum++) {
                secondSumOfWeek += b[sum];
            }
            //Повертаємо результат віднімання сум у масивів
            return secondSumOfWeek - firstSumOfWeek;
        });
        ///Вивід результатів
        //////Відповідь на запитання -1
        document.write(`Сума доходів усіх магазинів за тиждень = ${profitOfAllShops}<br><hr>`);
        //////Відповідь на запитання -2
        for (let i = 0; i < sumOfDays.length; i++) {
            let day = i + 1;
            let dayOf = ``;
            switch (day) {
                case 1:
                    dayOf = `понеділок`;
                    break;
                case 2:
                    dayOf = `вівторок`;
                    break;
                case 3:
                    dayOf = `середа`;
                    break;
                case 5:
                    dayOf = `четверг`;
                    break;
                case 5:
                    dayOf = `п'ятниця`;
                    break;
                case 6:
                    dayOf = `субота`;
                    break;
                case 7:
                    dayOf = `неділя`;
                    break;
            }
            document.write(`Сума доходів усіх магазинів за ${dayOf} = ${sumOfDays[i]}</br>`);
        }
        document.write(`<hr>`);
        //////Відповідь на запитання -3
        document.write(`Загальний прибуток за робочі дні становить : ${sumForWorkDay}`);
        document.write(`<hr>`);
        //////Відповідь на запитання -4
        document.write(`Загальний прибуток за вихідні дні становить : ${sumForRestDay}`);
        document.write(`<hr>`);
        //////Відповідь на запитання -5
        document.write(`Найбільша сума за середу : ${theBiggestSumOfWeednasday}`);
        document.write(`<hr>`);
        //////Відповідь на запитання -6
        document.write(`Масив з сумами більше за 200: [${allSumsBeggerThan200}]`);
        document.write(`<hr>`);
        //////Відповідь на запитання -7
        document.write(`Відсортований масив:(відсортувати кожен тиждень за зростанням)`);
        document.write(`<table border="1px solid black;">`);
        for (let i = 0; i < sortedArr.length; i++) {
            document.write(`<tr>`);
            for (let col = 0; col < sortedArr[i].length; col++) {
                document.write(`<td>`);
                document.write(`${sortedArr[i][col]}`);
                document.write(`</td>`);
            }
            document.write(`</tr>`);
        }
        document.write(`</table>`);
        document.write(`<hr>`);
        //////Відповідь на запитання -8
        document.write(`Відсортований масив:(відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), <br>Я не ставив максимальні числа на перше місце у рядку)`);
        document.write(`<table border="1px solid black;">`);
        for (let i = 0; i < sortedArrByHaggerNum.length; i++) {
            document.write(`<tr>`);
            for (let col = 0; col < sortedArrByHaggerNum[i].length; col++) {
                document.write(`<td>`);
                document.write(`${sortedArrByHaggerNum[i][col]}`);
                document.write(`</td>`);
            }
            document.write(`</tr>`);
        }
        document.write(`</table>`);
        document.write(`<hr>`);
        //////Відповідь на запитання -9
        document.write(`упорядкувати тижні (рядки) за спаданням суми елементів у рядку `);
        document.write(`<table border="1px solid black;">`);
        for (let i = 0; i < sortedBySumArr.length; i++) {
            document.write(`<tr>`);
            for (let col = 0; col < sortedBySumArr[i].length; col++) {
                document.write(`<td>`);
                document.write(`${sortedBySumArr[i][col]}`);
                document.write(`</td>`);
            }
            document.write(`</tr>`);
        }
        document.write(`</table>`);
        document.write(`<hr>`);
    }
    ////////////////////Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди./////
    if (thirdExercise) {
        //Встановлюємо ширину ігрового поля
        const battleRow = new Array(6).fill(0);
        //Встановлюємо довжину ігрового поля
        const battleField = Array.from({ length: 6 }, () => battleRow);
        //Задаємо кількіть кораблів
        const quantityOfShips = 5;
        //Глибоке копіювання основного масиву тому що,будемо дадавати кораблі(мутувати оригінальний масив)-ця дія може бути зайвою
        const copyOfBattleField = [];
        for (let i = 0; i < battleField.length; i++) {
            let arr = [];
            for (let j = 0; j < battleField[i].length; j++) {
                arr.push(battleField[i][j]);
            }
            copyOfBattleField.push(arr);
        }
        //Функція на встановлення кораблів
        function setRandomShip(arr, numShips) {
            //Кількість кораблів
            let ships = numShips;
            do {
                //Встановлюємо їх рандомним чином
                const randomRow = Math.floor(Math.random() * (arr.length));
                const randomCol = Math.floor(Math.random() * (arr.length));
                //Перевірка на те,щоб 2 кораблі не стали на 1 місце
                if (arr[randomRow][randomCol] !== 1) {
                    arr[randomRow][randomCol] = 1;
                    //Віднімаємо 1 від кількості кораблів,бо 1 уже на своєму місці
                    ships--;
                }
                else {
                    continue;
                }
            } while (ships !== 0);
            //Повертаємо готовий масив
            return arr;
        }
        const readyToGameFiled = setRandomShip(copyOfBattleField, quantityOfShips);
        function setTheGame(arr, shipsNum) {
            var _a, _b, _c;
            //Привітання
            alert(`Йохохо Капітане!Сьогодні ви повінні підбити всі кораблі на полі 6 на 6,бажаю перемоги! `);
            //Встановлюємо що буде у гравця після гри
            let userWin = false;
            //Кількіть набоїв які гравець бере з собою
            let userSetShots = 0;
            //Кількість кораблів
            let ships = shipsNum;
            //Цикл буде жо тих пір поки гравець не введе нормальне число
            do {
                //Кількіть набоїв
                userSetShots = parseInt((_a = prompt(`Скільки набоїв із собою беремо?`)) !== null && _a !== void 0 ? _a : `0`);
                //перевірка що ввів гравець
                if (userSetShots < 0 || !isFinite(userSetShots) || userSetShots === 0 || userSetShots < 5)
                    alert(`Введіть число від 5!`);
            } while (userSetShots < 0 || !isFinite(userSetShots) || userSetShots === 0 && userSetShots < 5);
            //цикл гри
            do {
                let userSetARow = parseInt((_b = prompt(`По якому рядку стріляємо?`)) !== null && _b !== void 0 ? _b : `0`);
                let userSetACol = parseInt((_c = prompt(`По якій колонці стріляємо?`)) !== null && _c !== void 0 ? _c : `0`);
                //Перевірка того,що ввів гравець
                if (userSetARow > 0 && userSetACol > 0 && userSetARow < 7 && userSetACol < 7) {
                    //Коригуємо данні для роботи з маисвом
                    userSetARow = userSetARow - 1;
                    userSetACol = userSetACol - 1;
                    //Перевірка на те чи попав гравець
                    if (arr[userSetARow][userSetACol] === 1) {
                        arr[userSetARow][userSetACol] = 0;
                        alert(`Супер,просто в ціль!`);
                        userSetShots -= 1;
                        ships -= 1;
                    }
                    else {
                        alert(`Нажаль промах!`);
                        userSetShots -= 1;
                    }
                }
                else {
                    alert(`Введіть число від 1 до 6!`);
                }
            } while (userSetShots > 0);
            //Вивід результату
            if (userWin === false) {
                document.write(`Нажаль ви програли,вам лишилось вибити ${ships} кораблів.`);
            }
            else {
                document.write(`Вітаю,ви перемогли!`);
            }
        }
        setTheGame(readyToGameFiled, quantityOfShips);
    }
});
