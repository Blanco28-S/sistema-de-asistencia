import FormularioRegistro from './FormularioRegistro';
import TablaAsistencia from './TablaAsistencia';
import Header from './components/Header';
//import VistaAsistencia from './VistaAsistencia';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      padding: '5px 0px', 
      backgroundColor: '#ffffff', 
      minHeight: '150vh',
      color: '#000000'
    }}>
      {/*nuevo encabezado modular */}
      <Header />

      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Sección del Formulario */}
        <FormularioRegistro />

        {/* Sección de la Tabla y los Reportes descargables */}
        <TablaAsistencia />
      </main>

      {/*nuevo pie de página modular */}
      <Footer />  
    </div>
  );
}

export default App;