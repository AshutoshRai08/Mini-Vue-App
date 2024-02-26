<script setup lang="ts">
import { ref } from 'vue'
import {defineProps} from 'vue'


const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void;
    (event: 'edit-Clicked',payload: object): void;
    (event: 'delete-Clicked',payload: object): void;
  
}>();
const props=defineProps<{
comment:Object;
key:number;
}
>()
const editing=(val)=>{
    // alert("Working")
    console.log(val);
    
    
}
 
</script>

<template>
    <div class="card has-background-success p-2 mb-5" radius="small" color="primary">
      <h3 class="title is-danger p-3 mb-2">Comment</h3>
      <hr class="divider" />
      <p>
      {{ comment.content }}
      </p>
      <hr class="dropdown-divider" />
      <div class="container " style="display: flex;justify-content:space-between;flex-direction:row">
      <button class="button ml-2 mr-2 is-link" @click="emit('edit-Clicked',comment);editing(key)" style="width: 50%;"> Edit </button>
      <button class="button ml-2 mr-2 is-danger" @click="emit('delete-Clicked',comment)" style="width: 50%;"> Delete </button>
      </div>
    </div>
    </template>

 