// Descrizione
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


var app = new Vue(
  {
    el: "#root",
    data: {
      messaggio: "esercizio",
      mieClassi: "red",
      image: "./cute-puppies.jpeg",
    },
  }
);

// vue funziona nei tag di input, a essi aggiungo con v-model="" (proprio come se fosse una classe)
// posso far vedere il risultato di input con <p>{{message}}</p>

// v-bind permette di inserire una variabile all'interno di un attributo o di un tag
// si scrive in html come v-bind:class="mieClassi" o in forma contratta :class="mieClassi"

// le funzioni le aggiungo con methods e mi agiscono per esempiu su (in html) @click=""
