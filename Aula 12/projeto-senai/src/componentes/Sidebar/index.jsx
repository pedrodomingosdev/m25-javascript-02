import { useState } from 'react';
import './styles.css';

const items = [
    {
        title: "Dashboard",
        content: [{ title: "Home", route: "/" }],
    },
    {
        title: "Configurações",
        content: [{ title: "Perfil", route: "/perfil" }],
    },
    {
        title: "Utilitarios",
        content: [{ title: "Relatórios", route: "/relatorios" }],
    },
]

export default function Sidebar({isOpen, closeSidebar}){
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggleItem = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    }
    return (
        <aside className={`sidebar ${isOpen ? "sidebar-open":""}`}>
            <nav className='sidebar-nav'>
                {
                    items.map((item, index) => (
                        <div className='accordion-item' key={item.title}>
                            <button className='accordion-header' onClick={() => handleToggleItem(index)}> 
                                <span>{item.title}</span>
                                <span>{openIndex === index ? "-": "+"}</span>
                            </button>
                            {
                                openIndex === index && (
                                    <ul className='accordion-content'>
                                        {
                                            item.content.map((subItem)=>(
                                                <li key={subItem.title}>
                                                    {subItem.title} - {subItem.route}
                                                    <span onClick={closeSidebar}>Fechar</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    ))
                }
            </nav>
        </aside>
    )
} 