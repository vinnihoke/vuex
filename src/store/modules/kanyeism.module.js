import axios from 'axios';

const state = {
	quote: '',
}

const mutations = {
	setQuote(state, quote) {
		state.quote = quote
	}
}

const actions = {
	getQuote(context) {
		axios.get('https://api.kanye.rest').then(response => {
			context.commit('setQuote', response.data.quote)
		})
	}
}

export default {
	namespaced: true,
	name: "kanyeism",
	state,
	mutations,
	actions,
}
