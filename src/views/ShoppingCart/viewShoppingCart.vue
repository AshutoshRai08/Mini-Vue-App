<template >
    <div class="columns has-background-success p-6" v-show="action==''" >
        
           <div class="button mb-2 mr-6 ml-6  p-5" v-for="category in categories" :key="category" style="display:flex; justify-content:space-evenly;width:20%;"> <a @click
           ="redirect(category)" >{{category}}</a>
          <div><i class="fa-solid fa-plug" v-show="category=='electronics'"></i>
            <i class="fa-regular fa-gem" v-show="category=='jewelery'"></i>
            <i class="fa-solid fa-shirt" v-show="category==`men's clothing`"></i>
            <i class="fa-solid fa-shirt" v-show="category==`women's clothing`"></i></div>
        </div>
    
    </div>

</template>
<script setup lang="ts">
// import router from '@/router';
import {onMounted, ref,computed} from 'vue'
import { useRouter,useRoute } from 'vue-router';

const categories=ref([])
const router=useRouter();
const action=ref("")

async function getCategories() {
    const response=await fetch('https://fakestoreapi.com/products/categories')
    const result =await response.json();
    categories.value=result;
    console.log(result);    
}
function redirect(category){
    debugger
    router.push(`/shoppingCart/${category}`)
    debugger
}

const props=defineProps<{
obj:Object;
category:string,


}
>()
onMounted(() => {
    getCategories();
})

</script>