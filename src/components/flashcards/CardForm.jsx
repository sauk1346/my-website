'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import styles from './CardForm.module.css';

export const CardForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    front: initialData?.front || '',
    back: initialData?.back || '',
    notes: initialData?.notes || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.front.trim() || !formData.back.trim()) {
      alert('El frente y reverso de la carta son requeridos');
      return;
    }

    onSave(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {initialData ? 'Editar Carta' : 'Nueva Carta'}
          </h2>
          <button className={styles.closeButton} onClick={onCancel}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="front" className={styles.label}>
              Frente *
            </label>
            <textarea
              id="front"
              name="front"
              value={formData.front}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Pregunta o término..."
              rows="3"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="back" className={styles.label}>
              Reverso *
            </label>
            <textarea
              id="back"
              name="back"
              value={formData.back}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Respuesta o definición..."
              rows="3"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="notes" className={styles.label}>
              Notas (opcional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Información adicional, ejemplos, etc..."
              rows="2"
            />
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={onCancel} className={styles.cancelButton}>
              Cancelar
            </button>
            <button type="submit" className={styles.saveButton}>
              {initialData ? 'Guardar cambios' : 'Crear carta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
