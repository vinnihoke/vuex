import Vue from 'vue';
import Vuex from 'vuex';
import createCache from 'vuex-cache';
import createPersistedState from "vuex-persistedstate";
import products from './modules/products.module';
import kanyeism from './modules/kanyeism.module';

Vue.use(Vuex);

const dataState = createPersistedState({
	paths: ["products", "kanyeism"]
})

export default new Vuex.Store({
	strict: true,
	modules: {
		products,
		kanyeism
	},
	plugins: [
		createCache(),
		dataState
	]
})
