<template>
  <Dir :content="getDirTree"/>
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

