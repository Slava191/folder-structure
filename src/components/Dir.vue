<template>
    <div v-if="content!==null">
        <div v-for="item of content.children" :key="item.id">
            <span @click="openStatus[item.id] = !openStatus[item.id]">
                {{item.title}}
            </span>
            <Dir 
                v-if="openStatus[item.id]" 
                :content="item" 
                style="margin-left:20px;"
            />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Dir',
    data(){
        return {
            openStatus: {}
        }
    },
    props: {
        content: {
            type: Object,
            default: function () {
                return null
            }
        },
    },
    async created(){

        if(this.content)
            await this.addToDirTree(this.content.id)
  
    },
    methods:{
        ...mapActions(['addToDirTree']),
    },
}
</script>