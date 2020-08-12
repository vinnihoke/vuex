import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	strict: true,
	state: {
		products: [
			{name: "Banana Skin", price: 20},
			{name: "Shiny Star", price: 50},
			{name: "Green Shells", price: 10},
			{name: "Red Shells", price: 30},
		],
	},
	getters: {
		saleProducts(state) {
			return state.products.map(product => {
				return {
					name: '**' + product.name + '**',
					price: product.price / 2,
				}
			})
		}
	},
	mutations: {
		// Shouldn't be doing asynchronous things in here...
		reducePrice(state, payload) {
			state.products.forEach(product => {
				product.price -= payload;
			})
		}
	},
	actions: {
		reducePrice(context, payload) {
			// context.commit is how we dispatch a mutation.
			setTimeout(() => context.commit('reducePrice', payload), 3000)
		}
	}
})
