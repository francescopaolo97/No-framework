let item = document.querySelector(".icon-hamburger");
item.addEventListener("click", function () {
  /** il metodo classList.toggle alterna tra l’aggiunta e la rimozione di una classe CSS  */
  document.body.classList.toggle("menu-open");
});

/**crea un nuovo oggetto IntersectionObserver, in modo da monitorare quando un oggetto entra o 
esce dalla viewport*/
let observer = new IntersectionObserver(
  (entries) => {
    /** itera su ogni oggetto IntersectionObserverEntry. Ogni entry rappresenta un elemento monitorato. */
    entries.forEach((entry) => {
      /**controlla se l’elemento è nel viewport.
       * Se entry.isIntersecting è true, significa che l’elemento è entrato nel viewport. */
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); //se è visibile aggiunge la classe visibile
      } else {
        entry.target.classList.remove("visible"); //se non è visibile rimuove la classe visibile
      }
    });
  },
  /**L’opzione threshold indica la percentuale dell’elemento che deve essere nel viewport prima
   *che la callback venga chiamata. In questo caso, la callback viene chiamata quando almeno 
   il 10% dell’elemento è nel viewport. */
  { threshold: 0.1 }
);

observer.observe(document.querySelector("#home"));
observer.observe(document.querySelector("#about"));
observer.observe(document.querySelector("#skill"));
observer.observe(document.querySelector("#progetti"));

/**seleziona tutti gli eementi <a> con l attributo href che inizia con # */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //itera ogni elemento <a> specificato
  /**ad ogni elemento aggiunge la un gestore di eventi per l'evento "click", in modo che ad
   * ogni "click" la funzione venga eseguita */
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); //impedisce l'azione predefinita del browser quando si clicca sul link

    /**seleziona l’elemento di ancoraggio a cui il link punta. */
    let target = document.querySelector(this.getAttribute("href"));
    /**definisce un offset, o una distanza in px, da sottrarre alla posizione dell’elemento di ancoraggio. */
    let offset = 135;

    //fa scorrere la pagina alla posizione specificata
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth", //fa si che la pagina scorra in modo "morbido"
    });
  });
});
