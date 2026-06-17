

export default function About() {
  return (
    <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title">About This Project</h1>
      <p className="page-subtitle">A minimal React SPA showcasing modern architecture.</p>
      
      <div className="card" style={{ marginTop: '2rem', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1rem' }}>
          This application was built to demonstrate clean, portfolio-quality React code. 
          It strictly adheres to functional programming paradigms utilizing React Hooks 
          and avoids bloated third-party styling libraries.
        </p>
        <p>
          The UI is handcrafted using plain CSS, emphasizing typography, white space, and 
          a minimal light theme to provide a professional, student-engineered aesthetic.
        </p>
      </div>
    </div>
  );
}
