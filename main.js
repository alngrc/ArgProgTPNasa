// window.addEventListener('load', obtenerDatos);

// function obtenerDatos(){
//     const Nasa_api = 'vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T';
//     const fechapod = document.querySelector('fecha').value;
//     const ruta = `https://api.nasa.gov/planetary/apod?date=${fecha}&api_key=${Nasa_api}`;

//     fetch(ruta)
//     .then(respuesta => respuesta.json())
//     .then(resultado => mostrarDatos(resultado))
// }
// function mostrarDatos({date, title, media_type, url, copyright}) {
//     const titulo = document.querySelector('#titulo-apod');
//     titulo.innerHTML = title;
//     const fecha = document.querySelector('#fecha-apod');
//     fecha.innerHTML = date;
//     const copy = document.querySelector('#copy-apod');
//     copy.innerHTML = copyright;
    

//     const multimedia = document.querySelector('#c_multimedia');
//     if (media_type == 'video') {
//         multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`

//     } else {
//         multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
//     }

// }



// window.addEventListener('load', obtenerDatos);
// function obtenerDatos() {
//     // const fecha = fechaInput.value;
//     // const titulo = document.querySelector('#titulo-apod');
//     // const copy = document.querySelector('#copy-apod')
//     // const urlnew = `https://api.nasa.gov/planetary/apod?api_key=vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T&date=${fechaActual}`;
// }

window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loader');
  var mainContent = document.getElementById('spinner');
  var body = document.querySelector('body');
  
  setTimeout(function() {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
    body.style.overflow = 'auto'; // Vuelvo a activar el scroll
    body.style.overflowX = 'hidden';
    
    let readyElement = document.getElementById('loading-text');
    typeWriter(readyElement, readyElement.textContent);
  }, 900);
});



window.addEventListener('load', obtenerImagenDelDia);

function obtenerImagenDelDia() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T';
  const titulo = document.querySelector('#titulo-apod');
  const copy = document.querySelector('#copy-apod');
  const imagen = document.getElementById('imagen');
  const loader = document.getElementById('loader');

  fetch(url)
    .then(response => response.json())
    .then(data => {
      imagen.src = data.url;
      titulo.innerHTML = data.title;
      copy.innerHTML = data.copyrigth;
    })
    .catch(error => console.log(error));
}
window.addEventListener('load', function() {
  const fechaInput = document.getElementById('fecha');
  const fechaActual = new Date().toISOString().split("T")[0];
  fechaInput.setAttribute("max", fechaActual);
  fechaInput.value = fechaActual; // Agregar la fecha actual al input
  
  obtenerImagenDelDia(); // Obtener la imagen del día con la fecha actual
  
  fechaInput.addEventListener('change', () => {
const fechaInput = document.getElementById('fecha');
const loader = document.getElementById('loader');

// Establecer la fecha actual como valor por defecto del input
const fechaActualISO = new Date().toISOString().split("T")[0];
fechaInput.setAttribute("value", fechaActualISO);

fechaInput.onchange = function() {
  // Muestra el spinner cuando se cambia la fecha
  loader.style.display = 'block';

  fechaInput.addEventListener('change', () => {
    const fecha = fechaInput.value;
    const titulo = document.querySelector('#titulo-apod');
    const copy = document.querySelector('#copy-apod')
    const url = `https://api.nasa.gov/planetary/apod?api_key=vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T&date=${fecha}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        imagen.src = data.url;
        titulo.innerHTML = data.title;
        copy.innerHTML = data.copyright;
      })
      .catch(error => console.log(error));

    
  });
}})

  // carga para el ejemplo
  setTimeout(function() {
    // Oculta el spinner después de 3 segundos
    loader.style.display = 'none';
  }, 1000);
};
// funcion enviar mail
function sendMail() {
    var link = 'mailto:alan.garciag10@outlook.com?subject=Message from '
             +document.getElementById('mail').value + ' | Doubt: '+document.getElementById('dudas').value
             +'&body='+document.getElementById('message').value;
    window.location.href = link;
}

// maximo para el calendario

const fechaActual = new Date().toISOString().split("T")[0];
fechaInput.setAttribute("max", fechaActual);


// spinner

window.addEventListener("load", function () {
    var loader = document.querySelector("#loader");
    var text = document.querySelector(".loader-text");
  
    // Ocultar el spinner después de 3 segundos
    setTimeout(function () {
      loader.style.display = "none";
    }, 1000);
})






// // Configuración de la escena
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Configuración de la luz
// var light = new THREE.AmbientLight(0xffffff, 1);
// scene.add(light);

// // Carga de las texturas
// var textures = {
//   diffuse: new THREE.TextureLoader().load("img/textures/spstob_1.bmp"),
//   specular: new THREE.TextureLoader().load("img/textures/spstob_2.bmp"),
//   normal: new THREE.TextureLoader().load("img/textures/spstob_3.bmp"),
//   normal: new THREE.TextureLoader().load("img/textures/spstob_4.bmp"),
//   normal: new THREE.TextureLoader().load("img/textures/spstob_5.bmp"),
// };

// // Carga del modelo 3D
// var modelLoader = new THREE.TDSLoader();
// modelLoader.load("img/SpaceShuttleOrbiter.3ds", function (object) {
//   object.traverse(function (child) {
//     if (child instanceof THREE.Mesh) {
//       // Asignar texturas a los materiales
//       child.material.map = textures.diffuse;
//       child.material.specularMap = textures.specular;
//       child.material.normalMap = textures.normal;
//       // Configuración de los materiales
//       child.material.shininess = 100;
//       child.material.normalScale = new THREE.Vector2(1, 1);
//       child.material.normalScale = new THREE.Vector2(1, 1);
//     }
//   });
//   scene.add(object);
// });

// // Configuración de la cámara
// camera.position.z = 5;

// // Animación del modelo 3D
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// // Ocultar el spinner y mostrar el modelo 3D cuando se complete la carga
// window.addEventListener("load", function () {
//   var spinnerContainer = document.querySelector(".spinner-container");
//   spinnerContainer.style.display = "none";
//   animate();
// });








// let detector = 1;
// function miBoton() {
//     let btn = document.getElementById("boton");
//     var elemento = document.getElementById("elementos");
//     if (detector === 1) {
//         btn.innerHTML = "<i  class='material-icons'>menu_open</i > ";
//         elemento.style.display = "block";
//         detector = 0;
//     } else {
//         btn.innerHTML = "<i  class='material-icons'>menu</i > ";
//         elemento.style.display = "none";

//         detector = 1;
//     }

// }



// var meta = JSON.parse('https://epic.gsfc.nasa.gov/api/natural');

// $.ajax('https://epic.gsfc.nasa.gov/api/natural', {
//         success : function(iDataArr, stat, xhr) {
//             // do something with the list
//         }
//     });

// funcion enviar mail
// function sendMail() {
//     var link = 'mailto:gonzalezmateo090909@gmail.com?subject=Message from '
//              +document.getElementById('mail').value + ' | Doubt: '+document.getElementById('dudas').value
//              +'&body='+document.getElementById('message').value;
//     window.location.href = link;
// }


// function sendEmail() {
//     var to = document.getElementById('mail').value;
//     var subject = document.getElementById('mail').value;
//     var body = document.getElementById('message').value;

//     var mailtoLink = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

//     window.location.href = mailtoLink;
// }

//   css animacion
// const observ = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('mostrar');
//         } else {
//             entry.target.classList.remove('mostrar');
//         }
//     });
// });

// const elementosOcultos = document.querySelectorAll('.oculto');
// elementosOcultos.forEach((el) => observ.observe(el));