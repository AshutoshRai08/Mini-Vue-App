import { createRouter,createWebHashHistory} from 'vue-router'
import TablesData from '../Tables/Table/TablesData.vue'
import weatheApp from '../Tables/weatherApp/weatherApp.vue'
import gitView from '../Tables/gitViewer/gitView.vue'
import GitProfileView from '../Tables/gitViewer/GitProfileView.vue'
import ViewNotepad from '../Tables/NotePad/ViewNotepad.vue'
import viewQuiz from '../views/quizTrivia/viewQuiz.vue'
import viewCard from '../views/MovieCard/viewCard.vue'
import viewShoppingCart from '../views/ShoppingCart/viewShoppingCart.vue'
import viewCategory from '../views/ShoppingCart/viewCategory.vue'
import viewProduct from '../views/ShoppingCart/viewProduct.vue'
import Home from '../components/Layout/Home.vue'


const routes=[
    {
        path:'/',
        name:'homeView',
        component:Home
    },
    {
        path:'/Table',
        name:'Tabledata',
        component:TablesData
    },
   {
    path:'/weatherApp',
    name:'WeatherApi',
component:weatheApp
   },
   {
    path:'/githubView',
    name:'gitViewer',
component:gitView
   },
   {
    path:'/githubView/:username',
    name:'gitProfileView',
component:GitProfileView
   },
   {
    path:'/notes',
    name:'NotesApp',
component:ViewNotepad
   },
   {
    path:'/quizLink',
    name:'quizApp',
component:viewQuiz
   },
   {
    path:'/movieCard',
    name:'movieApp',
component:viewCard 
   },
   {
    path:'/shoppingCart',
    name:'shoppingApp',
component:viewShoppingCart
   },
   {
    path:'/shoppingCart/:category',
    name:'shoppingAppCategory',
component:viewCategory
   },
   {
    path:'/productView/:item',
    name:'prodcutView',
component:viewProduct
   },

]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router