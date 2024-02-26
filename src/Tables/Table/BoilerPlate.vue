----------------------------------------------------------------------------------------------
<template>
  <div>
      <VField v-slot="{ id }" grouped class="is-autocomplete-select" p-b-10>  
          <VModal
            is="form"
            :open="addFormOpen"
            title="Leave a Comment"
            size="large"
            actions="right"
            @submit="addFormOpen = false"
            @close="addFormOpen = false"
          >
            <template #content>
              <Form @submit="formSubmit();addFormOpen = false" :validation-schema="schema" >
                              <!-- abc() -->
                              Testing ::: {{ obj1 }}
              <div class="modal-form" >
                
                <div class="field">
                  
                  <label>Employee Name *</label>
                  <div class="control">
                    <Field name="name"  placeholder="Username"  type="text" v-model="obj1.name" style="width: 100%;"
                    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :disabled="edit==true || viewOnly==true"/>
                    <ErrorMessage name="name" style="color: blue;" />
                  </div>
                  {{obj1.name}}
                
                </div>
                <div class="field">
                  <label>Email ID *</label>
                  <div class="control">
                   
                    <Field name="email" type="email"  placeholder="Email ID" v-model="obj1.email" style="width: 100%;"
                    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :disabled="edit==true || viewOnly==true" />
                    <ErrorMessage name="email" style="color: red;" />
                    
                  </div>
                </div>
                <div>
                  <label>Role *</label>
                  <VField v-slot="{ id }" class="is-autocomplete-select">
                    <VControl expanded>
                      <Multiselect
                        name="selection"
                        v-model="obj1.role"
                        :attrs="{ id }"
                        :options="optionsSingle1"
                        placeholder="Search Roles...."
                        :searchable="true"
                        :isAutocompleteSelect="false"
                        :disabled="viewOnly==true"
                        @select="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                      />
                      <ErrorMessage name="select" style="color: red;" />
                    </VControl>
                  </VField>
                </div>
                <div>
                  <label v-show="edit==false">Department *</label>
                  <VField v-slot="{ id }" class="is-autocomplete-select">
                    <VControl expanded>
                      <Multiselect
                        v-model="obj1.department"
                        :disabled="obj1.role=='Admin' ||obj1.role=='Hiring Manager' ||viewOnly==true"
                        :attrs="{ id }"
                        :options="optionsSingle"
                        placeholder="Search Department......"
                        :searchable="true"
                        v-show="edit==false"
                        @select="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                      />
                    </VControl>
                  </VField>
                  <label v-show="edit==true" style="background-color: antiquewhite;">Activity</label>
                  <VField horizontal>
                    <VControl>
                      <VSwitchSegment v-model="SwitchVal" label-true="ON" label-false="OFF" color="primary" v-show="edit==true"  
                      v-on:click="SwitchVal=!SwitchVal"/>
                    </VControl>
                  </VField>
                  <label v-show="edit==true" style="background-color:blueviolet;">Out Of Office</label>
                  <VField horizontal>
                    <VControl>
                      <VSwitchSegment v-model="SwitchVal1" label-true="ON" label-false="OFF" color="primary" v-show="edit==true"  
                      v-on:click="SwitchVal1=!SwitchVal1"/>
                    </VControl>
                  </VField>
                
                </div>
              </div>
              <VButton type="submit" v-show="edit==false && viewOnly==false" color="primary" raised @click="validate();addFormOpen = false">Save</VButton>
                <!-- abc() -->
                <VButton type="submit" v-show="props.edit==true" color="primary" raised @click="validate();addFormOpen = false">Edit</VButton>
            </Form>
            </template>
          </VModal>
          
          </VField>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { boolean } from 'zod';



const props=defineProps<{
  obj1:Object
  edit:boolean
}
>()


</script>
---------------------------------------------------------------------------------------------
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { Ref,reactive } from 'vue'
import packageJson from '../../package.json'
import { useDarkmode } from '/@src/stores/darkmode'
import VButtonVue, { VButtonColor } from '../components/base/button/VButton.vue'
import { type } from 'os'
import { boolean } from 'zod'
// import {useTable} from "./usePage.ts"

