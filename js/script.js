const {createApp} = Vue;

createApp ({

  data() {

    return {

      images: [
        {
          url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
          title: 'Svezia',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
  
        {
          url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
          title: 'Perù',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
  
        {
          url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
          title: 'Chile',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
  
        {
          url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
          title: 'Argentina',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },

        {
          url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
          title: 'Colombia',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
      ],

      counter: 3,
      isAutoActive: true,
      isChangeDirection: true,
    }
  },

  methods: {
    // al click del btn le immagini cambiano
    nextPrev(isNext) {

      isNext ? this.counter++ : this.counter--

      // condizione per far lopp delle immagini cliccando l'ultima/prima img
      if (this.counter === this.images.length) {
        this.counter = 0 

      } else if  (this.counter < 0) {
        this.counter = this.images.length -1
      }

  
    },

    // autoplay
    autoPlay() {
      setInterval (()=> {
        // riga 63 e 65 aggiunte per far bloccare autoplay con mouse sopra/fuori
        if (this.isAutoActive) {
          this.nextPrev(this.isChangeDirection)
        }

      }, 1000 )
    }
  },

  mounted () {
    this.autoPlay ()
  }

}).mount('#app')

dblclick