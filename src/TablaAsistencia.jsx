import React, { useState, useEffect } from 'react';

function TablaAsistencia() {
  // 1. ESTADO: Iniciamos con una lista vacía para guardar los datos de la base de datos
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true);

  // 2. EFECTO: Se ejecuta automáticamente al cargar la pantalla para traer los datos reales
  useEffect(() => {
    // REEMPLAZA ESTA URL por la ruta real de tu API (ejemplo: 'http://localhost:5000/api/asistencia')
    fetch('TU_URL_DE_API_O_BACKEND') 
      .then((response) => response.json())
      .then((data) => {
        setEmpleados(data); // Guardamos la lista de la BD en el estado
        setCargando(false);  // Apagamos la pantalla de carga
      })
      .catch((error) => {
        console.error("Error extrayendo datos de la base de datos:", error);
        setCargando(false);
      });
  }, []);

  const exportarReporte = (tipo) => {
    alert(`Generando y descargando reporte en formato [${tipo.toUpperCase()}]...\n(Aquí integraremos las librerías jsPDF o SheetJS más adelante)`);
  };

  // Mensaje temporal en pantalla mientras los datos bajan de la base de datos
  if (cargando) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#1a202c', fontWeight: 'bold' }}>
        Conectando con la base de datos...
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(173, 22, 67, 0.64)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '2px solid #edf2f7', paddingBottom: '10px' }}>
        <h3 style={{ margin: 0, color: '#1a202c' }}>Panel de Asistencia Diario</h3>
        
        {/* Botones de Reportes */}
        <div>
          <button onClick={() => exportarReporte('excel')} style={{ backgroundColor: '#07ac54', color: 'black', border: 'none', padding: '8px 12px', borderRadius: '4px', marginRight: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
             Exportar a Excel
          </button>
          <button onClick={() => exportarReporte('pdf')} style={{ backgroundColor: '#040122', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
             Exportar a PDF
          </button>
        </div>
      </div>

      {/* TABLA REDISEÑADA A EXACTAMENTE 3 COLUMNAS */}
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#156fe496', borderBottom: '0px solid #000000fb' }}>
            <th style={{ padding: '10px' }}>Cédula</th>
            <th style={{ padding: '10px' }}>Nombres y Apellidos</th>
            <th style={{ padding: '10px' }}>Estatus</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #edf2f7' }}>
              {/* Columna 1: Cédula */}
              <td style={{ padding: '12px', fontSize: '14px', fontWeight: 'bold' }}>
                {emp.cedula}
              </td>
              
              {/* Columna 2: Nombres y Apellidos */}
              <td style={{ padding: '12px', fontSize: '14px' }}>
                {/* NOTA: Si en tu base de datos los nombres y apellidos vienen en columnas separadas, 
                    puedes unirlos aquí usando: {`${emp.nombres} ${emp.apellidos}`} */}
                {emp.nombre} 
              </td>
              
              {/* Columna 3: Estatus */}
              <td style={{ padding: '12px' }}>
                <span style={{ 
                  backgroundColor: emp.estatus === 'A tiempo' ? '#c6f6d5' : '#fed7d7', 
                  color: emp.estatus === 'A tiempo' ? '#22543d' : '#9b2c2c', 
                  padding: '4px 8px', 
                  borderRadius: '12px', 
                  fontSize: '12px', 
                  fontWeight: 'bold' 
                }}>
                  {emp.estatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaAsistencia;