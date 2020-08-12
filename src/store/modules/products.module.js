const state = {
	products: [
		{name: "Banana Skin", price: 20},
		{name: "Shiny Star", price: 50},
		{name: "Green Shells", price: 10},
		{name: "Red Shells", price: 30},
	],
}

const getters = {
	// These act like computed properties except from Vuex
	saleProducts(state) {
		return state.products.map(product => {
			return {
				name: '**' + product.name + '**',
				price: product.price / 2,
			}
		})
	}
}

const mutations = {
	// Shouldn't be doing asynchronous things in here...
	// These are synchronous and modify state.
	reducePrice(state, payload) {
		state.products.forEach(product => {
			product.price -= payload;
		})
	},

	increasePrice(state, payload) {
		state.products.forEach(product => {
			product.price += payload
		})
	}
}

const actions = {
	// These are asynchronous for API calls.
	// Actions use context.commit to dispatch a mutation, which changes/sets state.
	reducePrice(context, payload) {
		setTimeout(() => {
			context.commit('reducePrice', payload)
		}, 500)
	},

	increasePrice(context, payload) {
		setTimeout(() => {
			context.commit('increasePrice', payload)
		}, 500)
	}
}

export default {
	namespaced: true,
	name: 'products',
	state,
	getters,
	actions,
	mutations,
}
