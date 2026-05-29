

import { useState } from 'react';
import FormularioRegistro from './FormularioRegistro';
import TablaAsistencia from './TablaAsistencia';
import Header from './components/Header';
//import VistaAsistencia from './VistaAsistencia';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  // 3. Creamos el estado para saber si el administrador ya ingresó (inicia en false)
  const [estaAutenticado, setEstaAutenticado] = useState(false);

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

      {/*nuevo encabezado modular */}
      <Header />
    
    {/* formulario y asistencia se les encapsulo en un id*/}
      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
    
     {/* Sección del Formulario */}
	<section id="formulario" style={{padding: '20px 0'}}>
         <FormularioRegistro />
	</section>

        {/* Sección de la Tabla y los Reportes descargables */}
        <section id="asistencia" style={{padding: '20px 0'}}>
	 <TablaAsistencia />
	</section>

      </main>

      {/*nuevo pie de página modular */}
      <Footer />  
    </div>
  );
}

export default App;
