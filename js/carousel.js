//Array storage class
const carouselArr = [];

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
                Carousel.Next(arr); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }


    static Next() {
        const carouselConteudo = document.getElementById('carousel');
        const url = document.getElementById('carousel-title');


        if (carouselConteudo && url) {
            const carouselSlide = carouselArr[Carousel._sequence];

            carouselConteudo.style.backgroundImage = `url('img/${carouselSlide.imagem}')`;
            carouselConteudo.style.backgroundImage = `cover`;
            carouselConteudo.innerHTML = '';

            url.innerHTML = `<a href="${carouselSlide.url}">${carouselSlide.title}</a>`;

            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }

    };
}


//Classe, tem com função da propriedades a variavel que está sendo atribuida.
//Para acessar uma propriedade dentro de uma classe, se utiliza "variavel.propiedade = atribuição".
//"This" (Esse), serve para especificar o atributo de uma propriedade, ou seja "This.propiedade".
//Com a variavel criada, "new + Classe", faz com que as propriedades da classe, sejam atribuidas a variavel.



// Estrutura

// class {
//     propriedade;

//     mudar () {
//         this.propriedade = algo;
//     }
// }

// variavel = new classe;

// variavel.propriedade = A;

// variavel.mudar(B);

