function TablaAsistencia() {
  // Datos simulados (Mock Data)
  const empleadosSimulados = [
    { cedula: 'V-15.342.112', rif: 'V-15342112-1', nombre: 'Carlos Mendoza', cargo: 'Gerente', hora: '08:02 AM', estatus: 'A tiempo' },
    { cedula: 'V-20.114.855', rif: 'V-20114855-3', nombre: 'María Rodríguez', cargo: 'Administrativo', hora: '08:15 AM', estatus: 'Retraso' },
    { cedula: 'V-26.778.901', rif: 'V-26778901-0', nombre: 'José Altuve', cargo: 'Técnico', hora: '07:55 AM', estatus: 'A tiempo' }
  ];

  const exportarReporte = (tipo) => {
    alert(`Generando y descargando reporte en formato [${tipo.toUpperCase()}]...\n(Aquí integraremos las librerías jsPDF o SheetJS más adelante)`);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(173, 22, 67, 0.64)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '2px solid #edf2f7', paddingBottom: '10px' }}>
        <h3 style={{ margin: 0, color: '#1a202c' }}>Panel de Asistencia Diario</h3>
        
        {/* Botones de Reportes solicitados */}
        <div>
          <button onClick={() => exportarReporte('excel')} style={{ backgroundColor: '#07ac54', color: 'black', border: 'none', padding: '8px 12px', borderRadius: '4px', marginRight: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
             Exportar a Excel
          </button>
          <button onClick={() => exportarReporte('pdf')} style={{ backgroundColor: '#040122', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
             Exportar a PDF
          </button>
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#156fe496', borderBottom: '0px solid #000000fb' }}>
            <th style={{ padding: '10px' }}>Cédula / RIF</th>
            <th style={{ padding: '10px' }}>Empleado</th>
            <th style={{ padding: '10px' }}>Cargo</th>
            <th style={{ padding: '10px' }}>Estatus</th>
          </tr>
        </thead>
        <tbody>
          {empleadosSimulados.map((emp, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #edf2f7' }}>
              <td style={{ padding: '12px', fontSize: '14px' }}>
                <span style={{ fontWeight: 'bold' }}>{emp.cedula}</span><br/>
                <small style={{ color: '#718096' }}>{emp.rif}</small>
              </td>
              <td style={{ padding: '12px', fontSize: '14px' }}>{emp.nombre}</td>
              <td style={{ padding: '12px', fontSize: '14px' }}>{emp.cargo}</td>
              <td style={{ padding: '12px', fontSize: '14px' }}>{emp.hora}</td>
              <td style={{ padding: '12px' }}>
                <span style={{ backgroundColor: emp.estatus === 'A tiempo' ? '#c6f6d5' : '#d66f2a', color: emp.estatus === 'A tiempo' ? '#22543d' : '#742a2a', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
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