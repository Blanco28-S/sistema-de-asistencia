function TarjetaDePerfil() {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 6px rgba(197, 27, 27, 0.92)',
      maxWidth: '300px',
      marginTop: '20px'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Juan Pérez</h3>
      <p style={{ color: '#666', fontSize: '14px' }}>Desarrollador Web en formación.</p>
      <button style={{ 
        backgroundColor: '#0606e7e3', 
        color: 'white', 
        border: 'white', 
        padding: '8px 12px', 
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Seguir
      </button>
    </div>
  )
}

export default TarjetaDePerfil;