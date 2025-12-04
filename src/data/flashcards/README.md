# Sistema de Flashcards

Este sistema permite estudiar con flashcards sin límites diarios. Los datos se ingresan manualmente en archivos `.js` y el progreso de estudio se guarda en localStorage.

## 📁 Estructura

```
flashcards/
├── index.js                      # Índice que importa todos los mazos
├── programacion/                 # Mazos de programación
│   └── javascript-basics.js      # Ejemplo de mazo
└── idiomas/                      # Mazos de idiomas
    └── chino-hsk1.js             # Ejemplo de mazo
```

## 🎯 Cómo agregar un nuevo mazo

### 1. Crear el archivo del mazo

Crea un nuevo archivo `.js` en la carpeta correspondiente:
- `programacion/` para mazos de programación
- `idiomas/` para mazos de idiomas

### 2. Estructura del archivo

```javascript
// src/data/flashcards/programacion/mi-mazo.js
export const miMazo = {
  id: 'mi-mazo',                    // ID único (kebab-case)
  category: 'programacion',          // 'programacion' o 'idiomas'
  subcategory: 'JavaScript',         // Etiqueta para filtrar
  name: 'Mi Mazo de JavaScript',     // Nombre visible
  description: 'Descripción breve',  // Descripción opcional
  cards: [
    {
      id: 'card-01',                 // ID único de la carta
      front: '¿Pregunta?',           // Frente de la carta
      back: 'Respuesta',             // Reverso de la carta
      notes: 'Notas adicionales'     // Notas opcionales
    },
    {
      id: 'card-02',
      front: '¿Otra pregunta?',
      back: 'Otra respuesta',
      notes: 'Más información'
    }
  ]
};
```

### 3. Registrar el mazo en index.js

Abre `src/data/flashcards/index.js` y:

1. Importa tu mazo:
```javascript
import { miMazo } from './programacion/mi-mazo';
```

2. Agrégalo al array `allDecks`:
```javascript
export const allDecks = [
  // ... otros mazos
  miMazo,  // ← Agregar aquí
];
```

## 📝 Ejemplos

### Mazo de Programación

```javascript
export const pythonBasics = {
  id: 'python-basics',
  category: 'programacion',
  subcategory: 'Python',
  name: 'Python - Fundamentos',
  description: 'Sintaxis básica y estructuras de datos',
  cards: [
    {
      id: 'py-01',
      front: '¿Cómo crear una lista en Python?',
      back: 'lista = [1, 2, 3] o lista = list()',
      notes: 'Las listas son mutables'
    },
    {
      id: 'py-02',
      front: '¿Qué es un diccionario?',
      back: 'Estructura de datos clave-valor: dict = {"key": "value"}',
      notes: 'Similar a objetos en JavaScript'
    }
  ]
};
```

### Mazo de Idiomas

```javascript
export const coreanoBasico = {
  id: 'coreano-basico',
  category: 'idiomas',
  subcategory: 'Coreano',
  name: 'Coreano - Saludos',
  description: 'Expresiones básicas de cortesía',
  cards: [
    {
      id: 'ko-01',
      front: '안녕하세요',
      back: 'Hola (formal)',
      notes: 'an-nyeong-ha-se-yo - Saludo más común'
    },
    {
      id: 'ko-02',
      front: '감사합니다',
      back: 'Gracias (formal)',
      notes: 'gam-sa-ham-ni-da'
    }
  ]
};
```

## ✨ Formato de Texto

El sistema soporta dos formas de formatear el contenido: **arrays para listas** (recomendado) y **HTML para formato avanzado**.

### Opción 1: Arrays para Listas (Recomendado)

La forma más intuitiva y limpia de crear listas es usando arrays de arrays:

```javascript
{
  id: 'card-03',
  front: '¿Cuáles son los tipos primitivos en JavaScript?',
  back: [
    ['String'],
    ['Number'],
    ['Boolean'],
    ['Undefined'],
    ['Null'],
    ['Symbol'],
    ['BigInt']
  ],
  notes: '7 tipos primitivos en total'
}
```

**Ventajas:**
- ✅ Sintaxis más limpia y fácil de leer
- ✅ No necesitas escribir HTML
- ✅ Automáticamente se renderiza como `<ul><li>`
- ✅ Más fácil de mantener

### Opción 2: HTML para Formato Avanzado

Si necesitas formato más complejo (negritas, cursivas, código, etc.), puedes usar HTML directamente:

```javascript
{
  id: 'card-05',
  front: '¿Qué es <strong>JSX</strong>?',
  back: 'Una extensión de sintaxis para JavaScript que permite escribir <em>código similar a HTML</em> dentro de JavaScript.<br><br><code>const elemento = &lt;h1&gt;Hola&lt;/h1&gt;</code>',
  notes: 'JSX se transpila a llamadas de React.createElement()'
}
```

### Listas con viñetas usando HTML (alternativa)
```javascript
{
  id: 'card-04',
  front: '¿Cuáles son los tipos primitivos en JavaScript?',
  back: '<ul><li>String</li><li>Number</li><li>Boolean</li><li>Null</li><li>Undefined</li><li>Symbol</li><li>BigInt</li></ul>',
  notes: '7 tipos primitivos en total'
}
```

### Etiquetas HTML comunes (cuando uses HTML)
- `<strong>` o `<b>`: **Texto en negrita**
- `<em>` o `<i>`: *Texto en cursiva*
- `<code>`: `Código inline`
- `<br>`: Salto de línea
- `<ul><li>`: Lista con viñetas
- `<ol><li>`: Lista enumerada
- `<pre>`: Bloques de código con formato

**Importante**: Para caracteres especiales HTML como `<` y `>` dentro de código, usa las entidades HTML:
- `<` → `&lt;`
- `>` → `&gt;`
- `&` → `&amp;`

## 🔧 Consejos

1. **IDs únicos**: Asegúrate de que tanto el `id` del mazo como los `id` de las cartas sean únicos en todo el sistema
2. **Nombres claros**: Usa nombres descriptivos para facilitar la búsqueda
3. **Subcategorías**: Usa subcategorías consistentes (ej: "JavaScript", "Python", "Chino", "Japonés")
4. **Notas útiles**: Las notas se muestran en el reverso de la carta durante el estudio
5. **Organización**: Agrupa mazos relacionados en el mismo archivo o en archivos separados según prefieras
6. **HTML seguro**: Solo usa HTML en contenido que tú creas, nunca en contenido de usuarios externos

## 📊 Progreso

El progreso se guarda automáticamente en localStorage:
- Cuántas veces has estudiado cada carta
- Cartas marcadas como difíciles
- Última fecha de estudio

**No necesitas hacer nada para guardar el progreso**, se hace automáticamente al estudiar.

## 🚀 Vista previa

Después de agregar un mazo:
1. Guarda los archivos
2. Recarga la página web
3. El nuevo mazo aparecerá en la categoría correspondiente

## 🗑️ Eliminar un mazo

1. Elimina el archivo del mazo (o comenta la exportación)
2. Elimina la importación de `index.js`
3. Elimina el mazo del array `allDecks`
