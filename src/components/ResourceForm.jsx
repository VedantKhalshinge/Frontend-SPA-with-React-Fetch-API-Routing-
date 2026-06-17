import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResourceForm({ initialData, onSubmit, loading, error }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });

  useEffect(() => {
    if (initialData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        category: initialData.category || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      {error && <div className="form-error" style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#FEF2F2', border: '1px solid #F87171', borderRadius: '4px' }}>{error}</div>}
      
      <div className="form-group">
        <label className="form-label" htmlFor="title">Title *</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="form-input"
          value={formData.title}
          onChange={handleChange}
          placeholder="E.g., Learn React Hooks"
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          className="form-input"
          value={formData.category}
          onChange={handleChange}
          placeholder="E.g., Frontend"
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          required
          rows="5"
          className="form-textarea"
          value={formData.description}
          onChange={handleChange}
          placeholder="Provide a detailed description..."
          disabled={loading}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)} disabled={loading}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Save Resource'}
        </button>
      </div>
    </form>
  );
}
