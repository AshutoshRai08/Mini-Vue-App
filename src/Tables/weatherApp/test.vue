<script setup lang="ts">
import { ref } from 'vue';

const firstName=ref("")
const lastName=ref("")
</script>


<template>
<div class="control">
    <VInput v-model="firstName" aria-placeholder="fistName"></VInput>
    <VInput aria-placeholder="lastName" v-model="lastName"></VInput>
    <div v-if="firstName!='' || lastName!=''">{firstName.value}{lastName.value} </div>
</div>
</template>