<template>
  <div id="app">

     <navbar></navbar>

    <div class="container">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
 import navbar from '@/components/NavBar.vue';

export default {
  name:'app',
  components:{
    navbar
  }
}
</script>
