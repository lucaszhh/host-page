const topProyects = [
    {
        id: 1,
        name: "Portfolio",
        description: "HELLOW! I'M DONATO ROBLEDO a young programmer who inspires to be Frontend and Full Stack",
        img: "../images/conectar-lab.png",
        developer: "Donato Robledo",
        urlGitHub: "https://github.com/MiniDonny/My-Portfolio",
        urlWeb: "https://minidonny.github.io/My-Portfolio/#"
    },
    {
        id: 2,
        name: "EPIC GAMES",
        description: "Copia del sitio EPIC GAMES todos los derechos reservados epicgames.com kkkk",
        img: "../images/conectar-lab.png",
        developer: "Tadeo",
        urlGitHub: "https://github.com/TadeoLuffi/header",
        urlWeb: "https://tadeoluffi.github.io/header/"
    },
    {
        id: 3,
        name: "Cartas de Messi",
        description: "Las mejores cartas de Messi",
        img: "../images/conectar-lab.png",
        developer: "Tadeo",
        urlGitHub: "https://github.com/TadeoLuffi/Carta-Messi",
        urlWeb: "https://tadeoluffi.github.io/Carta-Messi/"
    },
]

const proyects = [
    {
        id: 4,
        name: "Deportes Argentino",
        description: "Generador de cartas de deportes argentinos",
        img: "../images/casa-del-futuro.png",
        developer: "Cristian",
        urlGitHub: "https://github.com/Cristian7v/13_clase",
        urlWeb: "https://cristian7v.github.io/13_clase/"
    },
    {
        id: 5,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 6,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 7,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 8,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 9,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
]

/* Función que recorre el array */
function renderProjects(projects, containerSelector) {
    const container = document.querySelector(containerSelector);

    projects.forEach((project) => {
        container.innerHTML += `
            <article class="card" key=${project.id}>
                <img src=${project.img} alt="Imagen del proyecto">
                <div class="info">
                    <h2>${project.name}</h2>
                    <p>${project.description}</p>
                    <p>Creador: ${project.developer}</p>
                    <div class="buttonera">
                        <a class="button ver-mas" key=${project.id}>Ver mas</a>
                        <a class="button btn2" target="_blank" href=${project.urlWeb} >Visitar sitio</a>
                        <a class="button btn1" target="_blank" href=${project.urlGitHub} ><i class="fa-brands fa-github-alt"></i></a>
                    </div>    
                </div>
            </article>
        `;
    });
}

// Llamada a la función para renderizar proyectos en el contenedor divlistadoProyectos
renderProjects(proyects, ".listadoProyectos");

// Llamada a la función para renderizar proyectos en el contenedor divlistadoTopProyectos
renderProjects(topProyects, ".listadoTopProyectos");


document.querySelector(".alert-contacto").addEventListener('click', () => {
    Swal.fire({
      title: '¡Contáctame!',
      html: `
        <p>Puedes contactarme a través de mis redes sociales:</p>
        <ul class="listItemAlert">
          <li>
          <a target="_blank" href="https://www.linkedin.com/in/lucas-zarandon/" >
            <i class="fa-brands fa-github-alt"></i>
            GitHub
          </a>
          </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/lucaszhh" >
                <i class="fa-brands fa-linkedin-in"></i>
                Linkedin
            </a>
          </li>
          <!-- Agrega más redes sociales si es necesario -->
        </ul>
      `,
      confirmButtonText: 'Cerrar',
      showCancelButton: false,
      showCloseButton: true,
      focusConfirm: false,
      width: 'auto'
    });
  });
  
// Agregar controlador de eventos para los botones "Ver mas"
const verMasButtons = document.querySelectorAll('.ver-mas');
verMasButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const key = event.target.getAttribute('key');
        const card = document.querySelector(`[key="${key}"]`);
        const buttonText = card.querySelector('.ver-mas');
        
        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
            buttonText.textContent = 'Ver más';
        } else {
            card.classList.add('expanded');
            buttonText.textContent = 'Ver menos';
        }
    });
});