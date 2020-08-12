import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products.module';
import kanyeism from './modules/kanyeism.module';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	modules: {
		products,
		kanyeism
	}
})
