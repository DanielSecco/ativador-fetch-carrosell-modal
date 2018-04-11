<template>
  <div  class="geolocate">
    <h1>{{ msg }}</h1>
   
    <p id="demo">Lat</p>
      <input id="latNum" v-on:change="sendop" type="number" v-model.number="numLT"/>
      <br/>
      <input id="logNum" v-on:change="sendop" type="number" v-model.number="numLG"/>
      <br/>
    <button class="btavancar" @click="getLocation">Get Location</button>
      <br/>
    <button class="btavancar" style="margin:1em" @click="avancar">AVANÇAR</button>
      
  </div>
</template>

<script>
	//var tata = furlf;
    	var firebase = require('firebase');
var $ = require('jquery');
 import Swiper from 'swiper'    
    window.getLocationV = function getLocation() {
   
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        $("#demo").append( "Geolocation is not supported by this browser.");
        
    }

function showPosition(position) {
  
 $("#demo").text("Latitude: " + position.coords.latitude + 
    " Longitude: " + position.coords.longitude );
    /* $("#demo").append("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude );*/
   window.latData = position.coords.latitude;
    
    window.longData = position.coords.longitude;
    
}
    
  };  
getLocationV();

export default {
    

    
  name: 'geolocate',
  data () {
    return {
      msg: 'Geo Locate',
		numLT: '',
        numLG: ''
		
    }
  },
    
    
        methods: {
       sendop: function(event){

         GeoL = {lat:this.numLT, log:this.numLG};
            console.log('>>geo>>1',GeoL)
    
    },
        avancar () {
          console.log('>>geofinalll>>',GeoL)
              var mySwiper = new Swiper('.swiper-container', {

});
        mySwiper.slideTo(4);
            
        },
            getLocation (){
                console.log('lat');
                document.getElementById("latNum").value = latData;
document.getElementById("logNum").value =longData;
               
                  GeoL = {lat:latData, log:longData};
            console.log('>>geo>>',GeoL)
            }
        
        
    }
}
    
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, p {
  font-weight: normal;
    color:black;
}
    input{
        
        margin: 1em;
    }
    
    
</style>








