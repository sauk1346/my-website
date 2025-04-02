'use client';

import React, { useState } from 'react';
import styles from '../styles/Calendar.module.css';

// El componente ahora recibe eventos como prop con un valor por defecto (array vacío)
const Calendar = ({ eventos = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  // Obtener días del mes actual
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Modificado para comenzar con lunes (1) en lugar de domingo (0)
    let firstDayOfMonth = new Date(year, month, 1).getDay();
    // Convertir el día 0 (domingo) a 7 para que sea el último día
    firstDayOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;
    // Restar 1 para que lunes sea 1, martes 2, etc.
    firstDayOfMonth -= 1;
    
    const days = [];
    
    // Agregar días del mes anterior para llenar la primera semana
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false
      });
    }
    
    // Agregar días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }
    
    // Agregar días del mes siguiente para completar la cuadrícula
    const remainingDays = 42 - days.length; // 6 filas x 7 días = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentDate);
  
  // Nombres de los meses en español
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  // Nombres de los días en español (reordenados para comenzar con lunes)
  const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  // Cambiar al mes anterior
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Cambiar al mes siguiente
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Formatear fecha como string para usarla como clave en el objeto de eventos
  const formatDateKey = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  // Seleccionar un día para ver sus eventos
  const selectDay = (day) => {
    setSelectedDay(day);
  };

  // Obtener eventos para un día específico
  const getEventosDelDia = (day) => {
    const dateKey = formatDateKey(day.date);
    return eventos.filter(evento => evento.fecha === dateKey);
  };

  // Verificar si un día tiene eventos
  const hasEvents = (day) => {
    return getEventosDelDia(day).length > 0;
  };

  // Comprobar si una fecha es hoy
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  return (
    <div className={styles.calendarioContainer}>
      <div className={styles.calendario}>
        {/* Cabecera del calendario */}
        <div className={styles.calendarioHeader}>
          <button 
            onClick={prevMonth}
            className={styles.calendarioNavButton}
          >
            &lt;
          </button>
          <h2 className={styles.calendarioTitle}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button 
            onClick={nextMonth}
            className={styles.calendarioNavButton}
          >
            &gt;
          </button>
        </div>
        
        {/* Días de la semana */}
        <div className={styles.calendarioDaysOfWeek}>
          {dayNames.map(day => (
            <div key={day} className={styles.calendarioDayOfWeek}>
              {day}
            </div>
          ))}
        </div>
        
        {/* Días del mes */}
        <div className={styles.calendarioDaysGrid}>
          {days.map((day, index) => {
            return (
              <div 
                key={index} 
                className={`${styles.calendarioDay} 
                  ${day.isCurrentMonth ? styles.currentMonth : styles.otherMonth} 
                  ${isToday(day.date) ? styles.today : ''}`}
                onClick={() => selectDay(day)}
              >
                <div className={`${styles.calendarioDayHeader} ${isToday(day.date) ? styles.todayHeader : ''}`}>
                  <span>{day.date.getDate()}</span>
                  {hasEvents(day) && (
                    <span className={styles.eventIndicator}></span>
                  )}
                </div>
                <div className={styles.calendarioEvents}>
                  {getEventosDelDia(day).map(evento => (
                    <div key={evento.id} className={styles.calendarioEvent}>
                      {evento.hora && <span className={styles.eventTime}>{evento.hora}: </span>}
                      {evento.titulo}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Detalles del día seleccionado */}
      {selectedDay && (
        <div className={styles.dayDetails}>
          <h3 className={styles.dayDetailsTitle}>
            {selectedDay.date.getDate()} de {monthNames[selectedDay.date.getMonth()]}
          </h3>
          {getEventosDelDia(selectedDay).length > 0 ? (
            <div className={styles.eventsList}>
              {getEventosDelDia(selectedDay).map(evento => (
                <div key={evento.id} className={styles.eventItem}>
                  <div className={styles.eventItemHeader}>
                    {evento.hora && <span className={styles.eventItemTime}>{evento.hora}</span>}
                    <span className={styles.eventItemTitle}>{evento.titulo}</span>
                  </div>
                  {evento.description && (
                    <div className={styles.eventItemDescription}>
                      {evento.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.noEvents}>No hay eventos para este día.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;