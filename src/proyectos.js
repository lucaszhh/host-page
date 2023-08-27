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
        name: "Mi banda favorita",
        description: "Fanpage que contiene una presentación de los integrantes de One Direction",
        img: "../images/casa-del-futuro.png",
        developer: "Lucía Figueroa",
        urlGitHub: "https://github.com/luufigueroa8/bandafav",
        urlWeb: "https://luufigueroa8.github.io/bandafav/"
    },
    {
        id: 6,
        name: "Pequeñas Amistades",
        description: "Página dedicada a la venta de productos",
        img: "../images/casa-del-futuro.png",
        developer: "Lorena Alenda",
        urlGitHub: "https://github.com/Lorenalenda/Pequenia-Amistades",
        urlWeb: "https://lorenalenda.github.io/Pequenia-Amistades/"
    },
    {
        id: 7,
        name: "Página de Hamburguesas",
        description: "Página web de Hamburguesas, mostrando 3 cartas con su descripción.",
        img: "../images/casa-del-futuro.png",
        developer: "Jerónimo",
        urlGitHub: "https://github.com/JeroAsenjo/Integracion",
        urlWeb: "https://jeroasenjo.github.io/Integracion/"
    },
    {
        id: 8,
        name: "Generador de Animales",
        description: "",
        img: "../images/casa-del-futuro.png",
        developer: "Lorena Alenda",
        urlGitHub: "https://github.com/Lorenalenda/Generador-de-Animales",
        urlWeb: "https://lorenalenda.github.io/Generador-de-Animales/"
    },
    {
        id: 10,
        name: "My Favorites Singers",
        description: "This page is about my top favorite singers and their songs ",
        img: "../images/conectar-lab.png",
        developer: "Donato Robledo",
        urlGitHub: "https://github.com/MiniDonny/My-Favorite-Singers",
        urlWeb: "https://minidonny.github.io/My-Favorite-Singers/"
    },
    {
        id: 11,
        name: "nicomusic",
        description: "Hice algo sobre mis cantantes favoritos tanto como su música",
        img: "../images/conectar-lab.png",
        developer: "Nicolas",
        urlGitHub: "https://github.com/MANGASNICO/nicomusic.git",
        urlWeb: "https://mangasnico.github.io/nicomusic/"
    },
    {
        id: 12,
        name: "Curriculum vitae",
        description: "Lo hice yo xd",
        img: "../images/conectar-lab.png",
        developer: "Nicolas",
        urlGitHub: "https://github.com/MANGASNICO/curriculum2.git",
        urlWeb: "https://mangasnico.github.io/curriculum2/"
    },
    {
        id: 13,
        name: "Akatsuki",
        description: "Si te ries pierdes",
        img: "../images/conectar-lab.png",
        developer: "Bruno",
        urlGitHub: "https://github.com/brunodios/Akatsuki",
        urlWeb: "https://brunodios.github.io/Akatsuki/"
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