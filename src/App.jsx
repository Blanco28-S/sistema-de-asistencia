import { useState } from 'react';
import FormularioRegistro from './FormularioRegistro';
import TablaAsistencia from './TablaAsistencia';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  // 3. Creamos el estado para saber si el administrador ya ingresó (inicia en false)
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  // ¡AQUÍ ESTABA EL ERROR! Faltaba declarar el estado de la sección activa.
  // Inicia en 'inicio' para que muestre el mensaje de bienvenida.
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  // 4. CONDICIÓN: Si NO está autenticado, muestra la pantalla dividida (Asistencia / Login Admin)
  if (!estaAutenticado) {
    return <Login alIniciarSesion={() => setEstaAutenticado(true)} />;
  }

  // 5. Si la condición anterior no se cumple (es decir, ya estás autenticado), se muestra el sistema completo:
  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      padding: '10px 10px', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      color: '#000000'
    }}>

      {/* Botón para poder cerrar sesión y volver a la pantalla de marcaje */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'right', padding: '10px 0' }}>
        <button 
          onClick={() => setEstaAutenticado(false)} 
          style={{ 
            backgroundColor: '#af1010', 
            color: 'white', 
            border: 'none', 
            padding: '6px 14px', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Cerrar Sesión Panel Admin
        </button>
      </div>

      {/* Le pasamos la función setSeccionActiva al Header para que los botones funcionen */}
      <Header cambiarSeccion={setSeccionActiva} />
    
      {/* main encapsula el renderizado de las vistas */}
      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* RENDERIZADO CONDICIONAL: Solo se muestra el bloque que coincida con la seccionActiva */}
        
        {seccionActiva === 'inicio' && (
          <div style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
            <h2>Bienvenido al Panel de Administración de FaCES</h2>
            <p>Seleccione una opción en el menú superior para comenzar a trabajar.</p>
          </div>
        )}

        {/* Sección del Formulario */}
        {seccionActiva === 'registro' && (
          <section id="formulario">
            <FormularioRegistro />
          </section>
        )}

        {/* Sección de la Tabla y los Reportes descargables */}
        {seccionActiva === 'asistencia' && (
          <section id="asistencia">
            <TablaAsistencia />
          </section>
        )}

      </main>

      {/* nuevo pie de página modular */}
      <Footer />  
    </div>
  );
}

export default App;