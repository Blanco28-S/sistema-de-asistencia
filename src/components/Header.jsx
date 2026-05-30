import React, { useState, useEffect } from 'react';

function Header({ cambiarSeccion }) {
  // Lista de tus imágenes en la carpeta public
  const imagenes = ['/ima.png'];

  const [indiceActual, setIndiceActual] = useState(0);
  const [menuActivo, setMenuActivo] = useState(null); // Corregido: Limpiada la llave '}' que rompía el código

  // Efecto para que las imágenes cambien solas cada 10 segundos
  /*useEffect(() => {
    const temporizador = setInterval(() => {
      setIndiceActual((indiceAnterior) => 
        indiceAnterior === imagenes.length - 1 ? 0 : indiceAnterior + 1
      );
    }, 10000); // 10000 milisegundos = 10 segundos

    return () => clearInterval(temporizador); // Limpieza al desmontar
  }, [imagenes.length]);*/

  return (
    <header style={{ 
      maxWidth: '10000px', 
      margin: '0 auto 30px auto', 
      backgroundColor: '#f8f8f8', 
      borderRadius: '0px', 
      boxShadow: '0 4px 6px -1px rgba(252, 252, 252, 0.1)',
    }}>
      
      {/* Contenedor del Carrusel / Slider */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '400px', // Tu altura original de 400px
        backgroundColor: '#ffffff'
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
              transition: 'opacity 1s ease-in-out', 
            }}
          />
        ))}

        {/* ======================================================== */}
        {/* BARRA DE BOTONES EN LA CABECERA (NAVBAR) */}
        {/* ======================================================== */}
        <nav style={{
          position: 'absolute', // Cambiado a absolute para que flote arriba sin empujar el texto central
          top: '300px',
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center', 
          gap: '100px',             
          padding: '20px', // Corregido de 300px a 20px para que quepa perfectamente
          boxSizing: 'border-box',
          zIndex: 200,               
          
        }}>
          
          {/* botón para el registro del personal */}
          <div 
            onMouseEnter={() => setMenuActivo('registro')} 
            onMouseLeave={() => setMenuActivo(null)}  
            style={{ position: 'relative', display: 'inline-block' }}
          >
            {/*  Usamos onClick para ejecutar la función de App.jsx */}
            <a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('registro'); }} style={estiloBoton}>REGISTRO PERSONAL</a>
            
            {menuActivo === 'registro' && (
              <ul style={estiloMenuDesplegable}>
                {/* Aquí  hacer lo mismo en el futuro para sub-pantallas si quieres */}
                <li><a href="#NuevoRegistro" style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>INSCRIBIR NUEVO</a></li>
                <li><a href="#ModificarRegistro" style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>MODIFICAR DATOS</a></li>
              </ul>
            )}
          </div>

          {/* botón para el tipo de asistencia hecha por el personal */}
          <div 
            onMouseEnter={() => setMenuActivo('asistencia')} 
            onMouseLeave={() => setMenuActivo(null)}
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('asistencia'); }} style={estiloBoton}>TIPO DE ASISTENCIA</a>
            {menuActivo === 'asistencia' && (
              <ul style={estiloMenuDesplegable}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('asistencia'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>A TIEMPO</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('asistencia'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>CON RETRASO JUSTIFICADO</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('asistencia'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>CON RETRASO INJUSTIFICADO</a></li>
              </ul>
            )}
          </div>

          {/* botón para el tipo de inasistencia */}
          <div 
            onMouseEnter={() => setMenuActivo('inasistencia')} 
            onMouseLeave={() => setMenuActivo(null)}
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('inasistencia'); }} style={estiloBoton}>TIPO DE INASISTENCIA</a>
            {menuActivo === 'inasistencia' && (
              <ul style={estiloMenuDesplegable}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('inasistencia'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>JUSTIFICADA</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('inasistencia'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>INJUSTIFICADA</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('inasistencia'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>PERMISO MÉDICO</a></li>
              </ul>
            )}
          </div>

          {/* botón para el tipo de reporte */}
          <div 
            onMouseEnter={() => setMenuActivo('reportes')} 
            onMouseLeave={() => setMenuActivo(null)}
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('reportes'); }} style={estiloBoton}>TIPO DE REPORTE</a>
            {menuActivo === 'reportes' && (
              <ul style={estiloMenuDesplegable}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('reportes'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>REPORTE DIARIO</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('reportes'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>REPORTE SEMANAL</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarSeccion('reportes'); }} style={estiloSubcategoria} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>REPORTE MENSUAL</a></li>
              </ul>
            )}
          </div>
        
        </nav>

        {/* Capa oscura encima de la imagen para que el texto se lea perfectamente */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',         //colores del texto faces - facul ....sociales
          textShadow: '0 2px 4px rgb(0, 0, 0)',   //bordes o fonde del texto para que resalte más
          zIndex: 5 // Por debajo de la navbar para que no bloquee los clics del menú
        }}>
          <p style={{ margin: '5px 5px 5px 5px', fontSize: '100px', fontWeight: '500', textAlign: 'center', padding: '30px 60px' }}>
            FaCES
          </p>
          <p style={{ margin: '5px 5px 5px 5px', fontSize: '40px', fontWeight: '100', textAlign: 'center', padding: '5px 0px' }}>
            Facultad de Ciencias Económicas y Sociales
          </p>
          <h1 style={{ margin: '5px 0 0 0', fontSize: '30px', textAlign: 'center' }}>
             SISTEMA DE GESTIÓN DE ASISTENCIA - UNIVERSIDAD DE CARABOBO
          </h1>
        </div>
      </div>

    </header>
  );
}

// ========================================================
// AGREGADOS: ESTILOS Y FUNCIONES QUE FALTABAN DEFINIR
// ========================================================

const estiloBoton = {
  color: '#0a0a0a',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: '400',
  padding: '5px 25px', 
  borderRadius: '22px', 
  backgroundColor: 'rgba(227, 209, 209, 0)', 
  backdropFilter: 'blur(20px)', 
  transition: 'all 0.2s ease-in-out',
  border: '1px solid rgba(255, 255, 255, 0.02)',
  display: 'inline-block',
  cursor: 'pointer',
};

const estiloMenuDesplegable = {
  position: 'absolute',
  top: '90%', 
  left: '50%',
  transform: 'translateX(-50%)', 
  backgroundColor: 'rgba(202, 113, 113, 0.55)', 
  minWidth: '20px',
  borderRadius: '5px',
  padding: '10px 5px',
  margin: '8px 0 0 0',
  listStyle: 'none',
  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
  border: '1px solid rgba(196, 65, 65, 0.17)',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
};

const estiloSubcategoria = {
  color: '#000000',
  textDecoration: 'none',
  fontSize: '15px',
  padding: '5px 5px',
  display: 'block',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease',
};

// Funciones para manejar el cambio de color al pasar el mouse por las subcategorías
const hoverIn = (e) => e.target.style.backgroundColor = 'rgba(153, 10, 10, 0.88)'; // Color rojo UC translúcido
const hoverOut = (e) => e.target.style.backgroundColor = 'transparent'; // Sin fondo al salir del hover

export default Header;