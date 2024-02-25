<template>
    <div class="card has-background-danger p-6 mb-0">
            <div class="field" style="display:flex; justify-content:space-between" icon="fas fa-search">
      
            <div class="control is-loading" style="width: 100%;">
            <input name="userProfile" class="input" placeholder="Enter User Profile" v-model="inputUser"/>
        </div>
     
        <button @click="goToUser" class="button is-link has-background-success-dark"> ADD</button>
   
        
    </div>
  
    </div>
</template>

<script setup lang="ts">
 import{ref} from 'vue'
 import { useRouter } from 'vue-router';

const inputUser=ref("")
const router=useRouter()

function goToUser(){
    router.push(`/githubView/${inputUser.value}`)
}

</script>



