<template>
    <div>  
      <article class="panel is-success">
            <p class="panel-heading">{{ questions[0] }}</p>
            <div class="panel-block">
                <p class="control has-icons-left content">
                    <ul>
                        <li v-for="(option, index) in questionData.options" :key="index" @click="selectOption(index)">
                        {{ option }}
                        </li>
                    </ul>
                </p>
            </div>
        </article>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    questionData: Object
  });
  
  const emit = defineEmits();
  
  const selectOption = (index) => {
    emit('answer-selected', index);
  };
  const questions = ref([
    {
      question: 'Which of the following command is used to create react-js-app ?',
      options: ['npx create-react-app appname', 'npm install create-react-app', 'npx install create-react-app -g', 'install - l create-react-app'],
      correctAnswer: 0
    },
    {
      question: 'In React.js which one of the following is used to create a class for Inheritance ?',
      options: ['create', 'extend', 'inherits', 'delete'],
      correctAnswer: 1
    },
    {
      question: 'What is the default port number in which the application run ?',
      options: ['3000', '8080', '5000', '3030'],
      correctAnswer: 0
    },
    {
      question: 'Which of the following is a way to handle data in React.js ?',
      options: ['State & Props', 'Services & Components', 'State & Services', 'State & Component'],
      correctAnswer: 0
    },
    {
      question: 'Which of the following is must for the API in React.js ?',
      options: ['SetinitialComponent', 'renderComponent', 'render', 'All of the above'],
      correctAnswer: 1
    },
    {
      question: 'Which of the following is true regarding Babel ?',
      options: ['Compiler', 'Transpilar', 'Both of the above', 'None of the above'],
      correctAnswer: 2
    },
    {
      question: 'In React.js, how we can pass the data from one component to another in React.js ?',
      options: ['SetState', 'Render with arguments', 'Props', 'Proptypes'],
      correctAnswer: 2
    },
    {
      question: 'Which of the following function is true about changing the state in React.js ?',
      options: ['this.State{}', 'this.setState', 'this.setChangeState', 'All of the above'],
      correctAnswer: 1
    },
    {
      question: 'Which of the following method is true about referring parent class in React.js ?',
      options: ['Sels()', 'inherits()', 'this()', 'Super()'],
      correctAnswer: 3
    }
    // Add more question objects here
  ]);  
  </script>
  <style scoped>
  .content li:hover{
    margin-left:10px;
    text-decoration: underline;
    cursor: pointer;
  }
  </style>
  