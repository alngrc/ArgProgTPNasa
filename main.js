window.addEventListener('load', obtenerDatos);

function obtenerDatos(){
    const Nasa_api = 'vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_api}`;

    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))
}
function mostrarDatos({date, title, media_type, url, copyright}) {
    const titulo = document.querySelector('#titulo-apod');
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha-apod');
    fecha.innerHTML = date;
    const copy = document.querySelector('#copy-apod');
    copy.innerHTML = copyright;
    

    const multimedia = document.querySelector('#c_multimedia');
    if (media_type == 'video') {
        multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`

    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
    }

}

// $(document).ready(function (){
//     $.ajax({
//         method: "GET",
//         url: "https://api.nasa.gov/planetary/apod" ,
//         // url: "https://api.nasa.gov/planetary/apod?api_key=vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T",
//     }).done(function (respuestaImg){
//         path_img
//     })
// }) 