import React, { useState } from 'react';

function VistaAsistenciaModerna({ seccion, subSeccion }) {
  // Filtros de búsqueda
  const [empleado, setEmpleado] = useState('');
  const [rangoTiempo, setRangoTiempo] = useState('dia'); // dia, semana, mes, anio, personalizado
  const [fechaEspecifica, setFechaEspecifica] = useState('');
  const [fechaFinPersonalizada, setFechaFinPersonalizada] = useState('');

  // Simulación de Base de Datos relacional
  const registrosFicticios = [
    { id: '101', nombre: 'Ana Pérez', tipo: 'tiempo', subtipo: '', fecha: '2026-05-17', hora: '07:45 AM' },
    { id: '102', nombre: 'Carlos Mendoza', tipo: 'tarde', subtipo: 'Supervisado', fecha: '2026-05-17', hora: '08:15 AM' },
    { id: '103', nombre: 'Luis Flores', tipo: 'inasistencia', subtipo: 'No Supervisada', fecha: '2026-05-17', hora: '—' },
    { id: '104', nombre: 'Ana Pérez', tipo: 'tarde', subtipo: 'No Supervisado', fecha: '2026-05-10', hora: '08:40 AM' },
  ];

  // Lógica de filtrado de datos
  const datosFiltrados = registrosFicticios.filter(reg => {
    const coincideEmpleado = reg.nombre.toLowerCase().includes(empleado.toLowerCase());
    
    if (seccion === 'panel') {
      return coincideEmpleado; // El panel general muestra todo el historial de ese empleado
    } else {
      // Filtra estrictamente por la categoría del botón (tiempo, tarde, inasistencia)
      const coincideSeccion = reg.tipo === seccion;
      const coincideSubseccion = subSeccion === '' || reg.subtipo === subSeccion;
      return coincideEmpleado && coincideSeccion && coincideSubseccion;
    }
  });

  return (
    <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', padding: '25px' }}>
      
      {/* Título Dinámico e Indicador */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #edf2f7', paddingBottom: '15px' }}>
        <div>
          <h3 style={{ margin: 0, color: '#2b6cb0', fontSize: '20px', textTransform: 'capitalize' }}>
            {seccion === 'panel' ? '📊 Panel General de Asistencia' : `📋 Reporte: Llegadas ${seccion === 'tiempo' ? 'a Tiempo' : 'Tarde'}`}
          </h3>
          {subSeccion && <span style={{ fontSize: '13px', backgroundColor: '#edf2f7', padding: '3px 8px', borderRadius: '12px', color: '#4a5568', fontWeight: '500' }}>Condición: {subSeccion}</span>}
        </div>

        <div>
          <button onClick={() => alert('Excel Generado')} style={{ padding: '8px 12px', backgroundColor: '#38a169', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', marginRight: '10px', cursor: 'pointer', fontSize: '13px' }}>📊 Excel</button>
          <button onClick={() => alert('PDF Generado')} style={{ padding: '8px 12px', backgroundColor: '#e53e3e', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer', fontSize: '13px' }}>📕 PDF</button>
        </div>
      </div>

      {/* --- PANEL DE FILTROS AVANZADOS --- */}
      <div style={{ backgroundColor: '#f7fafc', padding: '15px', borderRadius: '6px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <div style={{ flex: '2', minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '13px', color: '#4a5568' }}>Buscar Personal:</label>
            <input type="text" placeholder="Nombre del empleado..." value={empleado} onChange={(e) => setEmpleado(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e0' }} />
          </div>

          {/* Filtros específicos solicitados para el Panel */}
          {seccion === 'panel' && (
            <div style={{ flex: '1', minWidth: '180px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '13px', color: '#4a5568' }}>Período de Tiempo:</label>
              <select value={rangoTiempo} onChange={(e) => setRangoTiempo(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e0', backgroundColor: '#fff' }}>
                <option value="dia">Ver el Día de hoy</option>
                <option value="semana">Ver esta Semana</option>
                <option value="mes">Ver este Mes</option>
                <option value="anio">Ver todo el Año</option>
                <option value="personalizado">📅 Rango Personalizado</option>
              </select>
            </div>
          )}
        </div>

        {/* Inputs condicionales para las fechas según la selección de tiempo */}
        {seccion === 'panel' && (rangoTiempo === 'dia' || rangoTiempo === 'personalizado') && (
          <div style={{ display: 'flex', gap: '15px', animation: 'fadeIn 0.3s' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '12px', color: '#718096' }}>
                {rangoTiempo === 'personalizado' ? 'Fecha Desde:' : 'Seleccione el Día:'}
              </label>
              <input type="date" value={fechaEspecifica} onChange={(e) => setFechaEspecifica(e.target.value)} style={{ padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e0' }} />
            </div>
            {rangoTiempo === 'personalizado' && (
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '12px', color: '#718096' }}>Fecha Hasta:</label>
                <input type="date" value={fechaFinPersonalizada} onChange={(e) => setFechaFinPersonalizada(e.target.value)} style={{ padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e0' }} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* --- TABLA COMPACTA DE DATOS --- */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 12px', backgroundColor: '#edf2f7', color: '#4a5568', textAlign: 'left', fontSize: '13px', borderBottom: '2px solid #cbd5e0' }}>ID</th>
              <th style={{ padding: '8px 12px', backgroundColor: '#edf2f7', color: '#4a5568', textAlign: 'left', fontSize: '13px', borderBottom: '2px solid #cbd5e0' }}>Empleado</th>
              <th style={{ padding: '8px 12px', backgroundColor: '#edf2f7', color: '#4a5568', textAlign: 'left', fontSize: '13px', borderBottom: '2px solid #cbd5e0' }}>Categoría</th>
              <th style={{ padding: '8px 12px', backgroundColor: '#edf2f7', color: '#4a5568', textAlign: 'left', fontSize: '13px', borderBottom: '2px solid #cbd5e0' }}>Fecha</th>
              <th style={{ padding: '8px 12px', backgroundColor: '#edf2f7', color: '#4a5568', textAlign: 'left', fontSize: '13px', borderBottom: '2px solid #cbd5e0' }}>Marcaje</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.length > 0 ? (
              datosFiltrados.map((reg, index) => (
                <tr key={reg.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f7fafc' }}>
                  <td style={{ padding: '8px 12px', fontSize: '13px', color: '#718096', borderBottom: '1px solid #e2e8f0' }}>{reg.id}</td>
                  <td style={{ padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#2d3748', borderBottom: '1px solid #e2e8f0' }}>{reg.nombre}</td>
                  <td style={{ padding: '8px 12px', fontSize: '13px', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{ padding: '2px 6px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', 
                      backgroundColor: reg.tipo === 'tiempo' ? '#c6f6d5' : reg.tipo === 'tarde' ? '#feebc8' : '#fed7d7',
                      color: reg.tipo === 'tiempo' ? '#22543d' : reg.tipo === 'tarde' ? '#c05621' : '#9b2c2c'
                    }}>
                      {reg.tipo} {reg.subtipo ? `(${reg.subtipo})` : ''}
                    </span>
                  </td>
                  <td style={{ padding: '8px 12px', fontSize: '13px', color: '#4a5568', borderBottom: '1px solid #e2e8f0' }}>{reg.fecha}</td>
                  <td style={{ padding: '8px 12px', fontSize: '13px', color: '#4a5568', borderBottom: '1px solid #e2e8f0', fontWeight: 'bold' }}>{reg.hora}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ padding: '25px', textAlign: 'center', color: '#a0aec0', fontSize: '13.5px' }}>
                  🔍 No se encontraron marcajes para los criterios seleccionados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default VistaAsistenciaModerna;