import { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', onConfirm: null });

  const confirm = useCallback((title, message, onConfirm) => {
    setModal({ isOpen: true, title, message, onConfirm });
  }, []);

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, title: '', message: '', onConfirm: null });
  }, []);

  const handleConfirm = useCallback(() => {
    if (modal.onConfirm) modal.onConfirm();
    closeModal();
  }, [modal, closeModal]);

  return (
    <ModalContext.Provider value={{ confirm }}>
      {children}
      {modal.isOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(17, 24, 39, 0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2000, animation: 'fadeIn 0.2s ease-in-out'
        }}>
          <div className="modal-content" style={{
            backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '8px',
            maxWidth: '400px', width: '100%', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{modal.title}</h3>
            <p style={{ color: '#6B7280', marginBottom: '24px' }}>{modal.message}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button onClick={closeModal} className="btn btn-secondary">Cancel</button>
              <button onClick={handleConfirm} className="btn btn-danger">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
}
