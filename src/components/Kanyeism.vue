<template>
	<div :class="$style.root">
		<h3>{{ quote }}</h3>
		<button @click="getQuote">Get a quote</button>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	computed: {
		...mapState({
			quote: state => state.kanyeism.quote
		}),
	},
	methods: {
		...mapActions({
			getQuote: 'kanyeism/getQuote'
		})
	},
}
</script>

<style lang="scss" module>
.root {
	padding: 32px 24px;
}
</style>
