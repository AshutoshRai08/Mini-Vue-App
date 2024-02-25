<script setup lang="ts">
import { ref } from 'vue'
// import {defineProps} from 'vue'


const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void;
    (event: 'add-clicked'): void;
  
}>();
const props=defineProps<{
obj:Object;
action:string
disableButton:string
}
>()
const textarea = ref('')
const loading = ref(true)

const AddingComment=()=>{
    emit('add-clicked')
}
const saveEdit=()=>{
    emit('add-clicked')
}
 
</script>

<template>
  <div class="card has-background-success-dark p-4 mb-6" >
    <div class="field" >
    <div class="control" :loading="loading" >
      <textarea style="width: 100%;"
        v-model="obj.content"
        @keypress.enter="AddingComment"
        v-on:input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        rows="7"
        placeholder="Add Comment..."
      ></textarea>
    </div>
    </div>
    <hr class="dropdown-divider" />
    <div class="field is-grouped is-grouped-right">
    <div class="control" textaddon v-show="action=='add'">
        <button class="button is-link" raised @click="AddingComment()" :disabled="disableButton==''">Add Comment</button>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
    <div class="control" textaddon v-show="action=='edit'">
        <button class="button is-success"  action='edit' @click="saveEdit()">Save</button>
      </div>
    </div>
  </div>
  <hr class="divider has-background-danger" v-show="action=='add'" />
  
  <!-- {{ action }} -->
</template>