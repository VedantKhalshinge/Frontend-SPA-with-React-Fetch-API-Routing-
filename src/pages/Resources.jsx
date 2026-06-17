import { useEffect, useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import { useToast } from '../components/Toast';
import ResourceCard from '../components/ResourceCard';
import Loader from '../components/Loader';

export default function Resources() {
  const { request, loading, error } = useFetch();
  const { request: deleteReq } = useFetch();
  const { addToast } = useToast();
  
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const fetchResources = async () => {
    const { data } = await request(() => api.get('/resources'));
    if (data) setResources(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchResources();
  }, []); // eslint-disable-line

  const handleDelete = async (id) => {
    const { error: delError } = await deleteReq(() => api.delete(`/resources/${id}`));
    if (!delError) {
      setResources((prev) => prev.filter((r) => r.id !== id));
      addToast('Resource deleted successfully.', 'success');
    } else {
      addToast('Failed to delete resource.', 'error');
    }
  };

  const filteredAndSortedResources = useMemo(() => {
    let result = resources.filter(r => 
      (r.title && r.title.toLowerCase().includes(search.toLowerCase())) ||
      (r.category && r.category.toLowerCase().includes(search.toLowerCase()))
    );

    result.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [resources, search, sortOrder]);

  if (loading && resources.length === 0) return <Loader fullPage />;
  if (error && resources.length === 0) return (
    <div className="page-content" style={{ textAlign: 'center' }}>
      <p className="form-error" style={{ fontSize: '1rem', marginBottom: '1rem' }}>{error}</p>
      <button className="btn btn-primary" onClick={fetchResources}>Retry</button>
    </div>
  );

  return (
    <div className="page-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle" style={{ margin: 0 }}>Manage your library of resources.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="form-input" 
            style={{ width: '250px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select 
            className="form-select" 
            style={{ width: '150px' }}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {filteredAndSortedResources.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <p className="text-muted" style={{ marginBottom: '1rem' }}>No resources found matching your criteria.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {filteredAndSortedResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
