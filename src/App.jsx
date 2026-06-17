import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import { ToastProvider } from './components/Toast';
import { ModalProvider } from './components/Modal';

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ModalProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main className="container" style={{ flex: 1, width: '100%' }}>
              <AppRoutes />
            </main>
            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              &copy; {new Date().getFullYear()} Vedant Khalshinge. All rights reserved.
            </footer>
          </div>
        </ModalProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
