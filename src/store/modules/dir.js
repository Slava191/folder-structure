import Axios from 'axios'

const state = {
    dirTree: null
};

const getters = {
    getDirTree: state => state.dirTree
}

const mutations = {
    setDirTree: (state, dirTree) => {
        
        state.dirTree = dirTree

        console.log(state.dirTree)
    }
}

const actions = {
    async loadDirTree({commit}){

        const dirTree  = (await Axios.get(`http://164.90.161.80:3000/api/content`)).data

        

        commit('setDirTree', dirTree)

    },
}

export default {
    state,
    getters,
    mutations,
    actions,
};