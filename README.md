Vue Slider
===
nome repo: vue-slider

**Descrizione:**
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

**Bonus:**
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
4- al doppio click sullo slider cambia la direzione dell’autoplay

## SVOLGIMENTO
1. inserisco le immagini in un array di oggetti
2. creo un counter
3. inserisco le :url dinamicamente
4. metto il titolo e la descrizione  da array
5. mostro l'immagine attiva in base al contatore
6. aggiungo la classe "active" alle thumb in base al'indice delle image
7. al premere di Next/PRev, le immagini  girano 
- BONUS
8. al clic dell'utente su una thumb l'immagine si si accende l'immagine corrispondente