import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import katex from 'katex';

function MathAccordion(props) {

    const handleAccordionChange = (event, isExpanded) => {
        if (isExpanded) { 
            const mathElements = document.querySelectorAll(".math-content");

            mathElements.forEach(element => {
                // Очищаем содержимое элемента
                element.textContent = '';
                
                // Рендерим с использованием содержимого атрибута data-original-content
                try {
                    katex.render(element.getAttribute('data-original-content'), element);
                } catch (err) {
                    console.error(`Ошибка рендеринга KaTeX: ${err}`);
                }
            });
        }
    };

    // Добавляем атрибут data-original-content при монтировании компонента
    React.useEffect(() => {
        const mathElements = document.querySelectorAll(".math-content");
        mathElements.forEach(element => {
            let mathText = element.textContent || element.innerText;
            element.setAttribute('data-original-content', mathText.trim().slice(1, -1));  // Сохраняем математический текст в атрибуте data
            element.textContent = '';  // Очищаем содержимое элемента
        });
    }, []);

    return (
        <Accordion onChange={handleAccordionChange}>
            {props.children}
        </Accordion>
    );
}

export default MathAccordion;


