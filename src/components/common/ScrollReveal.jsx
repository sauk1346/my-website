'use client';

import { motion } from 'framer-motion';
import { viewportConfig, viewportEarly } from '@/utils/animations';

/**
 * Variantes predefinidas para scroll reveal
 */
const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  fadeDown: {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  fadeRight: {
    initial: { opacity: 0, x: 30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  blur: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
};

/**
 * Componente ScrollReveal
 * Envuelve contenido para animarlo cuando entra en el viewport
 *
 * @param {string} variant - Tipo de animacion: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur'
 * @param {number} delay - Delay en segundos antes de iniciar la animacion
 * @param {boolean} early - Si es true, activa la animacion mas temprano
 * @param {string} className - Clases CSS adicionales
 * @param {React.ReactNode} children - Contenido a animar
 */
const ScrollReveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  early = false,
  className = '',
  as = 'div',
  ...props
}) => {
  const selectedVariant = variants[variant] || variants.fadeUp;
  const viewportSettings = early ? viewportEarly : viewportConfig;

  // Añadir delay a la transicion si se especifica
  const animateWithDelay = delay > 0
    ? {
      ...selectedVariant.animate,
      transition: {
        ...selectedVariant.animate.transition,
        delay,
      },
    }
    : selectedVariant.animate;

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={viewportSettings}
      variants={{
        initial: selectedVariant.initial,
        animate: animateWithDelay,
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default ScrollReveal;
