import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Sidebar from './componentes/Sidebar';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false); 
  return (
    <div className='contentor'>
      <BrowserRouter>
       <Header onToggleMenu={() => setIsSidebarOpen(v => !v)}/>
      <div className='fundo'>
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
