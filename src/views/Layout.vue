<template>
  <div class="todoapp">
    <the-header />
    <the-main />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheMain from '@/components/TheMain';
import TheFooter from '@/components/TheFooter';
import "@/assets/index.css"

export default {
  name: 'app',
  components: {
    'the-header':TheHeader,
    'the-main':TheMain,
    'the-footer':TheFooter,
  }
}
</script>