// const {loadRows,rowList} = useTable();
import { Field, Form, ErrorMessage,useField } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  // selection: yup.string().required(),
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
function saveInStorage(){
            localStorage.setItem("empDatabase",JSON.stringify(rows))
            // insert into empDatabase 
        }
       function loadFromStoragex(){
            const dataFromLocal = localStorage.getItem("empDatabase");
            // this.tableData = dataFromLocal === null ? ref([]) : dataFromLocal
            // select * from empDatabase
        }

type TabId = 'elements' | 'components' | 'forms' | 'plugins'
const activeTab = ref<TabId>('elements')
const darkmode = useDarkmode()
const router = useRouter()
import { ref } from 'vue'
import Modal from '../../elements/modal.vue'
// import { useResetForm } from 'vee-validate'
const smallFormOpen = ref(false)
// const addinTab=()=>{
//     tableobj.addTable()
//     console.log(tableobj.tableData);
//     console.log(store);
// useHead({
//   title: 'Vuero - A complete Vue 3 design system',
// })
  // function abc(){
            //   if(edit.value==false){
            //   rows.push({
            //      name:obj1.value.name, email:obj1.value.email, department:obj1.value.department,role: obj1.value.role
            //   })
            //   saveInStorage(rows)
            //   resetForm()
            // }
                          
            //   }
              
            let updatingArray=ref([]);
const Emp=ref('')
const email_input=ref('')

const valueSingle1 = ref([])
const optionsSingle = ['Batman', 'Robin', 'Joker']
const optionsSingle1 = ['Batman', 'Robin', 'Joker','Batman1']
// const redirectToAdd = () => {
//   router.push('/starters/Tables/ModalView.vue')
// 
        const newData=ref('')
        const newData2=ref('')
        const newData3=ref('')
        const newData4=ref('')
// const columns = [
//         // {
//         //   label:'Sr No.',
//         //   field:'numberin',
//         //   type:'Boolean (default: false)',
//         // },
//         {
//           label: 'Name',
//           field: 'name',
//         },
//         {
//           label: 'Age',
//           field: 'age',
//           type: 'number',
//         },
//         {
//           label: 'Created On',
//           field: 'createdAt',
//           type: 'date',
//           dateInputFormat: 'yyyy-MM-dd',
//           dateOutputFormat: 'MMM do yy',
//         },
//         {
//           label: 'Percent',
//           field: 'score',
//           type: 'percentage',
//         },
//         {
//           label:'Actions',
//           field:'buttons',
//           type:'buttons'
//         }
//       ];
      // const fixed-header=Boolean(default:false);
      function resetForm(){
      props.modelValue==''
      props.valueSingle==''
      newData2.value=''
      newData.value=''
      newData3.value=''
      newData4.value=''
      }
      type ROWS={
        name:string, 
        email:string,
        department:string,
        role:string
        
      }
      const rows:ROWS[] =reactive([
   
      
      ]);
      function abc(){
        rows.push({
           name:newData.value, email:newData2.value, department:newData3.value,role: newData4.value
        }
        )
        resetForm()
          saveInStorage(rows)
      }
      type COLUMN={
        // name: string;
        [key: string]: any; 
  
      }
     const columns:COLUMN=[
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Email ID',
          field: 'email',
          type: 'string',
        },
        {
          label: 'Department',
          field: 'department',
          type: 'string',
          // dateInputFormat: 'yyyy-MM-dd',
          // dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Role',
          field: 'role',
          type: 'string',
        },
        {
          label:'Actions',
          field:'buttons',
          type:'buttons'
        }
      ];

 const props=defineProps<{
  modelValue: string,
  valueSingle : string

}
>()
// newData= props.modelValue
const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void;
}>();
// function beingclicked(){
//   console.log("I am being Clicekd");
  
// }

// interface ROWS {
//     name: string;
//     age: number;
//     createdAt:Date;
//     score:number;
//   }
  
//  let rows=reactive( [
//         { id:1, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
//         { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
//         { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
//         { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
//         { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
//         { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
//       ]);
      const row = {
        
    name: "Alex",
    email: newData2,
    createdAt:"2023-03-01",
    score:33,

  };
  //     const row1: ROWS = {
  //   name: "Alex11",
  //   age: 3511,
  //   createdAt:new Date(2023,3,1),
  //   score:33,

  // };
  
  const addRows=()=>{
    rows.push(row);
    console.log(rows);
    
  }
  // console.log(rows);


      // rows = [];
