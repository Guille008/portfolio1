

const btnContactar = document.getElementById("btnContactar");

btnContactar.addEventListener("click", function () {
    console.log("Botón Contactar pulsado");
    window.open('https://www.linkedin.com/in/guillermo-gonzalez08/', '_blank', 'noopener,noreferrer');
});

// Funcionalidad para el cambio de idioma
const traduccion = {
    es: {
        titulo: "Desarrollador Front-End",
        proyectos: "Proyectos",
        sobreMi: "Sobre mi",
        contactar: "Contactar",
        descripcion:"Soy desarrollador Front-End de Córdoba, Argentina, orientado a construir interfaces modernas y funcionales con HTML, CSS, JavaScript y React. Vengo de varios años trabajando en gestión, atención al cliente y liderazgo, lo que me permitió desarrollar una base sólida en responsabilidad, organización y comunicación.Hoy aplico esa experiencia al desarrollo web, con un enfoque práctico, limpio y centrado en la experiencia del usuario.Me interesa crear productos claros, bien estructurados y pensados para crecer, cuidando tanto el diseño como el código.",
        habilidades: "Mis habilidades",
        tecnologias: "Tecnologias",
        descripcionTecnologias: "Estas son las tecnologías con las que trabajo actualmente en el desarrollo Front-End. Me enfoco en escribir código claro, escalable y bien estructurado, priorizando la experiencia del usuario, el rendimiento y el diseño responsive. Continúo aprendiendo y profundizando en nuevas herramientas y técnicas para mejorar mis habilidades y ofrecer soluciones cada vez más efectivas.",
        proyec: "Proyectos",
        descAcropolis: "Poyecto desarrollado con HTML y CSS. En este proyecto trabajé la estructura semántica, maquetado responsive y organización del código.",
        descSifit: "Aplicación desarrollada con JavaScript que implementa lógica interactiva y manipulación del DOM.",
        descReact: "Aplicación desarrollada con React utilizando componentes reutilizables y manejo de estado para crear una interfaz dinámica y escalable.",
        comunidad:"Comunidad",
        derechos: "©Todos los derechos reservados 2026"
    },
    en: {
        titulo: "Front-End Developer",
        proyectos: "Projects",
        sobreMi: "About me",
        contactar: "Contact",
        descripcion:"I'm a Front-End Developer based in Córdoba, Argentina, focused on building modern, scalable, and user-centered interfaces using HTML, CSS, JavaScript, and React.Before transitioning into tech, I spent several years working in management, customer service, and team leadership.That experience helped me develop strong skills in responsibility, organization, communication, and problem- solving under pressure.Today, I bring that business mindset into web development, writing clean, maintainable code and creating intuitive user experiences.I’m particularly interested in building clear, well-structured products designed to grow over time, combining thoughtful design with solid technical foundations.I’m currently seeking opportunities to grow as a developer while contributing with both technical expertise and real-world business experience.",
        habilidades: "Skills",
        tecnologias: "Technologies",
        descripcionTecnologias: "These are the technologies I currently use in Front-End development. I focus on writing clean, scalable, and well-structured code, prioritizing user experience, performance, and responsive design. I continuously improve my skills by exploring new tools and best practices to build modern, efficient, and maintainable interfaces.",
        proyec: "Projects",
        descAcropolis: "Project developed with HTML and CSS. In this project I worked on semantic structure, responsive layout and code organization.",
        descSifit: "Application developed with JavaScript that implements interactive logic and DOM manipulation.",
        descReact: "Application developed with React using reusable components and state management to create a dynamic and scalable interface.",
        comunidad:"Community",
        derechos: "©All rights reserved 2026"
    }
};

function setLenguaje(leng) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = traduccion[leng][key];
    });

    localStorage.setItem("leng", leng);
}
const toggle = document.getElementById("idioma");

// Detectar idioma guardado
const savedLang = localStorage.getItem("leng") || "es";
setLenguaje(savedLang);
toggle.checked = savedLang === "en";

// Evento al cambiar switch
toggle.addEventListener("change", () => {
    const newLang = toggle.checked ? "en" : "es";
    setLenguaje(newLang);
});