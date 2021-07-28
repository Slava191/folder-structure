<template>

    <div v-if="content!==null">
            <div v-for="item of content.children" :key="item.id">
                <template v-if="item.hasOwnProperty('children')">
                    <span @click="openStatus[item.id] = !openStatus[item.id]" style="cursor:pointer;user-select: none">
                        <i :class="`bi bi-folder2${openStatus[item.id] ? '-open' : ''}`"></i> 
                        {{item.title}}
                    </span>
 
                    <Dir 
                        v-if="openStatus[item.id]" 
                        :content="item" 
                        style="margin-left:20px;"
                    />
           
                </template>
                <template v-else>
                    <span>
                        <i class="bi bi-file-earmark"></i> 
                        {{item.title}}
                    </span>
                </template>
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