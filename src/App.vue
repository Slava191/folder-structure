<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Дерево директорий</span>
    </div>
  </nav>
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <Dir :content="getDirTree"/>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Dir from '@/components/Dir.vue'

export default {
  name: 'App',
  components: { Dir },
  computed:{
    ...mapGetters(['getDirTree'])
  },
  methods:{
    ...mapActions(['loadDirTree'])
  },
  async created(){
      await this.loadDirTree()
  }
}
</script>

