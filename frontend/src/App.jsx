import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import UrlForm from "./components/UrlForm";
import StarsBackground from "./components/StarsBackground";

function App() {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarsBackground theme={theme} />
      {/* Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content - Full screen */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <UrlForm theme={theme} />
        </div>
      </main>
    </div>
  );
}

export default App;
