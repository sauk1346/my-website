import { ExerciseData } from '../indicadores/types';

// Ejercicio 1 (clase16): solo VAN, precedido por los conceptos de interés
// nominal y valor futuro (escenas "nominal" y "valorfuturo").
export const ej1: ExerciseData = {
  id: 'ej1',
  numero: 1,
  inversion: '60.000.000',
  tasaPct: '10',
  tasaDecimal: '0,1',
  factor: '1,1',
  van: {
    rows: [
      { year: 1, fc: '18.000.000', factorValue: '1,1', vp: '16.363.636' },
      { year: 2, fc: '20.000.000', factorValue: '1,21', vp: '16.528.926' },
      { year: 3, fc: '22.000.000', factorValue: '1,331', vp: '16.528.926' },
      { year: 4, fc: '25.000.000', factorValue: '1,4641', vp: '17.075.336' },
    ],
    suma: '66.496.824',
    van: '6.496.824',
  },
};
