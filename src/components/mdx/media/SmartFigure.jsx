'use client'
import { useState, useEffect, createContext, useContext, useRef } from 'react'
import styles from './SmartFigure.module.css'

// Context para manejar la numeración de figuras
const FigureContext = createContext()

export function FigureProvider({ children }) {
  const [figures, setFigures] = useState({})

  const registerFigure = (id) => {
    setFigures(prev => {
      // Si la figura ya está registrada, retornar su número
      if (prev[id]) {
        return prev
      }
      
      // Calcular nuevo número basado en figuras existentes
      const existingNumbers = Object.values(prev)
      const nextNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1
      
      // Registrar nueva figura
      return {
        ...prev,
        [id]: nextNumber
      }
    })
  }

  return (
    <FigureContext.Provider value={{ registerFigure, figures }}>
      {children}
    </FigureContext.Provider>
  )
}

export default function SmartFigure({ 
  src, 
  alt = '', 
  caption,
  id, 
  width,
  height,
  center = true,
  lightbox = false,
  className = '',
  size = 'auto', // 'small', 'medium', 'large', 'auto'
  autoNumber = true,
  ...props 
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const figureContext = useContext(FigureContext)
  const lightboxScrollRef = useRef(null)
  const scrollTimeoutRef = useRef(null)

  // Registrar figura si tiene ID y contexto disponible
  useEffect(() => {
    if (autoNumber && id && figureContext) {
      figureContext.registerFigure(id)
    }
  }, [id, autoNumber, figureContext])

  // Cerrar lightbox con ESC y manejar scroll
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isLightboxOpen && !isClosing) {
        closeLightbox()
      }
    }

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true)
      }
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      
      // Set new timeout
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
      
      // Add scroll listener to lightbox container
      const lightboxElement = lightboxScrollRef.current
      if (lightboxElement) {
        lightboxElement.addEventListener('scroll', handleScroll)
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      
      const lightboxElement = lightboxScrollRef.current
      if (lightboxElement) {
        lightboxElement.removeEventListener('scroll', handleScroll)
      }
      
      if (!isLightboxOpen) {
        document.body.style.overflow = 'auto'
      }
    }
  }, [isLightboxOpen, isClosing, isScrolling])

  const openLightbox = () => {
    if (lightbox) {
      setIsLightboxOpen(true)
      setIsClosing(false)
    }
  }

  const closeLightbox = () => {
    if (isScrolling) return // No cerrar si se está haciendo scroll
    
    setIsClosing(true)
    // Esperar a que termine la animación antes de cerrar
    setTimeout(() => {
      setIsLightboxOpen(false)
      setIsClosing(false)
    }, 300) // Duración de la animación de cierre
  }

  const handleLightboxClick = (e) => {
    // Solo cerrar si el click es en el fondo del lightbox, no en la imagen o durante scroll
    if (e.target === e.currentTarget && !isScrolling) {
      closeLightbox()
    }
  }

  // Clases simplificadas - centrado y tamaños manejados con estilos inline
  const figureClasses = [
    styles.figure,
    className
  ].filter(Boolean).join(' ')

  const imageClasses = [
    styles.image,
    lightbox && styles.lightboxEnabled
  ].filter(Boolean).join(' ')

  const customStyles = {
    ...(width && { width }),
    ...(height && { height }),
  }

  // Estilos de centrado garantizados
  const imageStyle = {
    ...customStyles,
    maxWidth: size === 'small' ? '300px' : 
              size === 'medium' ? '500px' : 
              size === 'large' ? '700px' : '100%',
    height: 'auto',
    ...(center && { 
      display: 'block', 
      marginLeft: 'auto', 
      marginRight: 'auto'
    }),
  }

  const figureStyle = {
    ...(center && { 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    })
  }

  // Obtener número de figura del contexto
  const figureNumber = figureContext?.figures[id]

  // Construir caption con numeración
  const fullCaption = autoNumber && figureNumber ? 
    `Figura ${figureNumber}${caption ? `: ${caption}` : ''}` : 
    caption

  return (
    <>
      <figure id={id} className={figureClasses} style={figureStyle} {...props}>
        <img
          src={src}
          alt={alt}
          className={imageClasses}
          style={imageStyle}
          onClick={openLightbox}
          loading="lazy"
        />
        {fullCaption && (
          <figcaption className={styles.caption}>
            {fullCaption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox con scroll vertical */}
      {isLightboxOpen && (
        <div 
          ref={lightboxScrollRef}
          className={`${styles.lightbox} ${isClosing ? styles.closing : ''}`} 
          onClick={handleLightboxClick}
        >
          <div className={`${styles.lightboxContent} ${isClosing ? styles.closing : ''}`}>
            <img
              src={src}
              alt={alt}
              className={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Botón de cerrar */}
            <button
              onClick={closeLightbox}
              className={styles.closeButton}
              aria-label="Cerrar lightbox"
            >
              ×
            </button>

            {/* Caption en lightbox */}
            {fullCaption && (
              <div className={styles.lightboxCaption}>
                {fullCaption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

// Componente para referencias cruzadas
export function FigureRef({ id }) {
  const figureContext = useContext(FigureContext)
  const figureNumber = figureContext?.figures[id]

  if (!figureNumber) {
    return <span className={styles.figureRefError}>[Fig. ?]</span>
  }

  return (
    <a 
      href={`#${id}`} 
      className={styles.figureRef}
    >
      Figura {figureNumber}
    </a>
  )
}