// const addRows = ()=>{
//   rows.push({ id:7, name:"John", age: 20, createdAt: '2011-08-03', score: 0.03343 });
// }      

  // const people: Employee[] = [];
  
  // const employee: Employee = {
  //   name: "Alex",
  //   age: 35
  // };
  // const employeee: Employee = {
  //   name: "Alex1",
  //   age: 352
  // };
  
  // people.push(employee);
  // const addRows=()=>{
  //   people.push(employeee)
  //   console.log(people);
    
  // }
  // console.log(people);

  // onMounted(()=>{
  //      loadRows(); 
  //     })
</script>


    





<template>
  <!-- <VButton bold  @click=addRows() color="primary" class="filters-pull-right hidden-touch"> Add Contact </VButton> -->
  <!-- <vue-good-table
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :pagination-options="{
        enabled: true,
        perPage: 5
      }" -->
<!--   
    ></vue-good-table> -->
    
  <div class="table-data">

        <div class="filters filters-autoflow section-box">
        
  <VField v-slot="{ id }" grouped class="is-autocomplete-select" p-b-10>
    <VControl v-slot="{ id }" expanded>
      <Multiselect
        v-model="valueSingle"
        :attrs="{ id }"
        :options="optionsSingle"
        placeholder="Search heroes..."
        :searchable="false"
      />
    </VControl>

    <VControl  class="hidden-touch" v-slot="{ id }" is-right expanded>
      <Multiselect
        v-model="valueSingle1"
        :attrs="{ id }"
        :options="optionsSingle1"
        placeholder="Search heroes..."
        :searchable="true"
      />
    </VControl>

  <VButton bold @click="smallFormOpen = true" color="primary" class="filters-pull-right hidden-touch"> Add Contact </VButton>
  <VModal
    is="form"
    :open="smallFormOpen"
    title="Leave a Comment"
    size="large"
    actions="right"
    @submit.prevent="smallFormOpen = false"
    @close="smallFormOpen = false"
  >
    <template #content>
      <Form @submit="abc()" :validation-schema="schema" >
      <div class="modal-form" >
        
        <div class="field">
          
          <label>Emplyee Name *</label>
          <div class="control">
            <Field name="name"  placeholder="Username"  type="text" v-model="newData" style="width: 100%;"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
            <ErrorMessage name="name" style="color: blue;" />
          </div>
          {{newData2}}
        
        </div>
        <div class="field">
          <label>Email ID *</label>
          <div class="control">
           
            <Field name="email" type="email"  placeholder="Email ID" v-model="newData2" style="width: 100%;"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
            <ErrorMessage name="email" style="color: red;" />
            
          </div>
        </div>
        <div>
          <label>Role *</label>
          <VField v-slot="{ id }" class="is-autocomplete-select">
            <VControl expanded>
              <Field><Multiselect
                name="selection"
                v-model="newData4"
                :attrs="{ id }"
                :options="optionsSingle1"
                placeholder="Search heroes..."
                :searchable="true"
              /></Field>
              <ErrorMessage name="select" style="color: red;" />
            </VControl>
          </VField>
        </div>
        <div>
          <label>Department *</label>
          <VField v-slot="{ id }" class="is-autocomplete-select">
            <VControl expanded>
              <Multiselect
                v-model="newData3"
                :attrs="{ id }"
                :options="optionsSingle"
                placeholder="Search heroes..."
                :searchable="true"
                @select="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
              />
            </VControl>
          </VField>
        </div>
      </div>
      <button style="color:rgb(25, 67, 25);padding:5px;background-color:green">Submit</button>
      <!-- <button type="button" @click="validate;abc();smallFormOpen">saving</button> -->
      <!-- <VButton type="submit" color="primary" raised @click="validate();abc();smallFormOpen = false">Save</VButton> -->
     </Form>
    </template>
  </VModal>
  
  </VField>
  </div>
  <div id="vuero-Tab" class="section-title has-text-centered">
    <vue-good-table
      :columns="columns"
      :rows=rows
      :line-numbers="true"
      :pagination-options="{
        enabled: true,
        perPage: 5
      }"
    >   
    <template slot="table-row" slot-scope="props">
      <span v-if="columns.field == 'email'">
        <span style="font-weight: bold; color: blue;">{{columns.email}}</span> 
      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>

  

    </vue-good-table>
  </div>
</div>

</template>
<style lang="scss">
.multiselect {
  @media (max-width: 1366px) {
    width: 100%;
  }
}
</style>