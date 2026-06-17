import { Link } from 'react-router-dom';
import { useModal } from './Modal';

export default function ResourceCard({ resource, onDelete }) {
  const { confirm } = useModal();

  const handleDelete = () => {
    confirm(
      'Delete Resource',
      `Are you sure you want to delete "${resource.title}"? This action cannot be undone.`,
      () => onDelete(resource.id)
    );
  };

  // eslint-disable-next-line react-hooks/purity
  const formattedDate = new Date(resource.createdAt || Date.now()).toLocaleDateString();

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1 }}>
        {resource.category && (
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            color: 'var(--color-primary)',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            padding: '2px 8px',
            borderRadius: '12px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            display: 'inline-block'
          }}>
            {resource.category}
          </span>
        )}
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>{resource.title}</h3>
        <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {resource.description}
        </p>
      </div>
      
      <div style={{ marginTop: 'auto' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
          Added on {formattedDate}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to={`/resources/${resource.id}`} className="btn btn-primary" style={{ flex: 1 }}>View</Link>
          <Link to={`/resources/${resource.id}/edit`} className="btn btn-secondary">Edit</Link>
          <button onClick={handleDelete} className="btn btn-secondary" style={{ color: 'var(--color-danger)' }}>Delete</button>
        </div>
      </div>
    </div>
  );
}
