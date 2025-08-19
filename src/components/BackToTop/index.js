import React, { useState, useEffect } from 'react';
import './style.css';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar botão quando o usuário rolar para baixo
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Função para rolar para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button 
                    onClick={scrollToTop} 
                    className="back-to-top"
                    aria-label="Voltar ao topo"
                >
                    <FaArrowUp />
                </button>
            )}
        </>
    );
};

export default BackToTop;