import React, { useState, useEffect } from 'react';

function Header() {
  // Lista de tus imágenes en la carpeta public
  const imagenes = [
    '/img1.png',
    '/img2.png',
    //'/img3.png'
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  // Efecto para que las imágenes cambien solas cada 10 segundos
  useEffect(() => {
    const temporizador = setInterval(() => {
      setIndiceActual((indiceAnterior) => 
        indiceAnterior === imagenes.length - 1 ? 0 : indiceAnterior + 1
      );
    }, 10000); // 10000 milisegundos = 10 segundos

    return () => clearInterval(temporizador); // Limpieza al desmontar
  }, [imagenes.length]);

  return (
    <header style={{ 
      maxWidth: '1000px', 
      margin: '0 auto 30px auto', 
      backgroundColor: '#ffffff', 
      borderRadius: '8px', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden' // Evita que las imágenes se salgan de las esquinas redondeadas
    }}>
      
      {/* Contenedor del Carrusel / Slider */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '600px', // Puedes ajustar la altura aquí
        backgroundColor: '#fa0303'
      }}>
        {imagenes.map((imagen, indice) => (
          <div
            key={indice}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imagen})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: indiceActual === indice ? 1 : 0,
              transition: 'opacity 1s ease-in-out', // Hace el efecto de desvanecimiento suave
            }}
          />
        ))}

        {/* Capa oscura encima de la imagen para que el texto se lea perfectamente */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '70%',
          //backgroundColor: 'rgba(43, 108, 176, 0.4)', // Azul con transparencia
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '0 2px 4px rgba(238, 4, 4, 0.83)'
        }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '32px' }}>
            Control de Asistencia
          </h1>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: '500', textAlign: 'center', padding: '0 20px' }}>
            FaCES - LA NUEVA VISION DE UNIVERSIDAD
          </p>
        </div>
      </div>

    </header>
  );
}

export default Header;
