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

/* Nodos capturados */
const divlistadoProyectos = document.querySelector(".listadoProyectos")
const divlistadoTopProyectos = document.querySelector(".listadoTopProyectos")

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