import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import { useModal } from '../components/Modal';
import { useToast } from '../components/Toast';
import Loader from '../components/Loader';

export default function ResourceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { confirm } = useModal();
  const { addToast } = useToast();
  
  const { request: fetchReq, loading: fetchLoading, error: fetchError } = useFetch();
  const { request: delReq } = useFetch();
  
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const loadResource = async () => {
      const { data } = await fetchReq(() => api.get(`/resources/${id}`));
      if (data) setResource(data);
    };
    loadResource();
  }, [id]); // eslint-disable-line

  const handleDelete = () => {
    confirm(
      'Delete Resource',
      `Are you sure you want to delete "${resource.title}"?`,
      async () => {
        const { error } = await delReq(() => api.delete(`/resources/${id}`));
        if (!error) {
          addToast('Resource deleted.', 'success');
          navigate('/resources');
        } else {
          addToast('Failed to delete resource.', 'error');
        }
      }
    );
  };

  if (fetchLoading && !resource) return <Loader fullPage />;
  if (fetchError || !resource) return (
    <div className="page-content" style={{ textAlign: 'center' }}>
      <h1 className="page-title">Resource Not Found</h1>
      <p className="text-muted mb-4">{fetchError || "We couldn't find the resource you're looking for."}</p>
      <Link to="/resources" className="btn btn-primary">Back to Resources</Link>
    </div>
  );

  return (
    <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/resources" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          &larr; Back to Resources
        </Link>
      </div>

      <div className="card">
        {resource.category && (
          <span style={{ 
            fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)',
            backgroundColor: 'rgba(37, 99, 235, 0.1)', padding: '4px 12px',
            borderRadius: '16px', textTransform: 'uppercase', marginBottom: '1rem',
            display: 'inline-block'
          }}>
            {resource.category}
          </span>
        )}
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
          {resource.title}
        </h1>
        
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
          Added on {new Date(resource.createdAt).toLocaleDateString()}
        </p>
        
        <div style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '3rem', whiteSpace: 'pre-wrap' }}>
          {resource.description}
        </div>

        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
          <Link to={`/resources/${resource.id}/edit`} className="btn btn-primary">
            Edit Resource
          </Link>
          <button onClick={handleDelete} className="btn btn-secondary" style={{ color: 'var(--color-danger)' }}>
            Delete Resource
          </button>
        </div>
      </div>
    </div>
  );
}
