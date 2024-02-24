<script setup lang="ts">
// import { defineProps } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { computed,toRefs } from 'vue';

const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
});
const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void;
    (event: 'update:modelValue1', payload: boolean): void;
    (event: 'update:modelValue2', payload: boolean): void;
    (event: 'Close-Clicked'): void;

}>();
  

const optionsSingle = ['IT', 'HR', 'IT(Telephony)','DE']
const optionsSingle1 = ['Admin','Hiring Manager','Department Admin', 'HR Member']
const addFormOpen = computed(()=>{
  if(props.action=='addContact'||props.action=='edit'||props.action=='view'){
// alert("open form");
    return true
  }
  else
  return false
})

 const props=defineProps<{
action:string;
formSubmit:Function;
obj1:Object;
activeTab:boolean;
officeTab:boolean;
// switchAction:string

}
>()
const {officeTab}=toRefs(props)
const {activeTab}=toRefs(props)
const modalClosed = () => {
  emit('Close-Clicked')
}
// const updateSwitch=()=>{
//   emit('update:modelValue1',props.officeTab)
// }

</script>



<template>
  <div>
  
          <VModal
            
            is="form"
            :open="addFormOpen"
            title="Leave a Comment"
            size="large"
            actions="right"
            @submit="modalClosed()"
            @close="action='';modalClosed()"
          >
            <template #content>
              <Form @submit="formSubmit();modalClosed()" :validation-schema="schema" >
                              <!-- abc() -->
                              Testing ::: {{ obj1 }}
              <div class="modal-form" >
                
                <div class="field">
                  
                  <label>Employee Name *</label>
                  <div class="control">
                    <Field name="name"  placeholder="Username"  type="text" v-model="obj1.name" style="width: 100%;"
                    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :disabled="action=='edit'||action=='view'"/>
                    <ErrorMessage name="name" style="color: blue;" />
                  </div>
                
                </div>
                <div class="field">
                  <label>Email ID *</label>
                  <div class="control">
                   
                    <Field name="email" type="email"  placeholder="Email ID" v-model="obj1.email" style="width: 100%;"
                    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :disabled="action=='edit'||action=='view'" />
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
                        :disabled="action=='view'"
                        @select="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                      />
                      <ErrorMessage name="select" style="color: red;" />
                    </VControl>
                  </VField>
                </div>
                <div>
                  <label v-show="action=='addContact' || action=='view'">Department *</label>
                  <VField v-slot="{ id }" class="is-autocomplete-select">
                    <VControl expanded>
                      <Multiselect
                        v-model="obj1.department"
                        :disabled="obj1.role=='Admin' ||obj1.role=='Hiring Manager' ||action=='view'"
                        :attrs="{ id }"
                        :options="optionsSingle"
                        placeholder="Search Department......"
                        :searchable="true"
                        v-show="action=='addContact' || action=='view'"
                        @select="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                      />
                    </VControl>
                  </VField>
                  <label v-show="action=='edit'" style="background-color: antiquewhite;">Activity</label>
                  <VField horizontal>
                    <VControl>
                      <VSwitchSegment v-model="activeTab" label-true="ON" label-false="OFF" color="primary" v-show="action=='edit'"  
                      v-on:click="emit('update:modelValue2', activeTab)"/>
                    </VControl>
                  </VField>
                  <label v-show="action=='edit'" style="background-color:blueviolet;">Out Of Office</label>
                  <VField horizontal>
                    <VControl>
                      <VSwitchSegment v-model="officeTab" label-true="ON" label-false="OFF" color="primary" v-show="action=='edit'"  
                      v-on:click="emit('update:modelValue1', officeTab)"/>
                    </VControl>
                  </VField>
                
                </div>
              </div>
            
              <VButton type="submit" v-show="action=='addContact'" color="primary" raised @click="validate();action=''">Save</VButton>
                <!-- abc() -->
                <VButton type="submit" v-show="action=='edit'" color="primary" raised @click="action=''">Edit</VButton>
            </Form>
            </template>
          </VModal>
          
          
  </div>
</template>