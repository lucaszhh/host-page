const topProyects = [
    {
        id: 1,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 2,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 3,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
]

const proyects = [
    {
        id: 1,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 2,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 3,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
    },
    {
        id: 4,
        name: "",
        description: "",
        img: "../images/pagina.avif",
        developer: "",
        urlGitHub: "#",
        urlWeb: "#"
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
]

/* Función que recorre el array */
function renderProjects(projects, containerSelector) {
    const container = document.querySelector(containerSelector);

    projects.forEach((project) => {
        container.innerHTML += `
            <article class="card pattern-cross-dots-xl bg-primary text-white" key=${project.id}>
                <img src=${project.img} alt="Imagen del proyecto">
                <div class="info">
                    <h2>${project.name}</h2>
                    <p>Creador: ${project.developer}</p>
                    <div class="buttonera">
                        <a href=${project.urlGitHub} class="button">Ver repositorio</a>
                        <a href=${project.urlWeb} class="button">Visitar sitio</a>
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

// Escucha el evento de click en el botón
document.getElementById('show-alert').addEventListener('click', () => {
    // Muestra el SweetAlert
    Swal.fire({
        title: '¡Hola!',
        text: 'Este es un SweetAlert personalizado.',
        icon: 'info',
        confirmButtonText: 'Ok'
    });
});

document.getElementById('contact-button').addEventListener('click', () => {
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
      icon: 'info', // No es necesario en este caso
      confirmButtonText: 'Cerrar',
      showCancelButton: false,
      showCloseButton: true,
      focusConfirm: false,
      width: 'auto'
    });
  });
  