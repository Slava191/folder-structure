<template>
    <div v-if="content!==null">
        <div v-for="item of content.children" :key="item.id">
            <span @click="getDir(item.id)">{{item.title}}</span>
            <Dir :content="item"/>
        </div>
    </div>
</template>

<script>


export default {
    name: 'Dir',
    props: {
        content: {
            type: Object,
            default: function () {
                return null
            }
        },
    },
    // methods:{
    //     async getDir(id){
    //         this.content = (await this.axios.get(`http://164.90.161.80:3000/api/content/${id}`)).data
    //     }
    // },
}
</script>