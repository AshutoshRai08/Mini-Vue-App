<template>
    <div>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" >
        
  <tbody class="dataBody">
    <tr>
      <td>{{table.EmpId}}</td>
      <td>{{table.name}}</td>
      <td>{{table.Salary}}</td>
      <td>{{table.Department}}</td>
      <td class="field is-grouped is-grouped-right"><RouterLink :to="`/viewTable/${table.id}`"><button class="button is-link has-background-success ml-2 ">View</button></RouterLink> 
        <RouterLink :to="`/editTable/${table.id}`"><button class="button is-link has-background-success ml-2 ">Edit</button></RouterLink> </td> 
    </tr>
</tbody>
        </table>  
    </div>
   
</template>

<script setup lang="ts">
const props = defineProps({
    table:{type:Object,
    required:true}
})

</script>
<style scoped>
td{
    text-align: left;
}
.dataBody{
    text-align: left;
    column-width: 10rem;
}
</style>