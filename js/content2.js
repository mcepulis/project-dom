const data = [
[
    {
        title: 'Ingredientai',
        list: ['Miltai', '', 'Druska', 'Vanduo', 'Kiaušiniai'],
    },
    {
        title: 'Įranga/įrankiai',
        list: ['Mikseris', '        ', 'Keptuvė', ' ', 'Šaukštas', 'Lėkštė'],
    },
],
[
    {
        title: '555555Ingredientai',
        list: ['999999Miltai', '', 'Druska', 'Vanduo', 'Kiaušiniai'],
    },
    {
        title: '5555555Įranga/įrankiai',
        list: ['999999Mikseris', '        ', 'Keptuvė', ' ', 'Šaukštas', 'Lėkštė'],
    },
]
            ];




const contentDOM = document.getElementById('content');
console.log(contentDOM);

let HTML = '';

for (const row of data) {
    let rowData = '';

        for (const column of row) {
            let listHTML = '';

                for (const item of column.list) {
                    if (item.trim().length === 0) {
                        continue;  
                    }
                    listHTML += `<li>${item}</li>`
                }
            
            rowData += `<div class="column">
            <div class="title">
                <h1>${column.title}</h1>
            </div>
            <div class="list">
                <ul>
                    ${listHTML}
                </ul>
            </div>
            </div>`;

        }

    HTML += `<div class="row">
    ${rowData}
    </div>`;
}

contentDOM.innerHTML = HTML;
