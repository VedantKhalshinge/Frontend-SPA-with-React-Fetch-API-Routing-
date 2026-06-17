import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '6rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.05em' }}>
        Manage Resources, <span style={{ color: 'var(--color-primary)' }}>Minimally</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', lineHeight: 1.6 }}>
        A React Single Page Application demonstrating clean architecture, 
        modern hooks, custom UI feedback, and completely handcrafted design without the clutter.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/resources" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.75rem 1.5rem' }}>
          View Resources
        </Link>
        <Link to="/resources/new" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '0.75rem 1.5rem' }}>
          Add New Resource
        </Link>
      </div>

      <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left' }}>
        <div className="card" style={{ border: 'none', backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Clean Code</h3>
          <p className="text-muted">Built with functional components, custom hooks, and a strictly modular structure.</p>
        </div>
        <div className="card" style={{ border: 'none', backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Fetch API</h3>
          <p className="text-muted">Seamless integration with a REST backend handling all loading and error states gracefully.</p>
        </div>
        <div className="card" style={{ border: 'none', backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Authentic UI</h3>
          <p className="text-muted">Handcrafted minimal aesthetics that prioritize whitespace and typography over heavy styling.</p>
        </div>
      </div>
    </div>
  );
}
