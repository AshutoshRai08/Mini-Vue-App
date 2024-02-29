<template>
    <div>
        <categoryNav v-on:vnode-before-update="reload" ></categoryNav>
        <div  style="display:flex; justify-content:space-between;width:100%;">
            <div class="tag"  v-for="category in categories" :key="category"  > <a>{{category}}</a></div>
        </div>
        <!-- <RouterLink
        class="navbar-item"
        to="/shoppingCart/jewelery"
        active-class="is-active"
        >
        Table
     </RouterLink>
     <a  class="link">send elec</a> -->
    </div>
    <!-- <div class="message-body"></div>
    <div class="container" style="display: flex;flex-wrap:wrap">
    <div v-for="item in categoryView" :key="item.id" class="card mb-6 mr-2 p-4" style="display: flex;flex-direction:row;width:30%;height:40vh;" >
       <div > <img alt="productImage" v-bind:src="item.image"/>
        <span> {{ item.title }}</span>
        <span>{{item.rating.rate}} {{item.rating.count}}</span></div>
    </div>
</div>   -->
<div class="container" style="display:flex;">
<div class="productlist mx-1" style="width: 80%;">
    <article class="message is-link">
        <div class="message-header is-size-4 is-capitalized">
            {{ `${route.params.category}` }}
        </div>
        <div class="message-body" >
            <div class="cards-container p- mr-2" style="display: flex;flex-wrap:wrap;flex-direction:column;width:34%;height:100vh;">
                <div v-for="product in categoryView"
                    :key="product.id"
                    class="card p-1 mr-2 ml-0 mb-4" style="display: flex;flex-direction:column;height:280px">
                    <span class="hover"><a @click="sendProduct(product.id)"><div class="prodImage"><img alt="image" style="height:140px;" v-bind:src="product.image"/></div>   
                        <span>{{ product.title }} - ${{ product.price }}</span></a></span>
                        <div><starRating :rating="product.rating.rate"></starRating>{{ product.rating.rate }}</div>
                        
                        <span @click="addToCart(product)" class="tag is-clickable is-success">Add to Cart</span>
                </div>
         
            </div>
      
        </div>
    </article>
</div>

<div class="cart mx-1"  style="width: 30%;">
    <progress class="progress is-link" value="15" max="25" style="position:relative;">{{cartItem.length}}</progress>
    <article class="message is-link">
        <div class="message-header is-size-4 is-capitalized">
            Cart Items
            <div class="field is-grouped is-grouped-right is-size-6"><b class="is-size-6">Value: </b> {{totalValue}}</div>
            <!-- {{ `${route.params.category}` }} -->

                <!-- <shoppingFilterBar :selectedCategory=selectedCategory :searchQuery=searchQuery :minPrice=minPrice :maxPrice=maxPrice :clearFilters=clearFilters />
            </p> --> 
        </div>
        <div class="message-body" >
            <div class="card my-3 p-2" v-for="cartItems in cartItem" :key="cartItems.id" style="display: flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between">
             <p class="item "><img v-bind:src="cartItems.image" alt="posterImg" style="height:150px"></p>
             <div class="item-details has-text-right">
                <p><b>Price : </b>{{cartItems.price}}</p>
                <p><b>Item : </b>{{cartItems.title}}</p>
            </div> 
            <!-- <div class="is-pulled-right"><button>remove</button></div> -->
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button @click="removeItem(cartItems)">remove</button>
                </div>
              </div>
            <div class="field is-grouped is-grouped-left">
                <div class="control">
                    <button @click="removeItem(cartItems)">
                        -
                    </button>

                    <!-- <div >{{obj.get(cartItems.id)}}</div> -->
                     <div v-for="productCount in tri" :key="productCount.id" v-show="cartItems.id==productCount.id">{{productCount.itemCount}}</div>
                     <!-- <div>{{cartItems.itemCounting}}</div> -->
                     <!-- <div v-on:change="addTotal(cartItems.price)">{{totalValue}}</div> -->

                    <button @click="addToCart(cartItems)">
                        +
                    </button>
                    <!-- <button @click="removeItem(cartItems)">
                        -
                    </button>
                    <div v-for="itemss in cartCounter">
                        <div v-if="obj.get(cartItems.id)">{{itemss}}</div>
                    </div>
                    <button @click="addToCart(cartItems)">
                        +
                    </button> -->
                </div>
              </div>
        </div>
        
    </div>
        </article>
        <div class="field is-grouped is-grouped-right is-size-5"><b class="is-size-5">Total Value : </b> {{totalValue}}</div>
</div>

</div>
<productAdd @add-clicked="addToCart()"></productAdd>
</template>
<script setup lang="ts">
import { useRouter,useRoute } from 'vue-router';
import { onMounted,ref,computed,reactive } from 'vue';
import categoryNav from "./viewShoppingCart.vue";
import productAdd from "./viewProduct.vue";
import starRating from '@/components/Layout/starRating.vue';
// import { debug } from 'console';

