var app = new Vue (
    {
        el: '#root',
        data: {
            images: [
                "https://images.everyeye.it/img-notizie/40-ore-video-paesaggi-mozzafiato-pianeta-v3-299389.jpg",
                "https://www.ilovevaldinon.it/wp-content/uploads/2020/02/alpe-di-siusi-1.jpg.webp",
                "https://miro.medium.com/max/1200/1*Gsq1yHsb3cV2JKuj5c_SoQ.jpeg",
                "https://www.zingarate.com/pictures/2020/12/15/odle.jpeg",
                "https://www.greenme.it/wp-content/uploads/2015/11/paesaggi-.jpg"
            ],
            imagesIndex: 0
        },
        methods: {
            nextImage: function () {
                this.imagesIndex++;

                if(this.imagesIndex == this.images.lenght){
                    this.imagesIndex = 0;
                }
            },
            
            prevImage: function (){
                this.imagesIndex--;

                if(this.imagesIndex == -1){
                    this.imagesIndex = this.images.lenght = 4;
                }
            }
        }
    }
);