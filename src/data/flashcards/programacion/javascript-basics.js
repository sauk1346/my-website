// Mazo completo de flashcards para JavaScript Básico
export const javascriptBasics = {
  id: 'javascript-basics',
  category: 'programacion',
  subcategory: 'JavaScript',
  name: 'JavaScript - Conceptos Básicos Completo',
  description: 'Cobertura completa de fundamentos de JavaScript',
  cards: [
    // VARIABLES Y TIPOS DE DATOS (15 preguntas)
    {
      id: 'js-01',
      front: '¿Cuál es la diferencia entre let y const?',
      back: [
        "let: permite reasignar valores",
        "const: no permite reasignación. Debe inicializarse al declararla"
      ],
      notes: 'const no hace el objeto inmutable, solo la referencia'
    },
    {
      id: 'js-02',
      front: '¿Cuál es la diferencia entre var y let?',
      back: [
        "var: tiene scope de función y hoisting",
        "let: tiene scope de bloque. No se puede usar antes de declararse (temporal dead zone)" 
      ],
      notes: 'var es legacy, evitar su uso'
    },
    {
      id: 'js-03',
      front: '¿Qué tipos de datos primitivos existen en JavaScript?',
      back: [
        "Boolean, String",
        "Number, BigInt",
        "Undefined, Null, Symbol",
      ],
      notes: '7 tipos primitivos en total'
    },
    {
      id: 'js-04',
      front: '¿Cuál es la diferencia entre null y undefined?',
      back: [
        "null: es un valor asignado. Intencionalmente representa 'sin valor'",
        "undefined: Es una variable declarada pero sin valor asignado",
      ],
      notes: 'typeof null retorna "object" (bug histórico de JS)'
    },
    {
      id: 'js-05',
      front: '¿Qué es el hoisting en JavaScript?',
      back: [
        "Comportamiento de JS de mover declaraciones al inicio del scope actual durante la compilación",
        "var y function son hoisted"
      ],
      notes: 'let y const tienen hoisting pero con temporal dead zone'
    },
    {
      id: 'js-06',
      front: '¿Qué es coerción de tipos (type coercion)?',
      back: [
        "La conversión automática de un tipo de dato a otro",
        "Puede ser implícita (automática) o explícita (manual)"
      ],
      notes: 'Ejemplo: "5" + 3 = "53" (coerción implícita a string)'
    },
    {
      id: 'js-07',
      front: '¿Para qué sirve el operador typeof?',
      back: 'Devuelve un string que indica el tipo de dato de un operando.',
      notes: 'typeof null retorna "object" (comportamiento anómalo)'
    },
    {
      id: 'js-08',
      front: '¿Qué es NaN en JavaScript?',
      back: '"Not a Number". Es un valor especial que resulta de operaciones matemáticas inválidas.',
      notes: 'NaN === NaN retorna false. Usar isNaN() o Number.isNaN()'
    },
    {
      id: 'js-09',
      front: '¿Qué diferencia hay entre tipos primitivos y objetos?',
      back: [
        "Primitivos: inmutables y se pasan por valor",
        "Objetos: mutables y se pasan por referencia"
      ],
      notes: 'Primitivos: string, number, boolean, null, undefined, symbol, bigint'
    },
    {
      id: 'js-10',
      front: '¿Qué es el "temporal dead zone"?',
      back: 'Período entre el inicio del bloque y la declaración de una variable let o const. La variable existe pero no puede ser accedida.',
      notes: 'Intentar acceder genera ReferenceError'
    },
  ]
};

