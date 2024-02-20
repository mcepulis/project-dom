const titleDOM = document.getElementById('title');
console.log(titleDOM.innerText);
console.log(titleDOM.textContent);

titleDOM.innerText = 'Kaip gaminami blynai?';
titleDOM.textContent = 'Kaip gaminami blynai???';

const ingridientsDOM = document
    .getElementsByTagName('ul')[0]
    .getElementsByTagName('li');

// const ingridients = [];

// for (let i = 0; i < ingridientsDOM.length; i++) {
//     const ingridientDOM = ingridientsDOM[i];
//     ingridients.push(ingridientDOM.innerText);
// }

// for (const ingridientDOM of ingridientsDOM) {
//     ingridients.push(ingridientDOM.innerText);
// }

const ingridients = [...ingridientsDOM].map(
    ingridientDOM => ingridientDOM.innerText
);

console.log(ingridients);

// [...ingridientsDOM].forEach(
//     ingridientDOM => ingridientDOM.innerText += ' (???)'
// );

for (const ingridientDOM of ingridientsDOM) {
    ingridientDOM.innerText += ' (???)';
}


const test = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
console.log(test);

const test2 = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
console.log(test2);

// test2.innerText = 'Hello worldsss!';
// console.log(test2.innerText + ',' + test3.innerText);
// test3.style.color = 'red';



const antrasListas = [];
for(let i = 0; i < test.length; i++) {
    antrasListas.push(test[i].innerText);
    antrasListas.push(test2[i].innerText);


}
console.log(antrasListas);

// const treciasListas = [...test, ...test2];
// console.log(treciasListas);