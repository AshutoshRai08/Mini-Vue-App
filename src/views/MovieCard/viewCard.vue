<template>
	<div class="card has-background-danger p-5 mb-0">
		<div class="field" style="display:flex; justify-content:space-between" icon="fas fa-search">
  
		<div class="control is-loading" style="width: 90%;">
		<input name="userProfile" class="input" placeholder="Enter Movie Name" v-model="movieName" @keypress.enter="getData"/>
	</div> 
	<button @click="getData" class="button is-link has-background-success-dark">Search</button>
</div>
<div class="tag" @click="movieName='Lord Of the rings';getData()"><a>Lord Of the rings</a></div>
<div class="tag ml-2 mr-2" @click="movieName='Interstellar';getData()"><a>Interstellar</a></div>
<div class="tag" @click="movieName='titanic';getData()"><a>Titanic</a></div>

</div>
<div class="card has-background-success p-5 mt-5" v-if="showCard==true">
	<div class="message is-danger">
		<div class="message-header mb-2 ml-0 mt-2 mr-0">
			<p><b>{{ movieObject.Title }}</b></p>
		</div>
		<div class="message-body container" style="display:flex; justify-content:space-between;flex-direction:row">
			<p><img alt="poster" v-bind:src="movieObject.Poster"/></p>
			<div class="card has-background-success ml-4">
				<p><b>Plot :</b>  {{movieObject.Plot}}</p>
				<p><b>Rating By: </b></p>
				<ul>
                    <li v-for="rating in movieObject.Ratings" :key="rating.Source">{{ rating.Source }}: {{ rating.Value }}</li>
                    </ul>
				<p><b>Cast : </b> {{movieObject.Actors}}</p>
				<p><b>Release : </b> {{movieObject.Released}}</p>
				<p><b>Duration : </b> {{movieObject.Runtime}}</p>
				<p><b>Genre : </b> {{movieObject.Genre}}</p>
				<p><b>Directed By : </b> {{movieObject.Director}}</p>
				<p><b>Languages : </b> {{movieObject.Language}}</p>
				<p><b>Box Office : </b> {{movieObject.BoxOffice}}</p>
			</div>
			</div>
	 </div>
</div>

</template>

<script setup lang="ts">
import {ref} from 'vue';

const movieName=ref("")
const movieObject=ref({})
const showCard=ref(false)

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
// 	}
// };
async function getData() {
	// debugger
// alert("MovieName is"+" "+ movieName.value)
try {
	const url = `https://www.omdbapi.com/?apikey=565751f8&t=${movieName.value}`;
	const response = await fetch(url);
	const result = await response.json();
	movieObject.value=result;
	if(result.Error!=undefined){
		alert(result.Error)
		// console.log(movieObject.value);
		// console.log(result);
		showCard.value=false
		
	}else{
		showCard.value=true
		// debugger
	// console.log(result);
	}
} catch (error) {
	// console.error(error+"loggin");
	alert(error)
}finally{
	movieName.value=''
}
}
// getData()
</script>