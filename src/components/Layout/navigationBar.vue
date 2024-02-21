<template>
    <nav
      class="navbar is-info"
      aria-label="main navigation"
      role="navigation"
    >
    <div class="container is-max-desktop px-2">
          <div class="navbar-brand">
          <div class="navbar-item is-size-3 is-family-monospace ">
            <RouterLink to="/" class="navbar-item " active-class="is-active" style="color:darkslateblue;">Mini Project</RouterLink>
            
        </div>
      
          <a 
          @click.prevent="showMobileNave=!showMobileNave"
            class="navbar-burger"
            :class="{'is-active':showMobileNave}"
            aria-expanded="false"
            aria-label="menu"
            data-target="navbarBasicExample"
            role="button"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div
          class="navbar-menu"
          :class="{'is-active':showMobileNave}"
          id="navbarBasicExample"
        >
      
          <div class="navbar-end">
           
            <RouterLink
            class="navbar-item"
            to="/Table"
            active-class="is-active"
            >
            Table
         </RouterLink>
         <RouterLink
         to="/github"
         class="navbar-item"
         active-class="is-active"
       >
         Task Manager
       </RouterLink>
            <RouterLink
            class="navbar-item"
            to="/weatherApp"
            active-class="is-active"
            >
            Weather
         </RouterLink>
         <RouterLink
         to="/notes"
         class="navbar-item"
         active-class="is-active"
       >
         Note App
       </RouterLink>
         <RouterLink
         to="/githubView"
         class="navbar-item"
         active-class="is-active"
       >
         Github Viewer
       </RouterLink>
         <RouterLink
         to="/quizLink"
         class="navbar-item"
         active-class="is-active"
       >
       Quiz
       </RouterLink>
       
       <RouterLink
         to="/movieCard"
         class="navbar-item"
         active-class="is-active"
       >
         Movie
       </RouterLink>
       <RouterLink
         to="/shoppingCart"
         class="navbar-item"
         active-class="is-active"
       >
         Shopping Cart
       </RouterLink>
       <RouterLink
         to="/"
         class="navbar-item"
         active-class="is-active"
       >
       <i class="fa-solid fa-house"></i>
       </RouterLink>

          </div>
        </div>
    </div>
      </nav>
</template>

<script setup lang="ts"> 
import {ref} from "vue";
//mobile nav
const showMobileNave=ref(false)
</script>

<style>

@media (max-width:1023px){
    .navbar-menu{
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>