/*
    {
      id: 'js-11',
      front: '¿Qué es un BigInt y cuándo usarlo?',
      back: 'Un tipo primitivo para representar números enteros más grandes que 2^53 - 1. Se crea agregando "n" al final del número o usando BigInt().',
      notes: 'Ejemplo: 123456789012345678901234567890n'
    },
    {
      id: 'js-12',
      front: '¿Qué es un Symbol en JavaScript?',
      back: 'Un tipo primitivo único e inmutable usado principalmente como identificadores únicos de propiedades de objetos.',
      notes: 'Cada Symbol() crea un valor único, incluso con misma descripción'
    },
    {
      id: 'js-13',
      front: '¿Qué retorna typeof array y typeof null?',
      back: 'typeof array retorna "object" y typeof null también retorna "object". Para verificar arrays usar Array.isArray().',
      notes: 'El comportamiento de null es un bug histórico de JavaScript'
    },
    {
      id: 'js-14',
      front: '¿Qué son los valores truthy y falsy?',
      back: 'Valores que se evalúan como true o false en contextos booleanos. Falsy: false, 0, "", null, undefined, NaN. Todo lo demás es truthy.',
      notes: 'Útil en condicionales: if (value) { ... }'
    },

    // OPERADORES (12 preguntas)
    {
      id: 'js-15',
      front: '¿Cuál es la diferencia entre == y ===?',
      back: '== compara valores con coerción de tipos. === compara valores y tipos sin coerción (igualdad estricta).',
      notes: 'Siempre preferir === para evitar comportamientos inesperados'
    },
    {
      id: 'js-16',
      front: '¿Qué es el operador ternario y cómo se usa?',
      back: 'Un operador condicional compacto. Sintaxis: condición ? valorSiTrue : valorSiFalse',
      notes: 'Ejemplo: edad >= 18 ? "adulto" : "menor"'
    },
    {
      id: 'js-17',
      front: '¿Qué operadores lógicos existen en JavaScript?',
      back: '&& (AND), || (OR), ! (NOT). También existe ?? (nullish coalescing) en ES2020.',
      notes: '&& y || retornan valores, no solo booleanos'
    },
    {
      id: 'js-18',
      front: '¿Qué hace el operador spread (...)?',
      back: 'Expande un iterable (array, objeto) en elementos individuales. Útil para copiar, concatenar o pasar argumentos.',
      notes: 'Ejemplo: [...arr1, ...arr2] o {...obj1, ...obj2}'
    },
    {
      id: 'js-19',
      front: '¿Qué es el operador rest (...)?',
      back: 'Agrupa múltiples elementos en un array. Se usa en parámetros de funciones o destructuring.',
      notes: 'Ejemplo: function sum(...nums) { } o [a, ...resto] = array'
    },
    {
      id: 'js-20',
      front: '¿Qué hace el operador ?? (nullish coalescing)?',
      back: 'Retorna el operando derecho cuando el izquierdo es null o undefined. A diferencia de ||, no considera 0, false o "" como falsy.',
      notes: 'Ejemplo: valor ?? "default" - útil para valores predeterminados'
    },
    {
      id: 'js-21',
      front: '¿Qué hace el operador ?. (optional chaining)?',
      back: 'Permite acceder a propiedades anidadas sin error si una propiedad intermedia es null o undefined.',
      notes: 'Ejemplo: user?.address?.street retorna undefined si falta alguna propiedad'
    },
    {
      id: 'js-22',
      front: '¿Cuáles son los operadores de incremento y decremento?',
      back: '++ (incremento) y -- (decremento). Pueden ser prefijos (++x) o postfijos (x++), con diferente comportamiento.',
      notes: 'Prefijo: incrementa y retorna nuevo valor. Postfijo: retorna valor original'
    },
    {
      id: 'js-23',
      front: '¿Qué hace el operador de asignación compuesta +=?',
      back: 'Combina una operación con asignación. x += 5 es equivalente a x = x + 5.',
      notes: 'También existen -=, *=, /=, %=, **=, etc.'
    },
    {
      id: 'js-24',
      front: '¿Qué hace el operador de exponenciación **?',
      back: 'Eleva un número a una potencia. base ** exponente. Introducido en ES2016.',
      notes: 'Ejemplo: 2 ** 3 = 8. Equivalente a Math.pow(2, 3)'
    },
    {
      id: 'js-25',
      front: '¿Qué es el operador typeof y qué retorna?',
      back: 'Retorna un string indicando el tipo de dato. Posibles valores: "string", "number", "boolean", "object", "function", "undefined", "symbol", "bigint".',
      notes: 'typeof null retorna "object" (bug histórico)'
    },
    {
      id: 'js-26',
      front: '¿Qué hace el operador instanceof?',
      back: 'Verifica si un objeto es una instancia de una clase o constructor específico. Retorna boolean.',
      notes: 'Ejemplo: [] instanceof Array retorna true'
    },

    // FUNCIONES (20 preguntas)
    {
      id: 'js-27',
      front: '¿Cuál es la diferencia entre función declarada y función expresada?',
      back: 'Función declarada: function nombre() {}. Función expresada: const nombre = function() {}. Las declaradas tienen hoisting completo.',
      notes: 'Declaradas pueden ser llamadas antes de su definición'
    },
    {
      id: 'js-28',
      front: '¿Qué son las arrow functions y cómo se diferencian?',
      back: 'Sintaxis compacta: () => {}. Diferencias: no tienen su propio this, arguments, super, ni pueden ser constructores.',
      notes: 'Heredan el this del contexto donde fueron definidas'
    },
    {
      id: 'js-29',
      front: '¿Qué es el scope (ámbito) en JavaScript?',
      back: 'El contexto en el que las variables son accesibles. Tipos: global, de función, de bloque (let/const).',
      notes: 'Scope chain: búsqueda de variables de interno a externo'
    },
    {
      id: 'js-30',
      front: '¿Qué es un closure (clausura)?',
      back: 'Una función que tiene acceso a variables de su scope externo, incluso después de que la función externa haya terminado.',
      notes: 'Útil para encapsulación y privacidad de datos'
    },
    {
      id: 'js-31',
      front: '¿Qué es una función IIFE?',
      back: 'Immediately Invoked Function Expression: una función que se ejecuta inmediatamente al definirse. Sintaxis: (function() {})().',
      notes: 'Usada para crear scope privado y evitar contaminar scope global'
    },
    {
      id: 'js-32',
      front: '¿Qué son los parámetros por defecto en funciones?',
      back: 'Valores predeterminados que se asignan a parámetros si no se proporciona un argumento. Sintaxis: function(param = valor).',
      notes: 'Introducido en ES6. Ejemplo: function greet(name = "invitado")'
    },
    {
      id: 'js-33',
      front: '¿Qué es el objeto arguments en funciones?',
      back: 'Un objeto array-like disponible dentro de funciones (no arrow) que contiene todos los argumentos pasados a la función.',
      notes: 'No es un array real, pero se puede convertir con Array.from()'
    },
    {
      id: 'js-34',
      front: '¿Qué es una función callback?',
      back: 'Una función pasada como argumento a otra función, que será ejecutada posteriormente (usualmente después de algún evento o operación).',
      notes: 'Fundamental en programación asíncrona y event handlers'
    },
    {
      id: 'js-35',
      front: '¿Qué es una función de orden superior (higher-order)?',
      back: 'Una función que recibe otra función como argumento o retorna una función como resultado.',
      notes: 'Ejemplos: map, filter, reduce son funciones de orden superior'
    },
    {
      id: 'js-36',
      front: '¿Qué es recursión en funciones?',
      back: 'Cuando una función se llama a sí misma. Necesita una condición base para evitar bucle infinito.',
      notes: 'Útil para estructuras anidadas o problemas dividibles (factorial, fibonacci)'
    },
    {
      id: 'js-37',
      front: '¿Qué hace la palabra clave return en una función?',
      back: 'Termina la ejecución de la función y retorna un valor. Si no hay return, la función retorna undefined.',
      notes: 'return sin valor también retorna undefined'
    },
    {
      id: 'js-38',
      front: '¿Qué es el this en JavaScript?',
      back: 'Una referencia al contexto de ejecución actual. Su valor depende de cómo se llama la función.',
      notes: 'Arrow functions no tienen su propio this, heredan del contexto padre'
    },
    {
      id: 'js-39',
      front: '¿Qué hacen los métodos call, apply y bind?',
      back: 'Permiten establecer explícitamente el valor de this. call/apply invocan la función inmediatamente, bind retorna nueva función.',
      notes: 'call: func.call(thisArg, arg1, arg2). apply: func.apply(thisArg, [args])'
    },
    {
      id: 'js-40',
      front: '¿Qué es una función anónima?',
      back: 'Una función sin nombre. Se usan comúnmente como callbacks o en asignaciones a variables.',
      notes: 'Ejemplo: setTimeout(function() { }, 1000) o array.map(function(x) { })'
    },
    {
      id: 'js-41',
      front: '¿Qué es currying en funciones?',
      back: 'Técnica de transformar una función con múltiples argumentos en una secuencia de funciones con un argumento cada una.',
      notes: 'Ejemplo: sum(a)(b) en lugar de sum(a, b)'
    },
    {
      id: 'js-42',
      front: '¿Qué es una función pura?',
      back: 'Una función que siempre retorna el mismo resultado para los mismos argumentos y no tiene efectos secundarios.',
      notes: 'No modifica variables externas ni depende de estado mutable'
    },
    {
      id: 'js-43',
      front: '¿Cuándo usar function() vs arrow function (=>)?',
      back: 'Usar function cuando necesites this dinámico, arguments o usar como constructor. Usar arrow para callbacks y cuando quieras heredar this.',
      notes: 'Arrow functions son más concisas para funciones simples'
    },
    {
      id: 'js-44',
      front: '¿Qué es un método en JavaScript?',
      back: 'Una función que es propiedad de un objeto. Se invoca con la sintaxis objeto.metodo().',
      notes: 'Dentro del método, this se refiere al objeto (excepto en arrow functions)'
    },
    {
      id: 'js-45',
      front: '¿Qué es function hoisting?',
      back: 'Las declaraciones de función son movidas al inicio de su scope, permitiendo llamarlas antes de su declaración en el código.',
      notes: 'Solo aplica a function declarations, no a function expressions'
    },
    {
      id: 'js-46',
      front: '¿Qué retorna una función sin return?',
      back: 'undefined. Todas las funciones retornan algo, si no hay return explícito, retornan undefined.',
      notes: 'También retorna undefined un return sin valor: return;'
    },

    // ARRAYS (18 preguntas)
    {
      id: 'js-47',
      front: '¿Cómo se crea un array en JavaScript?',
      back: 'Con literales [] o con el constructor Array(). Ejemplo: let arr = [1, 2, 3] o let arr = new Array(1, 2, 3).',
      notes: 'Preferir literales [] por claridad y simplicidad'
    },
    {
      id: 'js-48',
      front: '¿Qué hace el método push() en arrays?',
      back: 'Agrega uno o más elementos al final del array y retorna la nueva longitud del array.',
      notes: 'Modifica el array original (método mutador)'
    },
    {
      id: 'js-49',
      front: '¿Qué hace el método pop() en arrays?',
      back: 'Elimina el último elemento del array y lo retorna. Si el array está vacío, retorna undefined.',
      notes: 'Modifica el array original (método mutador)'
    },
    {
      id: 'js-50',
      front: '¿Qué hace el método shift() en arrays?',
      back: 'Elimina el primer elemento del array y lo retorna. Reindexiza todos los elementos.',
      notes: 'Más lento que pop() porque debe reindexar todo el array'
    },
    {
      id: 'js-51',
      front: '¿Qué hace el método unshift() en arrays?',
      back: 'Agrega uno o más elementos al inicio del array y retorna la nueva longitud.',
      notes: 'Más lento que push() porque debe reindexar todo el array'
    },
    {
      id: 'js-52',
      front: '¿Cuál es la diferencia entre slice() y splice()?',
      back: 'slice() crea una copia superficial sin modificar el original. splice() modifica el array original añadiendo/eliminando elementos.',
      notes: 'slice(inicio, fin). splice(inicio, cantidad, ...elementos)'
    },
    {
      id: 'js-53',
      front: '¿Qué hace el método map() en arrays?',
      back: 'Crea un nuevo array aplicando una función a cada elemento del array original. No modifica el array original.',
      notes: 'Siempre retorna array de igual longitud que el original'
    },
    {
      id: 'js-54',
      front: '¿Qué hace el método filter() en arrays?',
      back: 'Crea un nuevo array con todos los elementos que pasan la prueba de la función callback (retornan true).',
      notes: 'El array resultante puede tener menor longitud que el original'
    },
    {
      id: 'js-55',
      front: '¿Cuál es la diferencia entre forEach() y map()?',
      back: 'forEach() ejecuta una función para cada elemento pero no retorna nada (undefined). map() retorna un nuevo array con los resultados.',
      notes: 'Usar map cuando necesites transformar el array, forEach solo para efectos secundarios'
    },
    {
      id: 'js-56',
      front: '¿Qué hace el método reduce() en arrays?',
      back: 'Reduce el array a un único valor ejecutando una función reductora sobre cada elemento. Acumula un resultado.',
      notes: 'Sintaxis: array.reduce((acumulador, valor) => {}, valorInicial)'
    },
    {
      id: 'js-57',
      front: '¿Qué hace el método find() en arrays?',
      back: 'Retorna el primer elemento que cumple la condición de la función callback. Si no encuentra, retorna undefined.',
      notes: 'Detiene la búsqueda al encontrar el primer match'
    },
    {
      id: 'js-58',
      front: '¿Qué hace el método findIndex() en arrays?',
      back: 'Retorna el índice del primer elemento que cumple la condición. Si no encuentra, retorna -1.',
      notes: 'Similar a find() pero retorna índice en lugar del elemento'
    },
    {
      id: 'js-59',
      front: '¿Qué hace el método some() en arrays?',
      back: 'Retorna true si al menos un elemento cumple la condición. Retorna false si ninguno cumple.',
      notes: 'Detiene la ejecución al encontrar el primer true'
    },
    {
      id: 'js-60',
      front: '¿Qué hace el método every() en arrays?',
      back: 'Retorna true si todos los elementos cumplen la condición. Retorna false si al menos uno no cumple.',
      notes: 'Detiene la ejecución al encontrar el primer false'
    },
    {
      id: 'js-61',
      front: '¿Qué hace el método sort() en arrays?',
      back: 'Ordena los elementos del array. Por defecto ordena como strings. Modifica el array original.',
      notes: 'Para números usar: arr.sort((a, b) => a - b)'
    },
    {
      id: 'js-62',
      front: '¿Qué hace el método join() en arrays?',
      back: 'Une todos los elementos del array en un string, separados por el separador especificado (o coma por defecto).',
      notes: 'Ejemplo: [1, 2, 3].join("-") retorna "1-2-3"'
    },
    {
      id: 'js-63',
      front: '¿Qué hace el método includes() en arrays?',
      back: 'Retorna true si el array contiene el elemento especificado, false en caso contrario.',
      notes: 'Usa igualdad estricta (===) para comparar'
    },
    {
      id: 'js-64',
      front: '¿Qué hace el método concat() en arrays?',
      back: 'Combina dos o más arrays y retorna un nuevo array. No modifica los arrays originales.',
      notes: 'También acepta valores individuales: [1, 2].concat(3, [4, 5])'
    },

    // OBJETOS (15 preguntas)
    {
      id: 'js-65',
      front: '¿Qué es un objeto en JavaScript?',
      back: 'Una colección de pares clave-valor (propiedades). Puede contener cualquier tipo de dato, incluyendo funciones (métodos).',
      notes: 'Sintaxis: { propiedad: valor, metodo: function() {} }'
    },
    {
      id: 'js-66',
      front: '¿Cómo se accede a las propiedades de un objeto?',
      back: 'Con notación de punto (objeto.propiedad) o notación de corchetes (objeto["propiedad"]).',
      notes: 'Corchetes permiten nombres dinámicos o con espacios/caracteres especiales'
    },
    {
      id: 'js-67',
      front: '¿Qué es destructuring de objetos?',
      back: 'Sintaxis que permite extraer propiedades de un objeto en variables individuales. Ejemplo: const {nombre, edad} = persona.',
      notes: 'Puede usar valores por defecto: const {nombre = "Anónimo"} = persona'
    },
    {
      id: 'js-68',
      front: '¿Qué hace Object.keys()?',
      back: 'Retorna un array con todas las claves (nombres de propiedades) enumerables del objeto.',
      notes: 'Útil para iterar sobre propiedades: Object.keys(obj).forEach(...)'
    },
    {
      id: 'js-69',
      front: '¿Qué hace Object.values()?',
      back: 'Retorna un array con todos los valores de las propiedades enumerables del objeto.',
      notes: 'Introducido en ES2017'
    },
    {
      id: 'js-70',
      front: '¿Qué hace Object.entries()?',
      back: 'Retorna un array de arrays [clave, valor] de todas las propiedades enumerables del objeto.',
      notes: 'Útil para convertir objeto a Map o para iterar con for...of'
    },
    {
      id: 'js-71',
      front: '¿Qué hace Object.assign()?',
      back: 'Copia las propiedades enumerables de uno o más objetos fuente a un objeto destino. Retorna el objeto destino.',
      notes: 'Usado para clonar o fusionar objetos: Object.assign({}, obj1, obj2)'
    },
    {
      id: 'js-72',
      front: '¿Cómo se verifica si una propiedad existe en un objeto?',
      back: 'Con el operador in ("propiedad" in objeto) o el método hasOwnProperty(objeto.hasOwnProperty("propiedad")).',
      notes: 'in incluye propiedades heredadas, hasOwnProperty solo propias'
    },
    {
      id: 'js-73',
      front: '¿Cómo se elimina una propiedad de un objeto?',
      back: 'Con el operador delete: delete objeto.propiedad. Retorna true si se eliminó exitosamente.',
      notes: 'No puede eliminar propiedades no configurables o variables'
    },
    {
      id: 'js-74',
      front: '¿Qué es la notación abreviada de propiedades (shorthand)?',
      back: 'Si el nombre de la variable coincide con la clave, se puede omitir el valor: {nombre} en lugar de {nombre: nombre}.',
      notes: 'También funciona con métodos: {metodo() {}} en lugar de {metodo: function() {}}'
    },
    {
      id: 'js-75',
      front: '¿Qué es un método computed property name?',
      back: 'Permite usar expresiones como nombres de propiedades usando corchetes: {[expresion]: valor}.',
      notes: 'Ejemplo: {["prop" + 1]: "valor"} crea {prop1: "valor"}'
    },
    {
      id: 'js-76',
      front: '¿Qué hace Object.freeze()?',
      back: 'Congela un objeto: no se pueden agregar, eliminar o modificar propiedades. El objeto se vuelve inmutable.',
      notes: 'Solo congela el primer nivel (shallow freeze)'
    },
    {
      id: 'js-77',
      front: '¿Qué hace Object.seal()?',
      back: 'Sella un objeto: no se pueden agregar o eliminar propiedades, pero se pueden modificar las existentes.',
      notes: 'Menos restrictivo que freeze()'
    },
    {
      id: 'js-78',
      front: '¿Qué es el prototype de un objeto?',
      back: 'Un objeto del cual otros objetos heredan propiedades. Todos los objetos tienen un prototype (excepto Object.prototype).',
      notes: 'Accesible via __proto__ o Object.getPrototypeOf()'
    },
    {
      id: 'js-79',
      front: '¿Cómo se crea una copia superficial de un objeto?',
      back: 'Con spread operator ({...objeto}), Object.assign({}, objeto) o Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)).',
      notes: 'Copia superficial: objetos anidados siguen siendo referencias'
    },

    // CONTROL DE FLUJO (12 preguntas)
    {
      id: 'js-80',
      front: '¿Cuáles son las estructuras condicionales en JavaScript?',
      back: 'if, else if, else, switch, y el operador ternario (? :).',
      notes: 'También se pueden usar operadores lógicos && y || para condicionales'
    },
    {
      id: 'js-81',
      front: '¿Qué hace la sentencia switch?',
      back: 'Evalúa una expresión y ejecuta el código del caso que coincida. Requiere break para no caer al siguiente caso.',
      notes: 'Usa comparación estricta (===). default es opcional'
    },
    {
      id: 'js-82',
      front: '¿Cuáles son los tipos de bucles en JavaScript?',
      back: 'for, while, do...while, for...in, for...of, forEach (método de array).',
      notes: 'Cada uno tiene casos de uso específicos'
    },
    {
      id: 'js-83',
      front: '¿Cuál es la diferencia entre for...in y for...of?',
      back: 'for...in itera sobre las claves/índices enumerables. for...of itera sobre los valores de iterables (arrays, strings, etc).',
      notes: 'for...in para objetos, for...of para arrays/iterables'
    },
    {
      id: 'js-84',
      front: '¿Cuál es la diferencia entre while y do...while?',
      back: 'while verifica la condición antes de ejecutar. do...while ejecuta al menos una vez y luego verifica la condición.',
      notes: 'do...while garantiza al menos una ejecución'
    },
    {
      id: 'js-85',
      front: '¿Qué hace la sentencia break?',
      back: 'Termina inmediatamente el bucle o switch más cercano y continúa con el código siguiente.',
      notes: 'También puede usar labels para break en bucles anidados'
    },
    {
      id: 'js-86',
      front: '¿Qué hace la sentencia continue?',
      back: 'Salta el resto de la iteración actual del bucle y continúa con la siguiente iteración.',
      notes: 'Solo funciona en bucles, no en switch'
    },
    {
      id: 'js-87',
      front: '¿Cuándo usar for vs forEach?',
      back: 'for es más flexible (permite break/continue, control de índice). forEach es más declarativo pero no se puede interrumpir.',
      notes: 'forEach no puede usar break, continue o return para salir del bucle'
    },
    {
      id: 'js-88',
      front: '¿Qué es un label en JavaScript?',
      back: 'Un identificador seguido de : que marca una sentencia. Se usa con break/continue para controlar bucles anidados.',
      notes: 'Ejemplo: outer: for(...) { inner: for(...) { break outer; } }'
    },
    {
      id: 'js-89',
      front: '¿Cuándo usar switch vs if/else?',
      back: 'switch es mejor para múltiples casos con valores discretos. if/else es mejor para condiciones complejas o rangos.',
      notes: 'switch es más legible con muchos casos de igualdad'
    },
    {
      id: 'js-90',
      front: '¿Qué pasa si olvidas break en un switch?',
      back: 'Ocurre "fall-through": el código continúa ejecutándose en los siguientes casos hasta encontrar un break o el final.',
      notes: 'A veces es intencional para agrupar casos con el mismo código'
    },
    {
      id: 'js-91',
      front: '¿Qué es un bucle infinito y cómo evitarlo?',
      back: 'Un bucle que nunca termina porque su condición siempre es true. Evitarlo asegurando que la condición eventualmente sea false.',
      notes: 'Puede bloquear el navegador. Ejemplo: while(true) {} sin break'
    },

    // STRINGS (10 preguntas)
    {
      id: 'js-92',
      front: '¿Qué son los template literals en JavaScript?',
      back: 'Strings delimitados por backticks (`) que permiten interpolación de variables con ${} y strings multilínea.',
      notes: 'Ejemplo: `Hola ${nombre}` o `línea1\nlínea2`'
    },
    {
      id: 'js-93',
      front: '¿Qué hace el método split() en strings?',
      back: 'Divide un string en un array de substrings usando un separador especificado.',
      notes: 'Ejemplo: "a,b,c".split(",") retorna ["a", "b", "c"]'
    },
    {
      id: 'js-94',
      front: '¿Qué hace el método substring() o slice()?',
      back: 'Extrae una porción del string. substring(inicio, fin) y slice(inicio, fin). slice permite índices negativos.',
      notes: 'slice es más flexible con índices negativos (cuenta desde el final)'
    },
    {
      id: 'js-95',
      front: '¿Qué hace el método toLowerCase() y toUpperCase()?',
      back: 'Convierten todo el string a minúsculas o mayúsculas respectivamente. Retornan un nuevo string.',
      notes: 'No modifican el string original (strings son inmutables)'
    },
    {
      id: 'js-96',
      front: '¿Qué hace el método trim()?',
      back: 'Elimina espacios en blanco del inicio y final del string. También existen trimStart() y trimEnd().',
      notes: 'Útil para limpiar input de usuarios'
    },
    {
      id: 'js-97',
      front: '¿Qué hace el método replace()?',
      back: 'Reemplaza la primera ocurrencia de un patrón (string o regex) con un reemplazo. replaceAll() reemplaza todas.',
      notes: 'Para reemplazar todas usar regex con flag g: .replace(/patrón/g, reemplazo)'
    },
    {
      id: 'js-98',
      front: '¿Qué hace el método indexOf() en strings?',
      back: 'Retorna el índice de la primera ocurrencia de un substring. Si no lo encuentra, retorna -1.',
      notes: 'También existe lastIndexOf() para buscar desde el final'
    },
    {
      id: 'js-99',
      front: '¿Qué hace el método includes() en strings?',
      back: 'Retorna true si el string contiene el substring especificado, false en caso contrario.',
      notes: 'Más legible que indexOf() !== -1'
    },
    {
      id: 'js-100',
      front: '¿Qué hace el método startsWith() y endsWith()?',
      back: 'Verifican si un string comienza o termina con el substring especificado. Retornan boolean.',
      notes: 'Case-sensitive. Más claros que usar slice() o substring()'
    },
    {
      id: 'js-101',
      front: '¿Cómo se concatenan strings en JavaScript?',
      back: 'Con el operador +, el método concat(), o template literals. Template literals son lo más moderno.',
      notes: 'Ejemplo: "Hola" + " " + "mundo" o `Hola ${nombre}`'
    },

    // DOM BÁSICO (10 preguntas)
    {
      id: 'js-102',
      front: '¿Qué es el DOM?',
      back: 'Document Object Model: representación en árbol de la estructura HTML. JavaScript puede manipularlo para cambiar contenido, estructura y estilos.',
      notes: 'El DOM no es parte de JavaScript, es una API del navegador'
    },
    {
      id: 'js-103',
      front: '¿Cómo se selecciona un elemento por ID?',
      back: 'Con document.getElementById("id"). Retorna el elemento o null si no existe.',
      notes: 'Es el método más rápido de selección'
    },
    {
      id: 'js-104',
      front: '¿Qué hace document.querySelector()?',
      back: 'Selecciona el primer elemento que coincida con el selector CSS especificado. Retorna el elemento o null.',
      notes: 'Acepta cualquier selector CSS: .clase, #id, [atributo], etc.'
    },
    {
      id: 'js-105',
      front: '¿Cuál es la diferencia entre querySelector y querySelectorAll?',
      back: 'querySelector retorna el primer elemento que coincide. querySelectorAll retorna una NodeList con todos los elementos que coinciden.',
      notes: 'NodeList se puede iterar con forEach, pero no es un array'
    },
    {
      id: 'js-106',
      front: '¿Cómo se cambia el contenido de texto de un elemento?',
      back: 'Con textContent o innerText. textContent es más rápido y respeta el formato original.',
      notes: 'innerHTML permite HTML, textContent solo texto plano (más seguro)'
    },
    {
      id: 'js-107',
      front: '¿Cómo se modifican los estilos CSS de un elemento?',
      back: 'Con la propiedad style: elemento.style.propiedad = "valor". Las propiedades CSS usan camelCase.',
      notes: 'Ejemplo: elemento.style.backgroundColor = "red" (no background-color)'
    },
    {
      id: 'js-108',
      front: '¿Cómo se añade/elimina una clase CSS a un elemento?',
      back: 'Con classList: elemento.classList.add("clase"), remove("clase"), toggle("clase"), contains("clase").',
      notes: 'toggle agrega si no existe, elimina si existe'
    },
    {
      id: 'js-109',
      front: '¿Cómo se crea un nuevo elemento en el DOM?',
      back: 'Con document.createElement("etiqueta"). Luego se puede modificar y añadir con appendChild() o append().',
      notes: 'Ejemplo: const div = document.createElement("div")'
    },
    {
      id: 'js-110',
      front: '¿Qué hace addEventListener()?',
      back: 'Registra un event listener en un elemento. Sintaxis: elemento.addEventListener("evento", función).',
      notes: 'Eventos comunes: "click", "input", "submit", "keydown", "load"'
    },
    {
      id: 'js-111',
      front: '¿Cuál es la diferencia entre appendChild y append?',
      back: 'appendChild acepta solo un Node y retorna el Node. append acepta múltiples argumentos (Nodes y strings) y no retorna nada.',
      notes: 'append es más moderno y flexible'
    },

    // ASINCRONÍA BÁSICA (8 preguntas)
    {
      id: 'js-112',
      front: '¿Qué hace setTimeout()?',
      back: 'Ejecuta una función después de un retraso especificado en milisegundos. Retorna un ID que puede usarse con clearTimeout().',
      notes: 'Sintaxis: setTimeout(función, milisegundos)'
    },
    {
      id: 'js-113',
      front: '¿Qué hace setInterval()?',
      back: 'Ejecuta una función repetidamente cada intervalo especificado en milisegundos. Se detiene con clearInterval().',
      notes: 'Continúa hasta ser detenido explícitamente con clearInterval(id)'
    },
    {
      id: 'js-114',
      front: '¿Qué es una Promise en JavaScript?',
      back: 'Un objeto que representa la eventual completación (o fallo) de una operación asíncrona y su valor resultante.',
      notes: 'Estados: pending, fulfilled, rejected'
    },
    {
      id: 'js-115',
      front: '¿Cómo se consume una Promise?',
      back: 'Con los métodos .then() para éxito, .catch() para errores, y .finally() para código que siempre se ejecuta.',
      notes: 'Sintaxis: promise.then(resultado => {}).catch(error => {})'
    },
    {
      id: 'js-116',
      front: '¿Qué es async/await?',
      back: 'Sintaxis moderna para trabajar con Promises. async marca una función como asíncrona, await pausa la ejecución hasta que la Promise se resuelva.',
      notes: 'await solo puede usarse dentro de funciones async'
    },
    {
      id: 'js-117',
      front: '¿Qué es el Event Loop en JavaScript?',
      back: 'El mecanismo que maneja la ejecución de código asíncrono. JavaScript es single-threaded pero puede manejar operaciones asíncronas.',
      notes: 'Fases: call stack, callback queue, microtask queue'
    },
    {
      id: 'js-118',
      front: '¿Qué es callback hell?',
      back: 'Anidamiento excesivo de callbacks que hace el código difícil de leer y mantener. Se soluciona con Promises o async/await.',
      notes: 'También llamado "pyramid of doom"'
    },
    {
      id: 'js-119',
      front: '¿Cuál es la diferencia entre código síncrono y asíncrono?',
      back: 'Síncrono: se ejecuta línea por línea, bloqueando hasta completar. Asíncrono: permite que otras operaciones continúen mientras espera.',
      notes: 'JavaScript es síncrono por defecto, asíncrono cuando usa APIs como fetch, setTimeout'
    }
  ]
};
*/