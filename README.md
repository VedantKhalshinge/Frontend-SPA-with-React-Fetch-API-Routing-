# Minimal React SPA

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

A High-Quality React Single Page Application that demonstrates clean architecture, modular functional components, custom hooks, and a fully functional CRUD interface.

## Project Philosophy
Built to feel like an authentic, high-quality project by a Computer Engineering student. 
- **No bloat**: Pure CSS, no heavy UI component libraries.
- **Clean aesthetic**: Minimal light theme, emphasizing typography and layout spacing over gradients and glassmorphism.
- **Functional React**: Strict adherence to React Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`) and functional programming paradigms.

## Features
- **Custom `useFetch` Hook**: Centralized logic for network requests, loading, and error state management.
- **Custom UI Feedback**:
  - `ToastProvider`: Clean, non-intrusive toast notifications for success/error alerts.
  - `ModalProvider`: Custom confirmation modals to replace jarring browser `alert()` and `confirm()` boxes.
- **Advanced Lists**: Built-in client-side Search and Sorting functionality on the Resources page.
- **Full CRUD Integration**: Communicates seamlessly with a REST backend (mocked via `json-server`).

## Folder Architecture
```text
src/
 ├── components/    # Reusable UI (Navbar, ResourceCard, Loader, Toast, Modal)
 ├── pages/         # Route views (Home, Resources, Add/Edit/Details, NotFound)
 ├── services/      # API abstraction layer
 ├── hooks/         # Custom React hooks (useFetch)
 └── styles/        # Global CSS variables and utility classes
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the mock backend API (runs on port 5000):
   ```bash
   npm run server
   ```

3. Start the Vite React Dev Server:
   ```bash
   npm run dev
   ```

## Author & Copyright

**Created by Vedant Khalshinge**

&copy; 2023 Vedant Khalshinge. All rights reserved.

*This project is proprietary and confidential. Unauthorized copying, modification, or distribution is strictly prohibited.*
