<script setup lang="ts">
import { ref ,reactive} from 'vue';
type Data={
    name:string;
    main:object;
    weather:object;
    visibility:string;
    wind:object;
    clouds:object;
    coordinate:object;
}
const fullData=ref(false)
const city=ref("")
const errorDisplay=ref("")
const cityData:Data=ref({
    name:"",
    main:{},
    weather:{},
    visibility:"",
    wind:{},
    clouds:{},
    coordinate:{}
})
async function findCityData(){
//   city.value="";
  
  errorDisplay.value="";
  cityData.value={}
    try{

const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=fa61acc6500e6dff8ca4904f7529e86f&units=metric`)
const json=await response.json();
cityData.value=({
    name:json.name,
    main:json.main,
    weather:json.weather,
    visibility:json.visibility,
    wind:json.wind,
    clouds:json.cloud,
    coordinate:json.coord
}
)
console.log(cityData.value);

console.log(json);

}
catch(error){
    errorDisplay.value=error.message;
    alert("error")
}
finally{
    city.value=""
}
}
function clicktry(){
    console.log(fullData.value);
    
}

</script>


<template>    
    <div>
        <div class="card has-background-success-dark p-5 mb-5">
            <div class="field" style="display: flex; justify-content:space-between;flex-direction:row">
            <div class="control is-loading" style="width:100%">
              <input v-model="city" class="input" type="text" placeholder="Search City....." @keypress.enter="findCityData"  />
            </div>
         
              <button class="button is-link has-background-success" @click="findCityData">Search</button>
       
          </div>
        </div>
        <div v-show="cityData.name!=''">
        <!-- <VCard radius="large" color="danger" elevated><strong>{{cityData.name}}</strong></VCard> -->
     
              <div v-show="cityData.name!=''"> 
            <div>Showing Temperature of</div><div style="font-size:20px"> <strong><b> {{ cityData.name }}</b></strong></div>
        
    </div>
          
                <div style="font-weight: bold; color: green; height:50px;font-size:30px"><b>{{ cityData.name}}</b></div>
                <div>
              <p>Current Temp is :- <b>{{ cityData.main.temp }}</b></p>
                <p>Feels like :- <b>{{ cityData.main.feels_like }}</b></p>
                <p>Min Temp :- <b>{{ cityData.main.temp_min }}</b></p>
                <p>Max Temp :- <strong>{{ cityData.main.temp_max }}</strong></p>
                <p>Humidity :- <strong><b>{{ cityData.main.humidity }}</b></strong></p>
                <p>Pressure :- <strong>{{ cityData.main.pressure }}</strong></p>
            </div>
            <div v-if="cityData.name!=''">
                <img alt="image" v-bind:src="'http://openweathermap.org/img/w/'+ cityData.weather[0].icon+'.png'"
                        width="60"/>
              </div>
              <div v-show="fullData==true">
                <p>Visibility is :- {{cityData.visibility}}</p>
                <p>Wind Speed is :- {{cityData.wind.speed}}</p>
                <p>Latitude :- {{cityData.coordinate.lat}}</p>
              </div>
          
              <span class="tag is-black">Black</span>
        
              <button color="primary" raised @click="fullData=!fullData; clicktry()" v-show="fullData==false">View More</button>
              <button color="primary" raised @click="fullData=!fullData; clicktry()" v-show="fullData==true">Hide</button>
      
         
        </div>
    </div>

</template>
<style>
.control{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
