import Axios from 'axios'

const state = {
    dirTree: null,
    openedDirs: []
};

const getters = {
    getDirTree: state => state.dirTree
}

const mutations = {
    SET_DIR_TREE: (state, dirTree) => {
        
        state.dirTree = dirTree

    },
    ADD_TO_DIR_TREE: (state, dirTree) => {

        //Писк индекса объекта массива, которой был открыт
        const foundedIndex = state.dirTree.children.findIndex(item => item.id === dirTree.id)

        //Для хранения ссылки на объект
        let current = null

        //Если индекс найден в первоначальной структуре задаем current
        if(foundedIndex!==-1){
            current = state.dirTree.children[foundedIndex]
        //В противном случае, ищем индекс объекта, открываемой дирректории в массиве ссылок на открытые дирректории
        }else{
            for(const openedDir of state.openedDirs){
                const foundedIndexInOpenDir = openedDir.children.findIndex(item => item.id === dirTree.id)
                if(foundedIndexInOpenDir!==-1){
                    current = openedDir.children[foundedIndexInOpenDir]
                    break;
                }
            }
        }

        //Добавляем дирректорию в массив открытых дирректорий
        state.openedDirs.push(current)

        current.children.push(...dirTree.children)

    }
}

const actions = {
    async loadDirTree({commit}){

        const dirTree  = (await Axios.get(`http://164.90.161.80:3000/api/content`)).data

        commit('SET_DIR_TREE', dirTree)

    },
    async addToDirTree({commit, state }, id){

        const foundedDir = state.openedDirs.find(dir => dir.id === id)

        //Если дирректория найдена в массиве открытых дирректорий, то дальнейшие действия не имеют смысла
        if(!foundedDir){

            const dirTree  = (await Axios.get(`http://164.90.161.80:3000/api/content?dirId=${id}`)).data

            commit('ADD_TO_DIR_TREE', dirTree)

        }

    }
}

export default {
    state,
    getters,
    mutations,
    actions,
};