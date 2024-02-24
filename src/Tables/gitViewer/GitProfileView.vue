<template>
    
    <div style="display: flex;justify-content:space-between;flex-direction:row">
        <article class="message is-danger">
            <div class="message-header">
                <p>Profile</p>
            </div>
            <div class="message-body">
        <img :src="user.avatar_url" alt="Avatar" />
    </div>
        </article>
    <gitRepository/>
    </div>
    <div @click="gotoGitHome()" ><button class="button is-link has-background-success"> Back </button></div>
</template>
<script setup lang="ts">
import { onMounted,ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import gitRepository from './gitRepository.vue';


const user=ref({});
const route=useRoute();
const router=useRouter();

function gotoGitHome(){
    router.push(`/githubView`)
}
async function fetchProfile() {
    console.log(route.params.username);
    
    try{
        const response= await fetch(`https://api.github.com/users/${route.params.username}`)
            console.log(response);
            
            const finalJson= await response.json();
            console.log(finalJson);
            
    if(finalJson!=null){
        user.value=finalJson
    }

    console.log(user.value.login)
    }
    catch(error){
        console.log(error.message);
        
    }finally{
        // user.value={}
    }
}
onMounted(()=>{
    // alert("Mounted")
    fetchProfile()
})
</script>