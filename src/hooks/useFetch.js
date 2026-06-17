import { useState, useCallback } from 'react';

export function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (apiCall) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiCall();
      setLoading(false);
      return { data, error: null };
    } catch (err) {
      setLoading(false);
      let message = 'An unexpected error occurred.';
      if (!navigator.onLine) {
        message = 'You are currently offline. Please check your network connection.';
      } else if (err.status >= 500) {
        message = 'Server is currently unavailable. Please try again later.';
      } else if (err.message) {
        message = err.message;
      }
      setError(message);
      return { data: null, error: message };
    }
  }, []);

  return { loading, error, request, setError };
}
