<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue';
import { object } from 'zod';

const smallFormOpen = ref(false)

const prop =defineProps({
    Modale:{type:Object,required:true},
})
</script>

<template>
    <div class="modale-view">
  <VButton bold @click="smallFormOpen = true"> Open Modal </VButton>
  <VModal
    is="form"
    :open="smallFormOpen"
    title="Leave a Comment"
    size="small"
    actions="right"
    @submit.prevent="smallFormOpen = false"
    @close="smallFormOpen = false"
  >
    <template #content>
      <div class="modal-form">
        <div class="field">
          <label>Username *</label>
          <div class="control">
            <input type="text" class="input" placeholder="Username" />
          </div>
        </div>
        <div class="field">
          <label>Email *</label>
          <div class="control">
            <input type="text" class="input" placeholder="Email Address" />
          </div>
        </div>
        <div class="field">
          <label>Comment *</label>
          <div class="control">
            <textarea class="textarea" rows="4" placeholder="Your message..."></textarea>
          </div>
        </div>
      </div>
    </template>
    <template #action>
      <VButton type="submit" color="primary" raised>Publish</VButton>
    </template>
  </VModal>
  </div>
</template>