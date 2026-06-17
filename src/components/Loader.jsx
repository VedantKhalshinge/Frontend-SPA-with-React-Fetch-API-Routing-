

export default function Loader({ fullPage = false }) {
  const spinnerStyle = {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    border: '3px solid #E5E7EB',
    borderTopColor: '#2563EB',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const containerStyle = fullPage
    ? { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column', gap: '1rem' }
    : { display: 'flex', justifyContent: 'center', padding: '2rem', flexDirection: 'column', alignItems: 'center', gap: '1rem' };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyle} />
      <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Loading resources...</span>
    </div>
  );
}
