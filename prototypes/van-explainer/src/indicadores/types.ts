export type YearRow = {
  year: number;
  /** Flujo de caja, ej: "3.000.000" */
  fc: string;
  /** Valor del factor elevado, ej: "1,44" */
  factorValue: string;
  /** Valor presente resultante, ej: "2.291.667" */
  vp: string;
};

export type AcumRow = {
  year: number;
  vp: string;
  acumulado: string;
  cubre: boolean;
};

export type ExerciseData = {
  id: string;
  /** Número del ejercicio, ej: 2 */
  numero: number;
  inversion: string;
  tasaPct: string; // "20"
  tasaDecimal: string; // "0,2"
  factor: string; // "1,2"
  van: {
    rows: YearRow[];
    suma: string;
    van: string;
  };
  tir?: {
    pruebaPct: string; // "30"
    pruebaDecimal: string; // "0,3"
    pruebaFactor: string; // "1,3"
    rows: YearRow[];
    suma: string;
    resultado: string;
  };
  pri?: {
    acum: AcumRow[];
    a: string;
    b: string;
    fcn: string;
    faltante: string;
    ratio: string; // "0,56"
    pb: string; // "2,56"
    pbTexto: string; // "2 años y ~7 meses"
  };
  roi?: {
    beneficio: string;
    inversion: string;
    ratio: string; // "0,485"
    pct: string; // "48,5"
  };
};
