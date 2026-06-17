import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid var(--color-border)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  };

  const brandStyle = {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: 'var(--color-text-main)',
    textDecoration: 'none',
  };

  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
    fontWeight: isActive ? 600 : 500,
    padding: '0.5rem 1rem',
    transition: 'color 0.2s',
  });

  return (
    <header style={navStyle}>
      <div className="container" style={containerStyle}>
        <Link to="/" style={brandStyle}>
          MinimalSPA
        </Link>
        <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/resources" style={linkStyle} end>Resources</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <Link to="/resources/new" className="btn btn-primary" style={{ marginLeft: '1rem' }}>
            + Add Resource
          </Link>
        </nav>
      </div>
    </header>
  );
}
