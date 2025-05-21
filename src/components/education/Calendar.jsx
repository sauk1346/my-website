'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/Calendar.module.css';

const Calendar = ({ eventos = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);

  // Efecto para detectar dispositivos móviles
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
  const dayNames = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  // Cambiar al mes anterior
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDay(null);
    setSelectedDayEvents([]);
    setShowModal(false);
  };

  // Cambiar al mes siguiente
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDay(null);
    setSelectedDayEvents([]);
    setShowModal(false);
  };

  // Formatear fecha como string para usarla como clave en el objeto de eventos
  const formatDateKey = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  // Obtener eventos para un día específico
  const getEventosDelDia = (day) => {
    if (!day) return [];
    
    const dateKey = formatDateKey(day.date);
    return eventos.filter(evento => evento.fecha === dateKey);
  };

  // Seleccionar un día para ver sus eventos
  const selectDay = (day) => {
    // Actualizar el día seleccionado
    setSelectedDay({...day});
    
    // IMPORTANTE: Actualizar explícitamente los eventos del día seleccionado
    const eventsForDay = getEventosDelDia(day);
    setSelectedDayEvents(eventsForDay);
    
    if (isMobile) {
      setShowModal(true);
    }
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
  
  // Formatear fecha para la vista detallada
  const formatDetailDate = (date) => {
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return `${dayNames[date.getDay()]}, ${date.getDate()} de ${monthNames[date.getMonth()]}`;
  };
  
  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Cerrar los detalles del día
  const closeDetails = () => {
    setSelectedDay(null);
    setSelectedDayEvents([]);
  };

  // Renderizar detalles del día 
  const renderDayDetails = () => {
    if (!selectedDay) return null;
    
    return (
      <div className={styles.dayDetails}>
        <h3 className={styles.dayDetailsTitle}>
          {formatDetailDate(selectedDay.date)}
          <button 
            className={styles.closeDetailsButton}
            onClick={closeDetails}
            aria-label="Cerrar detalles"
          >
            ×
          </button>
        </h3>
        
        {selectedDayEvents.length > 0 ? (
          <div className={styles.eventsList}>
            {selectedDayEvents.map(evento => (
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
    );
  };

  return (
    <div className={`${styles.calendarioContainer} ${showModal ? styles.detailsModalActive : ''} ${selectedDay && !isMobile ? styles.hasSelectedDay : ''}`}>
      <div className={styles.calendario}>
        {/* Cabecera del calendario */}
        <div className={styles.calendarioHeader}>
          <button 
            onClick={prevMonth}
            className={styles.calendarioNavButton}
            aria-label="Mes anterior"
          >
            &lt;
          </button>
          <h2 className={styles.calendarioTitle}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button 
            onClick={nextMonth}
            className={styles.calendarioNavButton}
            aria-label="Mes siguiente"
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
            const dayEvents = getEventosDelDia(day);
            const hasDay = hasEvents(day);
            
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
                  {hasDay && (
                    <span className={styles.eventIndicator}></span>
                  )}
                </div>
                <div className={styles.calendarioEvents}>
                  {/* Mostrar solo los primeros eventos */}
                  {dayEvents.slice(0, 2).map(evento => (
                    <div key={evento.id} className={styles.calendarioEvent}>
                      {evento.hora && <span className={styles.eventTime}>{evento.hora}: </span>}
                      {evento.titulo}
                    </div>
                  ))}
                  
                  {/* Indicador de más eventos */}
                  {dayEvents.length > 2 && (
                    <div className={styles.calendarioEvent}>
                      +{dayEvents.length - 2} más
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Detalles del día (para vista desktop y orientación horizontal) */}
      {selectedDay && renderDayDetails()}
      
      {/* Modal para dispositivos móviles */}
      {showModal && selectedDay && (
        <div className={styles.detailsModal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.modalCloseButton}
              onClick={closeModal}
              aria-label="Cerrar detalles"
            >
              ×
            </button>
            {/* Contenido del modal */}
            <div className={styles.dayDetails}>
              <h3 className={styles.dayDetailsTitle}>
                {formatDetailDate(selectedDay.date)}
              </h3>
              
              {selectedDayEvents.length > 0 ? (
                <div className={styles.eventsList}>
                  {selectedDayEvents.map(evento => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;