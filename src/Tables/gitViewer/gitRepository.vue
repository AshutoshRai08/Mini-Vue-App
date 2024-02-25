<template>
    <article class="message is-link has-background-success">
    <div class="message-header has-background-danger">
        <p>Public Repositories ({{repository.length}})</p>
        </div>
        <div class="message-body">
        <ul>
            <li v-for="repos in repository" :key="repos.id">
                <a :href="`https://github.com/${route.params.username}/${repos.name}`">{{ repos.name }} </a>
            </li>
        </ul>
    </div>
</article>
</template>
<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router';

const route=useRoute();
const repository=ref([])
async function repositoryCall(){
    const response=await fetch(`https://api.github.com/users/${route.params.username}/repos`)
    const json=await response.json();
    if(json!=null){
        repository.value=json;
    }
}
onMounted(() => {
    repositoryCall()
})
</script>