<template>
    <div class="cardk">
        <div>
            <article>
                <div class="message">
                    <div class="message-header " >
                        {{productView.title}}
                    
                        <span> Customer Ratings:
                          <p><starRating :rating="productView.rate" />{{ productView.rate }}  ({{ productView.count }})</p>  </span>
                       
                    </div>
                    
                    <div class="prodImage"><img alt="image" style="height:250px;" v-bind:src="productView.image"/></div>
                    <!-- <div>{{productView.id}}</div> -->
                    
                    <div><b>Details:</b>
                        <p>{{productView.description}}</p></div></div>
                        <div class="message-footer">
                            <button class="button is-success" @click="addClicked">Add to Cart</button>
                        </div>
             
            </article>
            
        </div>
       
    </div>
</template>
<script setup lang="ts">
import { useRouter,useRoute } from 'vue-router';
import { onMounted,ref,computed,reactive } from 'vue';
import starRating from '@/components/Layout/starRating.vue';

const router=useRouter();
const route=useRoute();
const productView=ref({})

const emit = defineEmits<{
    // (event: 'update:modelValue', payload: string): void;
    (event: 'add-clicked',payload:object): void;
  
}>();
function addClicked(){
    alert("addClicked")
    emit('add-clicked',productView)
}
async function getProduct() {
    debugger
    const response=await fetch(`https://fakestoreapi.com/products/${route.params.item}`)
    debugger
    const result =await response.json();
    debugger
   productView.value={
     title:result.title,
     rating:result.rating,
     price:result.price,
     id:result.id,
     image:result.image,
     description:result.description,
     rate:result.rating.rate,
     count:result.rating.count,

   }
    console.log(result);    
}
onMounted(()=>{
    getProduct()
})
</script>