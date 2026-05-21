function AuroraBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '-8rem',
          top: 0,
          height: '480px',
          width: '480px',
          borderRadius: '9999px',
          background: 'rgba(6,182,212,0.18)',
          filter: 'blur(80px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: '480px',
          width: '480px',
          borderRadius: '9999px',
          background: 'rgba(139,92,246,0.18)',
          filter: 'blur(80px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '33%',
          top: '33%',
          height: '300px',
          width: '300px',
          borderRadius: '9999px',
          background: 'rgba(236,72,153,0.10)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}

export default AuroraBackground
