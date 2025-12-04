'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import styles from './DeckForm.module.css';

export const DeckForm = ({ category, initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    subcategory: initialData?.subcategory || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('El nombre del mazo es requerido');
      return;
    }

    onSave({
      ...formData,
      category
    });
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
            {initialData ? 'Editar Mazo' : 'Nuevo Mazo'}
          </h2>
          <button className={styles.closeButton} onClick={onCancel}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Nombre del mazo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ej: JavaScript - Array Methods"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="subcategory" className={styles.label}>
              Subcategoría
            </label>
            <input
              type="text"
              id="subcategory"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ej: JavaScript, Python, HSK 1, etc."
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="description" className={styles.label}>
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Breve descripción del contenido..."
              rows="3"
            />
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={onCancel} className={styles.cancelButton}>
              Cancelar
            </button>
            <button type="submit" className={styles.saveButton}>
              {initialData ? 'Guardar cambios' : 'Crear mazo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
