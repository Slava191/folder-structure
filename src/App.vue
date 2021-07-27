<template>
  <Dir :content="getDirTree"/>
  <div>{{getDirTree}}</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Dir from '@/components/Dir.vue'

export default {
  name: 'App',
  components: { Dir },
  // data(){
  //     return {
  //         content: null
  //     }
  // },
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

