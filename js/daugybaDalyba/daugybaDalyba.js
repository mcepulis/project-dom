import { sum } from '../suma/suma.js';
function daugyba (a, b) {
    return a * b;
}

const sumaKartDaugyba = daugyba(sum, 2);
console.log(sumaKartDaugyba);
console.log(sum);

export { sumaKartDaugyba };

function dalyba (a, b) {
    
    return a / b;
}

export { dalyba };