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
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }


    static Next() {


    }
    


};


//Classe, tem com função da propriedades a variavel que está sendo atribuida.
//Para acessar uma propriedade dentro de uma classe, se utiliza "variavel.propiedade = atribuição".
//"This" (Esse), serve para especificar o atributo de uma propriedade, ou seja "This.propiedade".
//Com a variavel criada, "new + Classe", faz com que as propriedades da classe, sejam atribuidas a variavel.



//Estrutura

class {
    propriedade;

    mudar () {
        this.propriedade = algo;
    }
}

variavel = new classe;

variavel.propriedade = A;

variavel.mudar(B);

