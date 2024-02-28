<template>
  <div>
      <vue-good-table
 
    :columns="column"
    :rows="listItems"
    :search-options="{ enabled: true }"
    :line-numbers="true"
    :pagination-options="{
      enabled: true,
      perPage: 5
    }"
  > 
  <!-- <template #table-actions>
    
      <VButton bold @click="action='addContact'; resetForm()" color="primary" class="filters-pull-right hidden-touch"> Add Contact </VButton>
      <modalView :action="action" :formSubmit="formSubmit" :obj1="obj1" @Close-Clicked="handleClose()" :activeTab="activeTab" :officeTab="officeTab" @update:modelValue1="toggleOffice()" @update:modelValue2="toggleActive()"></modalView>
    </template> -->
   
    </vue-good-table>
  </div>
  <div class="control">
    <VInput v-model="firstName" aria-placeholder="fistName"></VInput>
    <VInput aria-placeholder="lastName" v-model="lastName"></VInput>
    <div v-if="firstName!='' || lastName!=''">{firstName.value}{lastName.value} </div>
</div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';

const firstName=ref("")
const lastName=ref("")
const listItems = ref([]);

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // debugger
  const finalRes =  await res.json();
  // debugger
  listItems.value = finalRes;
  // debugger;
  console.log(listItems.value);
 
}
getData()
type COLUMN={
      [key: string]: any
    }
   const column:COLUMN=reactive([
    
  //  {
  //       label: 'User',
  //       field: 'userId',
  //       html:true,
  //       globalSearchDisabled: true,
        
  //     },
   {
        label: 'User',
        field: 'userId',
      },
      {
        label: 'ID',
        field: 'id',
        type: 'string',
      },
      {
        label: 'Title',
        field: 'title',
        type: 'string',
      //   globalSearchDisabled: true,
      },
      {
        label: 'Status',
        field: 'completed',
        type: 'boolean',
        globalSearchDisabled: true,
  //       filterOptions: {
//         styleClass: 'class1', // class to be added to the parent th element
  //       enabled: true, // enable filter for this column
  //       placeholder: 'Select Role', // placeholder for filter input
  //       filterValue: '', // initial populated value for this filter
  //       filterDropdownItems:searchOptions, // dropdown (with selected values) instead of text input
  //   // filterFn: columnFilterFn, //custom filter function that
  //   // trigger: 'enter', //only trigger on enter not on keyup 
  // },
      },
      // {
      //   label:'Satus',
      //   field:'status',
      //   type:'string',
      //   globalSearchDisabled: true,
      // },
      // {
      //   label:'Out Of Office',
      //   field:'outOfOffice',
      //   type:'string',
      //   globalSearchDisabled: true,
      // },
      // {
      //   label:'Actions',
      //   field:'action',
      //   html:true,
      // }
      
    ]);
</script>