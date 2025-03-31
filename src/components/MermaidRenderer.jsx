useEffect(() => {
    async function renderDiagram() {
      try {
        // Asegúrate de que mermaid esté inicializado una sola vez
        if (!window.mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
          });
          window.mermaidInitialized = true;
        }
        
        if (mermaidRef.current) {
          // Limpia el contenido anterior
          mermaidRef.current.innerHTML = '';
          // Crea un elemento para el diagrama
          const container = document.createElement('div');
          container.className = 'mermaid';
          container.textContent = chart;
          mermaidRef.current.appendChild(container);
          
          // Renderiza el diagrama
          await mermaid.run();
        }
      } catch (error) {
        console.error("Error rendering mermaid diagram:", error);
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = `
            <div style="border: 1px solid red; padding: 10px;">
              <p>Error rendering diagram: ${error.message}</p>
              <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${chart}</pre>
            </div>
          `;
        }
      }
    }
    
    renderDiagram();
  }, [chart]);