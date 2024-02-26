<script setup lang="ts">
import addEditNote from './addEditNote.vue'
import Comments from './Comments.vue'
import { ref ,reactive,onMounted} from 'vue'

const action=ref('')
const modelValue=ref('')
const notes=ref([])
const obj=ref({})
const disableButton=ref('add')
let index:number;
let commentFromLocal:[]
type Commenting={
    [key: string]: any
}
const comments:Commenting = reactive([
    
])

const addComment=()=>{
    if(action.value=='add'){
    let currentStamp= new Date().getTime()
    let id =currentStamp.toString()
    let note={
         id: id,
         content:modelValue.value,
     }
     notes.value.push(note)
     if(filteredNotes.value.length<count*currentPageLoad){
        // debugger;
 filteredNotes.value.push(note)
     }
    
     saveInStorage(notes.value)
     resetText()
     modelValue.value=''
     
}
else
{
    for(let i=0;i<notes.value.length;i++){
    if(notes.value[i]==obj.value){
    notes.value[i]=obj.value
    filteredNotes.value[i]=obj.value
    modelValue.value=''
        break;  
    }
}
saveInStorage(notes.value)
resetText()
action.value='add'
}
}

const editComment=(value)=>{
    action.value='edit'
        obj.value=value
    // alert(value.id+value.content+obj.value.content)
}

function saveInStorage(ids){
            localStorage.setItem("commentDataBase",JSON.stringify(ids))
         }
         const loadFromStoragex=()=>{
            const dataFromLocal = localStorage.getItem("commentDataBase");
             commentFromLocal = dataFromLocal !== null ? JSON.parse(dataFromLocal) : [];
             return commentFromLocal;

        }

function deleteComment(value){
    // alert(value.id+value.content)
    obj.value=value
    saveInStorage([])
    for(let i=0;i<notes.value.length;i++){
    if(notes.value[i]==obj.value){
    index=i;
    break;
}
          
}
    obj.value={}
    notes.value.splice(index,1)
    filteredNotes.value.splice(index,1)
        saveInStorage(notes.value)
    
}
const filteredNotes=ref([])
let currentPageLoad=5;
let count=0;
function customLoading(){
    if(notes.value.length==0){
        count++;
    }
    // debugger;
    if(notes.value.length>filteredNotes.value.length){
    count++;
    const items=ref({})
    if(notes.value.length>0){
        const perPage=currentPageLoad;
        for(let i=(count-1)*perPage;i<notes.value.length;i++){
        if(i==count*perPage){
            break;
        }
            items.value=notes.value[i];
        filteredNotes.value.push(items.value);
    }
}
    }
}

function resetText(){
    obj.value={}
}
onMounted(() => {
    notes.value=loadFromStoragex();
    action.value='add'
    customLoading()
})
</script>

<template>
<addEditNote v-model="modelValue"
:action="action"
:obj="obj"
:disableButton="disableButton=modelValue"
@add-clicked="addComment()">

</addEditNote>
<!-- <pre>{{modelValue}}</pre> -->

<Comments v-for="comment in filteredNotes" :key="comment.id" :comment="comment" @edit-Clicked="editComment" @delete-Clicked="deleteComment"></Comments>
<button @click="customLoading" v-show="notes.length>=5">View More</button>
</template>