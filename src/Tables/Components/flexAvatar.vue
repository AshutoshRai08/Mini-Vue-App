<template>
    <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
        <VAvatar initials="VUE" size="big" color="warning" dot />
        </VFlex>
</template>

<script lang="ts">
import {defineProps} from 'vue'

const props=defineProps<{
vflex:Object;


}
>()


</script>