<template>
    <div class="container" style="display:flex;height:20vh;width:1200px;justify-content:space-between;flex-direction:row">
    <div class="card has-background-danger p-6 mb-0" style="">
        <RouterLink
            class="navbar-item"
            to="/weatherApp"
            active-class="is-active"
            >
            Weather
         </RouterLink>
         <i class="fa-solid fa-cloud-sun p-3 ml-4"></i>
    </div>
    <div class="card has-background-danger p-6 mb-0">
        <RouterLink
        to="/notes"
        class="navbar-item"
        active-class="is-active"
      >
        Note App
      </RouterLink>
      <i class="fa-solid fa-note-sticky p-3 ml-4" to="/notes" ></i>
    </div>
    <div class="card has-background-danger p-6 mb-0">
        <RouterLink
        to="/githubView"
        class="navbar-item"
        active-class="is-active"
      >
        Github Viewer
      </RouterLink>
      <i class="fa-brands fa-square-github p-3 ml-6"></i>
    </div>
    <div class="card has-background-danger p-6 mb-0">
        <RouterLink
        to="/movieCard"
        class="navbar-item"
        active-class="is-active"
      >
        Movie
      </RouterLink>
      <i class="fa-solid fa-clapperboard p-3 ml-4"></i>
    </div>
    <div class="card has-background-danger p-6 mb-0">
        <RouterLink
        to="/shoppingCart"
        class="navbar-item"
        active-class="is-active"
      >
        Shopping Cart
      </RouterLink>
      <i class="fa-solid fa-cart-shopping p-3 ml-6"></i>
    </div>

</div>
</template>