import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function Navbar() {
  // Select only the exact values needed to avoid unneeded re-renders
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  const isDark = theme === 'dark';

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: isDark ? '#1e293b' : '#f8fafc',
      color: isDark ? '#f8fafc' : '#1e293b',
      borderBottom: '1px solid #cbd5e1'
    }}>
      <h2>⚡ OmniTask & Product Hub</h2>
      <button 
        onClick={toggleTheme}
        style={{
          padding: '8px 16px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: isDark ? '#38bdf8' : '#0f172a',
          color: isDark ? '#0f172a' : '#f8fafc',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}