
const images = [
    'imagenes/DSC06982.jpg',
    'imagenes/viente.jpg',
    'imagenes/Foto.jpg',
    'imagenes/foto huaxtla 4534-12.jpg',
    'imagenes/foto huaxtla 4534-18.jpg'
];

function alternateImages() {
    let index = 0;
    const body = document.body;

    setInterval(() => {
        body.style.backgroundImage = `url('${images[index]}')`;
        body.style.transition = 'background 1s ease';
        index = (index + 1) % images.length;
    }, 2000); 
}


document.addEventListener('DOMContentLoaded', () => {
    alternateImages();
});