<script setup lang="ts">

 

const props=defineProps<{
rating:number
}
>()
 

const starClass = (starIndex) => {

  const filledStars = Math.floor(props.rating);

 

  const decimal = props.rating % 1;

    // console.log(">>>>",decimal)

  if (starIndex <= filledStars) {

    return "filled";

  } else if (starIndex === filledStars + 1 && decimal % 1 !== 0) {

    let widthClass = "widthMain";

 

    if (decimal.toFixed(1) >= 0.6 && decimal.toFixed(1) <= 0.9) {

      widthClass = "width22";

    } else if (decimal.toFixed(1) >= 0.1 && decimal.toFixed(1) <= 0.5) {

      widthClass = "width08";

    }

 

    return `half-filled ${widthClass}`;

  } else {

    return "";

  }

};

</script>

 

<template>

  <div class="rating">

    <span

      v-for="i in 5"

      :key="i"

      class="star"

      :class="starClass(i)"

      :style="{ width: '10px' }"

    >

      &#9733;

    </span>

  </div>

</template>

 

<style scoped>

.rating {

  font-size: 34px;

  color: gold;

}

 

.star {

  cursor: pointer;

  transition: color 0.2s;

}

 

/* Change the color to your desired filled star color */

 

.star.filled {

  color: red;

}

.widthMain:after {

  width: 15px;

}

 

.width22:after {

  width: 20px;

}

 

.width08:after {

  width: 10px;

}

.star.half-filled:after {

  content: "\2605";

  color: red;

  position: absolute;

  margin-left: -38px;

  /* width: 0px; */

  overflow: hidden;

}

 

.star.half-filled:nth-child(5):after {

  margin-left: -28px !important;

}

</style>