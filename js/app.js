new Vue({ el: '#app',
data: {
    lista:{
        peliculas:[
            {id: 1, titulo: "El sexto sentido", director: "M. Night Shyamalan", genero: "Drama"}, 
            {id: 2, titulo: "Pulp Fiction", director: "Tarantino", genero: "Acción"}, 
            {id: 3, titulo: "Todo Sobre Mi Madre", director: "Almodobar", genero: "Drama"}, 
            {id: 4, titulo: "300", director: "Zack Snyder", genero: "Acción"}, 
            {id: 5, titulo: "El silencio de los corderos", director: "Jonathan Demme", genero: "Drama"}, 
            {id: 6, titulo: "Forrest Gump", director: "Robert Zemeckis", genero: "Comedia"}, 
            {id: 7, titulo: "Las Hurdes", director: "Luis Buñuel", genero: "Documental"}
        ],
        anime:[
            {id: 1, titulo: "Shin Tennis no Ouji-sama", director: "Takeshi Konomi", genero: "Deportes"}, 
            {id: 2, titulo: "Neon Genesis Evangelion", director: "Hideaki Anno", genero: "Ciencia Ficción"}, 
            {id: 3, titulo: "Naruto", director: "Masashi Kishimoto", genero: "Shounen"},
            {id: 4, titulo: "Captain Tsubasa", director: "Yoichi Takahashi", genero: "Deportes"},
            {id: 5, titulo: "Sword Art Online", director: "Reki Kawahara", genero: "Acción"}, 
            {id: 6, titulo: "Digimon", director: "Akiyoshi Hongo", genero: "Aventura"}, 
            {id: 7, titulo: "Shingeki no Kyojin", director: "Hajime Isayama", genero: "Acción"}
        ],
        series:[
            {id: 1, titulo: "30 Rock", director: "Tina Fey", genero: "Comedia de situación"}, 
            {id: 2, titulo: "A dos metros bajo tierra", director: "Alan Ball", genero: "Drama"}, 
            {id: 3, titulo: "El ala oeste de la Casa Blanca", director: "Aaron Sorkin", genero: "Drama"},
            {id: 4, titulo: "Battlestar Galactica", director: "Glen A. Larson", genero: "Ciencia Ficción"},
            {id: 5, titulo: "Breaking Bad", director: " Vince Gilligan", genero: "Suspenso"}, 
            {id: 6, titulo: "Malcolm in the Middle", director: "Linwood Boomer", genero: "Comedia"}, 
            {id: 7, titulo: "Friends", director: "Marta Kauffman", genero: "Comedia"}
        ]
    },    
    style_anime: { 'background-color': '#000','color': '#d7d8da'},
    style_peliculas: { 'background-color': '#000','color': '#f2e7c3'},
    style_series: { 'background-color': '#000','color': '#c5d7f2'},
},
methods: {
    app_clase(j){
        return {
            'table table-secondary': j == "anime",
            'table table-warning': j == "peliculas",
            'table table-primary': j == "series",
        }     
    },
    app_style(j){
         if(j == "anime") { return this.style_anime }
         else if(j == "peliculas") { return this.style_peliculas}
         else if(j == "series") { return this.style_series}
         else{return ""}
    }     
},
computed:{
}
})