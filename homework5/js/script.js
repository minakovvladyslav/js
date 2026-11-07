"use strict";
window.addEventListener(`load`, () => {
    document.addEventListener(`click`, (e) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const targetElement = e.target;
        if (targetElement.closest(`#button1`)) {
            const NUM_FIRST = parseFloat((_a = prompt(`Введіть перше число:`)) !== null && _a !== void 0 ? _a : `0`);
            const NUM_SECOND = parseFloat((_b = prompt(`Введіть друге число:`)) !== null && _b !== void 0 ? _b : `0`);
            const NUM_THIRD = parseFloat((_c = prompt(`Введіть третє число:`)) !== null && _c !== void 0 ? _c : `0`);
            const NUM_FOURTH = parseFloat((_d = prompt(`Введіть четверте число:`)) !== null && _d !== void 0 ? _d : `0`);
            function toSum(num1, num2, num3, num4) {
                return num1 + num2 + num3 + num4;
            }
            function toMultiplication(num1, num2, num3, num4) {
                return num1 * num2 * num3 * num4;
            }
            function toArithmeticMean(num1, num2, num3, num4) {
                return (num1 + num2 + num3 + num4) / 4;
            }
            function findTheMinNum(num1, num2, num3, num4) {
                const firstNum = num1 < num2 ? num1 : num2;
                const secondNum = num3 < num4 ? num3 : num4;
                return firstNum < secondNum ? firstNum : secondNum;
            }
            document.querySelector(`#span1`).textContent = `Сума:${toSum(NUM_FIRST, NUM_SECOND, NUM_THIRD, NUM_FOURTH)}`;
            document.querySelector(`#span2`).textContent = `Добуток:${toMultiplication(NUM_FIRST, NUM_SECOND, NUM_THIRD, NUM_FOURTH)}`;
            document.querySelector(`#span3`).textContent = `Середнє арифметичне:${toArithmeticMean(NUM_FIRST, NUM_SECOND, NUM_THIRD, NUM_FOURTH)}`;
            document.querySelector(`#span4`).textContent = `Мінімальне значення:${findTheMinNum(NUM_FIRST, NUM_SECOND, NUM_THIRD, NUM_FOURTH)}`;
        }
        if (targetElement.closest(`#button2`)) {
            const imageElement = (_e = prompt(`Введіть посилання на ваше фото:`)) !== null && _e !== void 0 ? _e : ``;
            const titleElement = (_f = prompt(`Введіть заголовок:`)) !== null && _f !== void 0 ? _f : `Заголовок`;
            const linkElement = (_g = prompt(`Введіть посилання на ваш сайт:`)) !== null && _g !== void 0 ? _g : ``;
            function setABanner(imgWay, title, linkWay) {
                document.write(`<a href="${linkElement}" style="color:Green;text-decoration:none;overflow: hidden;top: 0;width: 100%;height: 300px;display: block;position:relative;"><img src="${imageElement}" style="z-index:1;position:absolute;width:100%;height:100%;top:0;left:0;object-fit:cover;"><h2 style="text-transform:uppercase;margin-top:200px;text-align:center;position:relative;z-index:5;">${titleElement}</h2></a>`);
            }
            setABanner(imageElement, titleElement, linkElement);
        }
        if (targetElement.closest(`#button3`)) {
            const quantityOfColumns = parseFloat((_h = prompt(`Введіть кількість стовпчиків`)) !== null && _h !== void 0 ? _h : `1`);
            const quantityOfRows = parseFloat((_j = prompt(`Введіть кількість рядків`)) !== null && _j !== void 0 ? _j : `1`);
            const messageInTable = (_k = prompt(`Введіть ваше повідомлення для таблиці`)) !== null && _k !== void 0 ? _k : `Ваше повідомлення`;
            function setATable(numRows, numColumns, message) {
                document.write(`<table border="2px solid black">`);
                for (let numR = 0; numR < numRows; numR++) {
                    document.write(`<tr>`);
                    for (let numC = 0; numC < numColumns; numC++) {
                        document.write(`<td>`);
                        document.write(`${message}`);
                        document.write(`</td>`);
                    }
                    document.write(`<tr>`);
                }
                document.write(`</table>`);
            }
            setATable(quantityOfRows, quantityOfColumns, messageInTable);
        }
        if (targetElement.closest(`#button4`)) {
            const centimetersEl = parseFloat((_l = prompt(`Скільки сантиметрів перевести у дюми?`)) !== null && _l !== void 0 ? _l : `0`);
            const kilogramsEl = parseFloat((_m = prompt(`Скільки кілограмм перевести у фунти?`)) !== null && _m !== void 0 ? _m : `0`);
            const kilometersEl = parseFloat((_o = prompt(`Скільки кіллометрів перевести у милі?`)) !== null && _o !== void 0 ? _o : `0`);
            function toInch(quantity) {
                return quantity / 2.54;
            }
            function toPound(quantity) {
                return quantity * 2.2046;
            }
            function toMiles(quantity) {
                return quantity * 0.621371;
            }
            document.querySelector(`#span5`).textContent = `Сантиметри у дюйми: ${(toInch(centimetersEl))}`;
            document.querySelector(`#span6`).textContent = `Кілограми у фунти: ${toPound(kilogramsEl)}`;
            document.querySelector(`#span7`).textContent = `Кілометри у милі: ${toMiles(kilometersEl)}`;
        }
        if (targetElement.closest(`#button5`)) {
            const FIRST_NUM = parseInt((_p = prompt(`Ввеідть перше число`)) !== null && _p !== void 0 ? _p : `0`);
            const SECOND_NUM = parseInt((_q = prompt(`Ввеідть друге число`)) !== null && _q !== void 0 ? _q : `0`);
            const THIRD_NUM = parseInt((_r = prompt(`Ввеідть третє число`)) !== null && _r !== void 0 ? _r : `0`);
            function toCheckNum(num1, num2, num3) {
                let normalNum = 0;
                let evenNum = 0;
                let biggerThenOneHundred = 0;
                if (num1 > 0)
                    normalNum++;
                if (num2 > 0)
                    normalNum++;
                if (num3 > 0)
                    normalNum++;
                if (num1 % 2 === 0)
                    evenNum++;
                if (num2 % 2 === 0)
                    evenNum++;
                if (num3 % 2 === 0)
                    evenNum++;
                if (num1 > 100)
                    biggerThenOneHundred++;
                if (num2 > 100)
                    biggerThenOneHundred++;
                if (num3 > 100)
                    biggerThenOneHundred++;
                return `Кількість парних чисел: ${evenNum}, Кількість чисел більше 0 - ${normalNum}, Кількість чисел більше 100 - ${biggerThenOneHundred}`;
            }
            document.querySelector(`#span8`).textContent = `${toCheckNum(FIRST_NUM, SECOND_NUM, THIRD_NUM)}`;
        }
    });
});
