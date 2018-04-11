<template>
  <div  class="tagnumber">
    <h1>{{ msg }}</h1>
      <p>
    Informe o número da tag ou utilize o Leitor
    </p>
   <input id="tagNum" v-on:change="sendop"  placeholder="#" type="number" v-model.number="num"/>
      <br/>
    <button class="btreader" @click="showreader">QR CAM</button>
      <br/>
    <button class="btavancar" @click="avancar">AVANÇAR</button>
  </div>
</template>

<script>
    var $ = require('jquery');
 import Swiper from 'swiper'
export default {
  name: 'tagnumber',
  data () {
    return {
      
        msg: 'TAG #',
		num: ''
		
    }
  },
    methods: {
       sendop: function(event){

        console.log('thisnum--> ', this.num);   
     TagN = this.num;
     
    
    },showreader() {
                $(".qrcode-reader").css('display', 'block')
                $(".btreader").css('display', 'none')
                console.log('content');
            },
        avancar () {
           
              
     console.log('tagnFinal ',TagN);
              var mySwiper = new Swiper('.swiper-container', {

});
        mySwiper.slideTo(2);
            
        }
        
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
    color:black;
}
button {
    color: aliceblue;
background-color: #000;
	font-size: 1em;
	padding: 1em 2em;
    margin: 1em;
	border: none !important;
	border-radius: 5em;
	box-shadow: none;
}
</style>