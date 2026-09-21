import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx"
import Product from "./components/Product.jsx"
import TaskManager from "./components/Task.jsx"
import { useAppStore } from "./store/useAppStore.jsx"
function App() {
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === 'dark';

  useEffect(() => {
    localStorage.removeItem('ui-storage');
  }, []);
  return (
    <>
    <div style={{
      minHeight: '100vh',
      backgroundColor: isDark ? '#0f172a' : '#ffffff',
      color: isDark ? '#f8fafc' : '#0f172a',
      transition: 'all 0.2s ease-in-out'
    }}>
      <Navbar />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Product/>
        <TaskManager />
      </div>
    </div>
    
    </>
  )
}

export default App
