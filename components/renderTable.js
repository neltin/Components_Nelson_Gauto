Vue.component('render-table', {
    props:{
        data_class: Object,
        data_style: Object,
        lista: Array,
        formato: String
    },
    data: function () {
      return {
      }
    },
    template: //html
    `<div class="col-12 f-table">
        <h2>{{formato}}</h2>
        <table :class="data_class">
            <thead>
                <tr>
                    <th :style="data_style">Titulo</th>
                    <th :style="data_style">Director</th>
                    <th :style="data_style">Genero</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, i) in lista" :key="data.id"> 
                    <td>{{data.titulo}}</td>
                    <td>{{data.director}}</td>
                    <td>{{data.genero}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
  })


 