import { useState } from 'react';

function Login({ alIniciarSesion }) {
  // Estado para alternar entre 'login' y 'crear_cuenta' en el panel administrativo
  const [modoAdmin, setModoAdmin] = useState('login'); 
  
  // Estados para los formularios
  const [cedulaAsistencia, setCedulaAsistencia] = useState('');
  const [credenciales, setCredenciales] = useState({ usuario: '', contraseña: '' });
  const [mensaje, setMensaje] = useState({ texto: '', tipo: '' }); // tipo: 'exito' o 'error'

  const manejarCambioAdmin = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  // 1. Función para que el empleado común marque asistencia
  const registrarAsistencia = (e) => {
    e.preventDefault();
    if (cedulaAsistencia.trim() === '') {
      setMensaje({ texto: 'Por favor, ingrese su cédula.', tipo: 'error' });
      return;
    }
    
    // Aquí iría la conexión al backend para registrar la hora
    alert(`Asistencia registrada exitosamente para la cédula: ${cedulaAsistencia}`);
    setCedulaAsistencia(''); // Limpiamos el campo
    setMensaje({ texto: 'Asistencia marcada correctamente.', tipo: 'exito' });
  };

  // 2. Función para el panel Administrativo (Login o Registro)
  const manejarAccesoAdmin = (e) => {
    e.preventDefault();
    
    if (modoAdmin === 'crear_cuenta') {
      // Simulación de creación de usuario
      alert(`Usuario "${credenciales.usuario}" creado con éxito. Ahora puedes iniciar sesión.`);
      setModoAdmin('login'); // Lo devolvemos a la pantalla de login
      setCredenciales({ usuario: '', contraseña: '' }); // Limpiamos
      setMensaje({ texto: 'Cuenta creada. Por favor, inicie sesión.', tipo: 'exito' });
    } else {
      // Simulación de Login (Aquí validarías con tu base de datos)
      // Para este ejemplo, aceptaremos cualquier usuario que tenga más de 3 letras
      if (credenciales.usuario.length > 3 && credenciales.contraseña !== '') {
        alIniciarSesion(); // Le da acceso al sistema completo
      } else {
        setMensaje({ texto: 'Credenciales inválidas.', tipo: 'error' });
      }
    }
  };

  const estilosInput = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#e2e8f0', padding: '20px' }}>
      
      {/* Contenedor Principal (Caja blanca dividida en 2) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow: 'hidden', maxWidth: '900px', width: '100%' }}>
        
        {/* ================= PANEL IZQUIERDO: MARCAR ASISTENCIA ================= */}
        <div style={{ flex: '1 1 300px', padding: '40px', backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            {/* Aquí puedes colocar el logo pequeño de FaCES si lo deseas */}
            <h2 style={{ color: '#000661', margin: 0 }}>Registro Diario</h2>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Módulo de marcaje para el personal</p>
          </div>

          <form onSubmit={registrarAsistencia}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Cédula de Identidad</label>
            <input 
              type="text" 
              placeholder="V-12345678" 
              value={cedulaAsistencia}
              onChange={(e) => setCedulaAsistencia(e.target.value)}
              style={estilosInput} 
            />
            
            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#af1010', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
              Marcar Asistencia
            </button>
          </form>
        </div>

        {/* ================= PANEL DERECHO: ACCESO ADMINISTRATIVO ================= */}
        <div style={{ flex: '1 1 300px', padding: '40px' }}>
          <h2 style={{ color: '#000661', marginBottom: '5px' }}>
            {modoAdmin === 'login' ? 'Acceso al Sistema' : 'Crear Usuario Admin'}
          </h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
            Solo personal autorizado
          </p>

          {/* Mostrar mensajes de error o éxito */}
          {mensaje.texto && (
            <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '4px', backgroundColor: mensaje.tipo === 'error' ? '#fed7d7' : '#c6f6d5', color: mensaje.tipo === 'error' ? '#9b2c2c' : '#22543d', fontSize: '14px', textAlign: 'center' }}>
              {mensaje.texto}
            </div>
          )}

          <form onSubmit={manejarAccesoAdmin}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Usuario</label>
            <input 
              type="text" 
              name="usuario" 
              value={credenciales.usuario} 
              onChange={manejarCambioAdmin} 
              style={estilosInput} 
              required
            />

            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Contraseña</label>
            <input 
              type="password" 
              name="contraseña" 
              value={credenciales.contraseña} 
              onChange={manejarCambioAdmin} 
              style={estilosInput} 
              required
            />

            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#000661', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginBottom: '15px' }}>
              {modoAdmin === 'login' ? 'Ingresar al Sistema' : 'Registrar Nuevo Usuario'}
            </button>
          </form>

          {/* Botón para alternar entre Login y Registro */}
          <div style={{ textAlign: 'center' }}>
            <button 
              type="button" 
              onClick={() => {
                setModoAdmin(modoAdmin === 'login' ? 'crear_cuenta' : 'login');
                setMensaje({ texto: '', tipo: '' }); // Limpiar mensajes al cambiar de modo
              }}
              style={{ background: 'none', border: 'none', color: '#3182ce', cursor: 'pointer', textDecoration: 'underline', fontSize: '14px' }}
            >
              {modoAdmin === 'login' ? '¿No tienes cuenta? Crear una' : 'Ya tengo cuenta, iniciar sesión'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;