import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      maxWidth: '1000px', 
      margin: '40px auto 0 auto', 
      padding: '30px 20px 20px 20px', 
      borderTop: '1px solid #e2e8f0', 
      color: '#4a5568', 
      fontSize: '12px' 
    }}>
      {/* Contenedor de las Secciones de Contacto */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        
      
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#000000', fontSize: '12px' }}>Contacto Técnico</h4>
          <p style={{ margin: '5px 0' }}> Extensión: +58 424 447 9048</p>
          <p style={{ margin: '5px 0' }}> Correo: <a href="mailto:dticucfaces3@gmail.com" style={{ color: '#3182ce', textDecoration: 'none' }}>dticucfaces3@gmail.com</a></p>
        </div>

      </div>

      <div style={{ 
        textAlign: 'center', 
        borderTop: '1px solid #edf2f7', 
        paddingTop: '0px', 
        color: '#000000',
        fontSize: '12px'
      }}>
        <p style={{ margin: 0 }}>
        </p>
          &copy; {new Date().getFullYear()} - Todos los Derechos Reservados. Dirección de Tecnología, Información y Comunicación. Universidad de Carabobo.
      </div>
    </footer>
  );
}

export default Footer;