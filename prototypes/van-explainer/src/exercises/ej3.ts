import { ExerciseData } from '../indicadores/types';

export const ej3: ExerciseData = {
  id: 'ej3',
  numero: 3,
  inversion: '9.000.000',
  tasaPct: '23',
  tasaDecimal: '0,23',
  factor: '1,23',
  van: {
    rows: [
      { year: 1, fc: '4.200.000', factorValue: '1,23', vp: '3.414.634' },
      { year: 2, fc: '4.600.000', factorValue: '1,5129', vp: '3.040.518' },
      { year: 3, fc: '5.100.000', factorValue: '1,8609', vp: '2.740.658' },
      { year: 4, fc: '5.500.000', factorValue: '2,2889', vp: '2.402.936' },
      { year: 5, fc: '5.700.000', factorValue: '2,8153', vp: '2.024.647' },
    ],
    suma: '13.623.393',
    van: '4.623.393',
  },
  tir: {
    pruebaPct: '43',
    pruebaDecimal: '0,43',
    pruebaFactor: '1,43',
    rows: [
      { year: 1, fc: '4.200.000', factorValue: '1,43', vp: '2.937.063' },
      { year: 2, fc: '4.600.000', factorValue: '2,0449', vp: '2.249.499' },
      { year: 3, fc: '5.100.000', factorValue: '2,9242', vp: '1.744.063' },
      { year: 4, fc: '5.500.000', factorValue: '4,1816', vp: '1.315.281' },
      { year: 5, fc: '5.700.000', factorValue: '5,9797', vp: '953.223' },
    ],
    suma: '9.199.129',
    resultado: '199.129',
  },
  pri: {
    acum: [
      { year: 1, vp: '3.414.634', acumulado: '3.414.634', cubre: false },
      { year: 2, vp: '3.040.518', acumulado: '6.455.152', cubre: false },
      { year: 3, vp: '2.740.658', acumulado: '9.195.810', cubre: true },
    ],
    a: '2',
    b: '6.455.152',
    fcn: '2.740.658',
    faltante: '2.544.848',
    ratio: '0,93',
    pb: '2,93',
    pbTexto: '≈ 2 años y 11 meses',
  },
  roi: {
    beneficio: '4.623.393',
    inversion: '9.000.000',
    ratio: '0,5137',
    pct: '51,37',
  },
};
