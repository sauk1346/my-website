import { ExerciseData } from '../indicadores/types';

export const ej2: ExerciseData = {
  id: 'ej2',
  numero: 2,
  inversion: '6.000.000',
  tasaPct: '20',
  tasaDecimal: '0,2',
  factor: '1,2',
  van: {
    rows: [
      { year: 1, fc: '3.000.000', factorValue: '1,2', vp: '2.500.000' },
      { year: 2, fc: '3.300.000', factorValue: '1,44', vp: '2.291.667' },
      { year: 3, fc: '3.700.000', factorValue: '1,728', vp: '2.141.204' },
      { year: 4, fc: '4.100.000', factorValue: '2,0736', vp: '1.977.238' },
    ],
    suma: '8.910.109',
    van: '2.910.109',
  },
  tir: {
    pruebaPct: '30',
    pruebaDecimal: '0,3',
    pruebaFactor: '1,3',
    rows: [
      { year: 1, fc: '3.000.000', factorValue: '1,3', vp: '2.307.692' },
      { year: 2, fc: '3.300.000', factorValue: '1,69', vp: '1.952.663' },
      { year: 3, fc: '3.700.000', factorValue: '2,197', vp: '1.684.115' },
      { year: 4, fc: '4.100.000', factorValue: '2,8561', vp: '1.435.524' },
    ],
    suma: '7.379.994',
    resultado: '1.379.994',
  },
  pri: {
    acum: [
      { year: 1, vp: '2.500.000', acumulado: '2.500.000', cubre: false },
      { year: 2, vp: '2.291.667', acumulado: '4.791.667', cubre: false },
      { year: 3, vp: '2.141.204', acumulado: '6.932.871', cubre: true },
    ],
    a: '2',
    b: '4.791.667',
    fcn: '2.141.204',
    faltante: '1.208.333',
    ratio: '0,56',
    pb: '2,56',
    pbTexto: '2 años y ≈ 7 meses',
  },
  roi: {
    beneficio: '2.910.109',
    inversion: '6.000.000',
    ratio: '0,485',
    pct: '48,5',
  },
};
