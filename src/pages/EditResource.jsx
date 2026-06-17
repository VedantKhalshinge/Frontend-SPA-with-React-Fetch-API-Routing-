import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ResourceForm from '../components/ResourceForm';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import { useToast } from '../components/Toast';
import Loader from '../components/Loader';

export default function EditResource() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const { request: fetchReq, loading: fetchLoading, error: fetchError } = useFetch();
  const { request: updateReq, loading: updateLoading, error: updateError } = useFetch();
  
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await fetchReq(() => api.get(`/resources/${id}`));
      if (data) setInitialData(data);
    };
    loadData();
  }, [id]); // eslint-disable-line

  const handleSubmit = async (formData) => {
    const { error } = await updateReq(() => api.put(`/resources/${id}`, {
      ...initialData,
      ...formData
    }));
    if (!error) {
      addToast('Resource updated successfully.', 'success');
      navigate(`/resources/${id}`);
    }
  };

  if (fetchLoading && !initialData) return <Loader fullPage />;
  if (fetchError && !initialData) return (
    <div className="page-content" style={{ textAlign: 'center' }}>
      <p className="form-error">{fetchError}</p>
      <button className="btn btn-secondary mt-4" onClick={() => navigate('/resources')}>Back to Resources</button>
    </div>
  );

  return (
    <div className="page-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 className="page-title">Edit Resource</h1>
      <p className="page-subtitle">Update the details of your resource.</p>
      
      <ResourceForm 
        initialData={initialData}
        onSubmit={handleSubmit} 
        loading={updateLoading} 
        error={updateError} 
      />
    </div>
  );
}
