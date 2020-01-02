import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{
      title: '代办一',
      completed: true,
    },{
      title: '代办二',
      completed: false,
    }],
    filter: 'all',
  },
  getters: {
    allCompleted: (state) => {
      return state.todos.every(data => data.completed);
    },
    
    showTodo: (state) => {
      let filter = state.filter;
      return state.todos.filter(data => {
        if(filter === 'all'){
          return true
        }else if(filter === 'active'){
          return !data.completed
        }else if(filter === 'completed'){
          return data.completed
        }
      })
    },

    todosCount: (state) => {
      return state.todos.length;
    },

    hasCompleted: (state) => {
      return state.todos.some(data => data.completed);
    },
  },
  mutations: {
    addTodo(state, todo){
      state.todos.push(todo)
    },

    setAllCompleted (state, status) {
      state.todos.forEach(data => data.completed = status)
    },

    changeFilter (state, filter) {
      state.filter = filter
    },

    removeCompleted (state) {
      state.todos = state.todos.filter(data => !data.completed)
    },
  },
});
