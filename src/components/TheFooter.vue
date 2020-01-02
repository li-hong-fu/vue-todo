<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{todosCount}}</strong> todo
    </span>
    <ul class="filters">
      <li>
        <a href="/all" :class="{selected: filter === 'all'}">All</a>
      </li>
      <li>
        <a href="/active" :class="{selected: filter === 'active'}">Active</a>
      </li>
      <li>
        <a href="/completed" :class="{selected: filter === 'completed'}">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" 
      v-show="hasCompleted"
      @click="handleRemoveAllCompletedTodo"
      >Clear completed</button>
  </footer>
</template>

<script>
export default {
  name:'TheFooter',
  created() {
    this.fetchFilter();
  },
  watch: {
    '$route': 'fetchFilter'
  },
  computed: {
    filter() {
      return this.$store.state.filter
    },
    todosCount(){
      return this.$store.getters.todosCount;
    },
    hasCompleted() {
      return this.$store.getters.hasCompleted
    },
  },
  methods: {
    handleRemoveAllCompletedTodo: function() {
      this.$store.commit('removeCompleted')
    },
    fetchFilter: function() {
      let filter = this.$route.params.filter
      this.$store.commit('changeFilter', filter)
    }
  }
}
</script>