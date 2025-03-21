

//carousel

//Array storage class
const carouselArr = [

    
];


//class Carousel
class Carousel {
    constructor(Imagem, Title, URL) {
        this.imagem = Imagem;
        this.title = Title;
        this.url = URL;
    }

    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    //Fazer carrossel

    static Next(carouselArr) {
        const carouselImagem = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');

        if (carouselImagem && carouselTitle) {
            const carouselSlide = carouselArr[Carousel._sequence];

            carouselImagem.style.backgroundImage(`url:img/${carouselSlide.Imagem}`)
            carouselImagem.style.backgroundSize('cover');
            carouselDiv.innerHTML = '';

            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
};
