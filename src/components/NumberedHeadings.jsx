"use client";

import React, { useRef } from "react";

export function NumberedHeadings({ children }) {
  // Usar useRef en lugar de useState para evitar ciclos de renderizado
  const countersRef = useRef({
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0
  });
  
  // Función para procesar los elementos
  const processChildren = (children) => {
    return React.Children.map(children, child => {
      // Si no es un elemento React válido, devolverlo sin cambios
      if (!React.isValidElement(child)) return child;
      
      // Si es un encabezado (h1-h6), añadir número
      if (typeof child.type === 'string' && /^h[1-6]$/.test(child.type)) {
        const level = child.type;
        const counters = countersRef.current;
        
        // Incrementar el contador para este nivel
        counters[level]++;
        
        // Resetear los contadores de niveles inferiores
        if (level === 'h1') {
          counters.h2 = 0;
          counters.h3 = 0;
          counters.h4 = 0;
          counters.h5 = 0;
          counters.h6 = 0;
        } else if (level === 'h2') {
          counters.h3 = 0;
          counters.h4 = 0;
          counters.h5 = 0;
          counters.h6 = 0;
        } else if (level === 'h3') {
          counters.h4 = 0;
          counters.h5 = 0;
          counters.h6 = 0;
        } else if (level === 'h4') {
          counters.h5 = 0;
          counters.h6 = 0;
        } else if (level === 'h5') {
          counters.h6 = 0;
        }
        
        // Generar el prefijo de numeración según el nivel
        let prefix = '';
        if (level === 'h1') {
          prefix = `${counters.h1}. `;
        } else if (level === 'h2') {
          prefix = `${counters.h1}.${counters.h2}. `;
        } else if (level === 'h3') {
          prefix = `${counters.h1}.${counters.h2}.${counters.h3}. `;
        } else if (level === 'h4') {
          prefix = `${counters.h1}.${counters.h2}.${counters.h3}.${counters.h4}. `;
        } else if (level === 'h5') {
          prefix = `${counters.h1}.${counters.h2}.${counters.h3}.${counters.h4}.${counters.h5}. `;
        } else if (level === 'h6') {
          prefix = `${counters.h1}.${counters.h2}.${counters.h3}.${counters.h4}.${counters.h5}.${counters.h6}. `;
        }
        
        // Devolver el encabezado con el número añadido
        return React.cloneElement(child, child.props, 
          <>{prefix}{child.props.children}</>
        );
      }
      
      // Si no es un encabezado, pero tiene hijos, procesar recursivamente
      if (child.props && child.props.children) {
        return React.cloneElement(child, {
          ...child.props,
          children: processChildren(child.props.children)
        });
      }
      
      // Si no tiene hijos o no es un encabezado, devolverlo sin cambios
      return child;
    });
  };
  
  // Resetear contadores al inicio
  countersRef.current = {
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0
  };
  
  // Procesar los hijos y añadir numeración
  return <>{processChildren(children)}</>;
}