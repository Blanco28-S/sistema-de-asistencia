import { useState } from 'react';

function FormularioRegistro() {
  const [usuario, setUsuario] = useState({
    Cedula: '',
    RIF: '',
    Primer_Nombre: '',
    Segundo_Nombre: '',
    Primer_Apellido: '',
    Segundo_Apellido: '',
    Numero_de_Puesto: '', 
    Ingreso_al_Cargo: '',
    Descripcion_del_Cargo: 'Administrativo', 
    Departamento: 'Decanato', 
    Horario_Asignado: [], 
    Fecha_de_Nomina: '',
  });

  const [huellaCapturada, setHuellaCapturada] = useState(false);
  const [escaneando, setEscaneando] = useState(false);
  const [tokenHuella, setTokenHuella] = useState('');

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value
    }));
  };

  const manejarCambioDias = (dia, estaMarcado) => {
    setUsuario((prevUsuario) => {
      let nuevosDias = [...(prevUsuario.Horario_Asignado || [])];
      if (estaMarcado) {
        if (nuevosDias.length < 3) nuevosDias.push(dia);
      } else {
        nuevosDias = nuevosDias.filter(d => d !== dia);
      }
      return { ...prevUsuario, Horario_Asignado: nuevosDias };
    });
  };

  const simularEscaneoBioMini = () => {
    setEscaneando(true);
    setHuellaCapturada(false);

    setTimeout(() => {
      setEscaneando(false);
      setHuellaCapturada(true);
      setTokenHuella('SUPREMA_TEMPLATE_V2_7a9f8b2c4d...');
    }, 2500);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!huellaCapturada) {
      alert('Error: Debe registrar la huella digital para completar el registro.');
      return; 
    }
    
    const datosFinalesParaBackend = {
      ...usuario,
      biometria_token: tokenHuella,
      fecha_registro: new Date().toISOString()
    };

    alert(`¡Datos listos!\n\n${JSON.stringify(datosFinalesParaBackend, null, 2)}`); 
  };

  const estilosInput = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '25px' }}>
      
      <h3 style={{ marginTop: 10, color: '#000000', borderBottom: '2px solid #000661', paddingBottom: '5px' }}>
        Registro de Personal 
      </h3>
      
      <form onSubmit={manejarEnvio}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Cédula</label>
            <input type="text" name="Cedula" value={usuario.Cedula} onChange={manejarCambio} placeholder="V-12345678" style={estilosInput} required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>RIF</label>
            <input type="text" name="RIF" value={usuario.RIF} onChange={manejarCambio} placeholder="J-12345678-0" style={estilosInput} required />
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Primer Nombre</label>
            <input type="text" name="Primer_Nombre" value={usuario.Primer_Nombre} onChange={manejarCambio} placeholder="Ej. Ana" style={estilosInput} required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Segundo Nombre</label>
            <input type="text" name="Segundo_Nombre" value={usuario.Segundo_Nombre} onChange={manejarCambio} placeholder="Ej. María" style={estilosInput} />
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Primer Apellido</label>
            <input type="text" name="Primer_Apellido" value={usuario.Primer_Apellido} onChange={manejarCambio} placeholder="Ej. Pérez" style={estilosInput} required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Segundo Apellido</label>
            <input type="text" name="Segundo_Apellido" value={usuario.Segundo_Apellido} onChange={manejarCambio} placeholder="Ej. García" style={estilosInput} />
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Número de Puesto</label>
            <input type="text" name="Numero_de_Puesto" value={usuario.Numero_de_Puesto} onChange={manejarCambio} placeholder="Ej. 12345" style={estilosInput} required />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Fecha de Ingreso al Cargo</label>
            <input type="date" name="Ingreso_al_Cargo" value={usuario.Ingreso_al_Cargo} onChange={manejarCambio} style={estilosInput} required />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Tipo de Cargo / Puesto</label>
              <select name="Descripcion_del_Cargo" value={usuario.Descripcion_del_Cargo} onChange={manejarCambio} style={estilosInput}>
                <option value="Administrativo">Administrativo</option>
                <option value="Gerente">Gerente / Supervisor</option> 
                <option value="Operativo">Personal Operativo</option>
              </select>
          </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Departamento</label>
              <select name="Departamento" value={usuario.Departamento} onChange={manejarCambio} style={estilosInput}>
                <option value="Decanato">Decanato</option>
                <option value="RRHH">Recursos Humanos</option>
                <option value="Administracion">Administración</option>
                <option value="Control_Estudio">Control de Estudio</option>
                <option value="Detic">DETIC</option>
              </select>
            </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>
              Horario Asignado (Selecciona 3 días)
            </label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '8px', padding: '5px 0' }}>
              
              {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((dia) => {
                
                const diasSeleccionados = usuario.Horario_Asignado || [];
                const estaMarcado = diasSeleccionados.includes(dia); 
                const limiteAlcanzado = diasSeleccionados.length >= 3; 

                return (
                  <label 
                    key={dia} 
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '6px', 
                      cursor: (!estaMarcado && limiteAlcanzado) ? 'not-allowed' : 'pointer', 
                      fontSize: '16px', padding: '8px 12px',
                      backgroundColor: estaMarcado ? '#000661' : '#e2e8f0', 
                      color: estaMarcado ? 'white' : '#4a5568',
                      borderRadius: '6px', transition: 'all 0.2s ease',
                      opacity: (!estaMarcado && limiteAlcanzado) ? 0.5 : 1,
                      border: estaMarcado ? '1px solid #000661' : '1px solid #cbd5e0'
                    }}
                  >
                    <input
                      type="checkbox"
                      value={dia}
                      checked={estaMarcado}
                      onChange={(e) => manejarCambioDias(dia, e.target.checked)} 
                      disabled={!estaMarcado && limiteAlcanzado} 
                      style={{ cursor: (!estaMarcado && limiteAlcanzado) ? 'not-allowed' : 'pointer', accentColor: '#af1010' }}
                    />
                    {dia}
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Fecha de Ingreso a la Nómina</label>
            <input type="date" name="Fecha_de_Nomina" value={usuario.Fecha_de_Nomina} onChange={manejarCambio} style={estilosInput} required />
          </div>
        </div>

        <div style={{ backgroundColor: '#eee5ea', padding: '10px', borderRadius: '6px', marginBottom: '11px', textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#4a5168' }}> Integración BioMini</h4>
          
          <button 
            type="button" 
            onClick={simularEscaneoBioMini}
            disabled={escaneando} 
            style={{ 
              backgroundColor: escaneando ? '#a0aec0' : '#af1010', color: 'white', border: 'none', 
              padding: '10px 15px', borderRadius: '4px', cursor: escaneando ? 'not-allowed' : 'pointer', fontWeight: 'bold'
            }}
          >
            {escaneando ? ' Coloque el dedo en el lector...' : ' Iniciar Escaneo de Huella'}
          </button>

          <div style={{ marginTop: '15px', fontSize: '14px' }}>
            {escaneando && <p style={{ color: '#dd6b20', fontWeight: 'bold', margin: 0 }}>Leyendo hardware BioMini SFR400... Espere.</p>}
            
            {huellaCapturada && (
              <p style={{ color: '#38a169', fontWeight: 'bold', margin: 0 }}>
                 Huella vinculada con éxito. <br/>
                <span style={{ fontSize: '11px', color: '#718096', fontWeight: 'normal' }}>Hash: {tokenHuella}</span>
              </p>
            )}

            {!huellaCapturada && !escaneando && <p style={{ color: '#e53e3e', margin: 0 }}> Estado: Lector listo, esperando huella digital.</p>}
          </div>
        </div>

        <button 
          type="submit" 
          disabled={!huellaCapturada} 
          style={{ 
            backgroundColor: huellaCapturada ? '#9e4a4a' : ' #c96464', color: huellaCapturada ? 'white' : '#718096', 
            border: 'none', padding: '12px 20px', borderRadius: '4px', cursor: huellaCapturada ? 'pointer' : 'not-allowed', 
            fontWeight: 'bold', width: '100%' 
          }}
        >
          Finalizar Registro y Guardar en Sistema
        </button>
      </form>
    </div>
  );
}

export default FormularioRegistro;