<script setup lang="ts">


const props=defineProps<{
// crumbs:Object;

}
>()
const breadcrumb = [
  {
    label: 'Vuero',
    hideLabel: true,
    icon: 'feather:home',
    // use external links
    link: 'https://vuero.cssninja.io/',
  },

  {
    label: 'Vue-Table',
  },
  {
    label: 'Notepad',
    // hideLabel: true,
    to:'/starters/Tables/NotePad/ViewNotepad'
    // use external links
    // link: 'https://vuero.cssninja.io/',
  },
  {
    label: 'vueApiData',
    // hideLabel: true,
    to:'/starters/Tables/apiData/vueTableApi'

  },
  {
    label: 'vueResponse',
    // hideLabel: true,
    to:'/starters/Tables/apiData/repsoning'

  },
  {
    label: 'weatherApp',
    // hideLabel: true,
    to:'/starters/Tables/weatherApp/weatherApp'

  },
  {
    label: 'gitViewer',
    // hideLabel: true,
    to:'/github'

  },
]

</script>

<template>
  <VBreadcrumb :items="breadcrumb" separator="succeeds" />
 
</template>