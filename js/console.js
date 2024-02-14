import { sum } from './suma/suma.js';
import { daugyba, dalyba } from './daugybaDalyba/daugybaDalyba.js';

const sumaIsSumaIrDaugyba = sum(1, 2, 3) + daugyba(10, 10);
const sumDalyba = dalyba(sumaIsSumaIrDaugyba, 2);

console.log(sumDalyba);

