import { sum } from './suma/suma.js';
import { sumaKartDaugyba, dalyba } from './daugybaDalyba/daugybaDalyba.js';

const sumaIrSumaKartDaugyba = sum + sumaKartDaugyba;

const sumDalyba = dalyba(sumaIrSumaKartDaugyba, 2);
console.log(sumaIrSumaKartDaugyba);
console.log(sumDalyba);

