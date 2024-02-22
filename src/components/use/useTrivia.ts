/**
 * useTrivia Composable for handling trivia quiz module
 */
import { watch, ref, reactive } from "vue";
import todoConfig from "../views/taskManager/todo.config.js"

function useTrivia() {
  
  const triviaObj = reactive({
    score: ref(0),
    currentQuestionIndex:ref(0),
    currentQuestion: ref(questions.value[0]),
    allQuestion: ref(questions.value),
    nextQuestion:function(){
        currentQuestionIndex++;    
        currentQuestion = ref(questions.value[currentQuestionIndex])
    },
    reTest:function(){
        currentQuestionIndex=0;
        currentQuestion = ref(questions.value[currentQuestionIndex])
    }
  });

  return { triviaObj };
}

export default useTrivia;
