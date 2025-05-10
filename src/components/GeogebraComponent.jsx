"use client";
import { useEffect, useRef, useState } from 'react';

export default function GeogebraComponent({
  width = 800,
  height = 550,
  showMenuBar = true,
  showToolBar = true,
  showAlgebraInput = true,
  filename = null,
  material_id = null,
  appName = "classic",
  onReady = null
}) {
  const ggbContainerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [applet, setApplet] = useState(null);

  useEffect(() => {
    // Cargar el script de GeoGebra
    const script = document.createElement('script');
    script.src = "https://www.geogebra.org/apps/deployggb.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Configurar parámetros
      const params = {
        "width": "100%",
        "height": height,
        "showToolBar": showToolBar,
        "showAlgebraInput": showAlgebraInput,
        "showMenuBar": showMenuBar,
        "appName": appName,
        "language": "es",
        "fontSize": 16,
        "allowStyleBar": true,
        "useBrowserForJS": false,
        "preventFocus": false,
        "showFullscreenButton": true, // Botón de pantalla completa
        // Configuración para ver todos los objetos
        "showResetIcon": true, // Mostrar icono para restablecer la vista
        "enableLabelDrags": false,
        "enableShiftDragZoom": true, // Permitir zoom con Shift+Arrastrar
        "enableRightClick": true, // Habilitar menú contextual
      };

      // Añadir filename o material_id si está definido
      if (filename) {
        params.filename = filename;
      } else if (material_id) {
        params.material_id = material_id;
      }

      // Crear una función de callback para cuando el applet esté listo
      params.appletOnLoad = (api) => {
        setIsReady(true);
        setApplet(api);
        
        // Ajustar vista para mostrar todos los objetos
        if (api) {
          // Pequeño retraso para asegurar que todo está cargado
          setTimeout(() => {
            try {
              // Mostrar todos los objetos
              api.setViewProperties({
                enableShiftDragZoom: true
              });
              
              // Comando para ver todos los objetos
              api.evalCommand("ZoomIn(1)"); // Un pequeño zoom inicial
              api.evalCommand("SetVisibleInView(1, true)"); // Ver todos los objetos en vista 1
              
              // Alternativamente, puede usar este comando:
              api.evalCommand("ZoomFit()");
            } catch (error) {
              console.log("Error al ajustar la vista:", error);
            }
          }, 500);
        }
        
        if (onReady && typeof onReady === 'function') {
          onReady(api);
        }
      };

      // @ts-ignore - GGBApplet viene del script cargado
      const ggbApplet = new window.GGBApplet(params, true);
      ggbApplet.inject(ggbContainerRef.current);
    };

    return () => {
      // Limpieza al desmontar
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [width, height, showMenuBar, showToolBar, showAlgebraInput, filename, material_id, appName, onReady]);

  return (
    <div style={{ 
      display: 'block', 
      margin: '1rem auto', 
      width: '100%',
      maxWidth: '100%',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      {!isReady && (
        <div style={{ 
          textAlign: 'center', 
          padding: '15px',
          backgroundColor: '#f5f5f5'
        }}>
          Cargando GeoGebra...
        </div>
      )}
      <div
        ref={ggbContainerRef}
        className="geogebra-container"
        style={{
          width: "100%",
          height: `${height}px`
        }}
      ></div>
    </div>
  );
}