const router=useRouter();
const route=useRoute();
const categoryView=ref([])
const cartItem=ref([])
const obj=new Map()
let tri=reactive([])
const totalValue=ref(0)
interface idTracking{
    id:number;
    noCount:number;
}
function sendProduct(id){
    debugger
    id=id.toString()
    router.push(`/productView/${id}`)
}
const cartCounter=ref([0])
async function getCategory() {
    debugger
    const response=await fetch(`https://fakestoreapi.com/products/category/${route.params.category}`)
    debugger
    const result =await response.json();
   categoryView.value=result;
    console.log(result);    
}
function reload(){
    getCategory();
}
let commentFromLocal1:[]
let commentFromLocal2:[]
function saveInStorage(id1,id2){
            localStorage.setItem("productDataBase",JSON.stringify(id1))
            localStorage.setItem("cartDataBase",JSON.stringify(id2))
         }
         const loadFromStoragex=()=>{
            const dataFromLocal1 = localStorage.getItem("productDataBase");
            // const dataFromLocal2 = localStorage.getItem("cartDataBase");
             commentFromLocal1 = dataFromLocal1 !== null ? JSON.parse(dataFromLocal1) : [];
             return commentFromLocal1;

        }
         const loadFromStoragex2=()=>{
            // const dataFromLocal1 = localStorage.getItem("productDataBase");
            const dataFromLocal2 = localStorage.getItem("cartDataBase");
             commentFromLocal2 = dataFromLocal2 !== null ? JSON.parse(dataFromLocal2) : [];
             return commentFromLocal2;

        }
        function getTotal(){
            for(let i=0;i<cartItem.value.length;i++){
                totalValue.value +=cartItem.value[i].price*tri[i].itemCount}
           
            // console.log(totalValue.value);
            
        }
function addToCart(item){
    alert(item.id)
    if(cartItem.value.length==0){
        totalValue.value +=item.price
        cartItem.value.push({
            id:item.id,
            price:item.price,
            title:item.title,
            image:item.image,
            itemCounting:1,

        })
        obj.set(item.id,1);
        tri.push({
            id:item.id,
            itemCount:obj.get(item.id)
        })
        // debugge
        saveInStorage(cartItem.value,tri)
    }
    else{
    let trackCounter=-1;
    for(let i=0;i<cartItem.value.length;i++){
        if(cartItem.value[i].id==item.id){
            debugger
            // alert(cartItem.value[i])
            trackCounter=i;
            break;
}
else
{ 
    trackCounter=i+1;
    debugger
}
    }
    debugger
    if(trackCounter<cartItem.value.length){
        alert("loggin")
        cartCounter.value[trackCounter]++//;
        obj.set(cartItem.value[trackCounter].id,obj.get(item.id)+1);
            totalValue.value +=item.price
            debugger
            cartItem.value[trackCounter]={
             
            id:item.id,
            price:item.price,
            title:item.title,
            image:item.image,
            itemCounting:item.itemCounting+1,
            }
            tri[trackCounter]={
            id:item.id,
            itemCount:tri[trackCounter].itemCount+1
        }
            saveInStorage(cartItem.value,tri)
            debugger
    }
    else{
            alert("adding")
            cartCounter.value[trackCounter]=0;
            obj.set(item.id,1);
            cartItem.value.push({
             
             id:item.id,
             price:item.price,
             title:item.title,
             image:item.image,
             itemCounting:1,
             })
            tri.push({
            id:item.id,
            itemCount:obj.get(item.id)
        })
            debugger
            obj.set(item.id,1);
            // cartItem.value.push(item)
    totalValue.value +=item.price
    saveInStorage(cartItem.value,tri)
    // alert(cartItem.value)
        }
    
    }
    
}
// function increaseItem(item){
//     for(let i=0;i<cartItem.value.length;i++){
//         if(cartItem.value[i]==item){
//             alert("loggin")
            
          
//             break;
// }
//     }
// }
const rmItem=ref()


function removeItem(itemId){
    debugger
    // alert(itemId)
    let index=-1
    for(let i=0;i<cartItem.value.length;i++){
        if(cartItem.value[i]==itemId){
          index=i;
            break;
        }
    }
    if(tri[index].itemCount>1){
        tri[index].itemCount=tri[index].itemCount-1
        totalValue.value -=itemId.price;
    }
    
else{
    debugger
    cartItem.value.splice(index,1)
    totalValue.value -=itemId.price;
    tri.splice(index,1)
}
debugger
saveInStorage(cartItem.value,tri)
    // if(cartItem.value[index].itemCounting>1){
    //     cartItem.value[index].itemCounting -=1
    // }
    
    // cartItem.value.push(item)
    // totalValue.value +=item.price
    // debugger
    
    // alert(cartItem.value)
    
    
    
}
onMounted(() => {
  getCategory();  
  
 cartItem.value= loadFromStoragex()
 tri= loadFromStoragex2()
 getTotal();
 debugger
})
</script>