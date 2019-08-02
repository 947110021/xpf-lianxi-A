import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

import duodianJson from '../data/duodian.json'
import areaJson from '../data/area.json'

export default new Vuex.Store({
    state: {
        duodianJson,
        areaJson,
        list: []
    },
    getters: {},
    mutations: {
        setareaJson(state, data) {
            state.list = data
        }
    },
    actions: {
        getareaJson({ commit }) {
            axios.get("/list").then(({ data }) => {
                console.log(data)
                commit("setareaJson", data)
            })
        }
    }
})