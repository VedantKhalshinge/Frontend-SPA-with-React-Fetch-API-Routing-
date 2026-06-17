import { useNavigate } from 'react-router-dom';
import ResourceForm from '../components/ResourceForm';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import { useToast } from '../components/Toast';

export default function AddResource() {
  const navigate = useNavigate();
  const { request, loading, error } = useFetch();
  const { addToast } = useToast();

  const handleSubmit = async (formData) => {
    const payload = {
      ...formData,
      createdAt: new Date().toISOString()
    };
    const { error: submitError } = await request(() => api.post('/resources', payload));
    if (!submitError) {
      addToast('Resource created successfully!', 'success');
      navigate('/resources');
    }
  };

  return (
    <div className="page-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 className="page-title">Add New Resource</h1>
      <p className="page-subtitle">Fill in the details to create a new resource.</p>
      
      <ResourceForm 
        onSubmit={handleSubmit} 
        loading={loading} 
        error={error} 
      />
    </div>
  );
}
