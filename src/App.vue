<template>
	<div id="app">
		<kanyeism></kanyeism>
		<product-list-one></product-list-one>
		<product-list-two></product-list-two>
	</div>
</template>

<script>
	import ProductListOne from './components/ProductListOne.vue';
	import ProductListTwo from './components/ProductListTwo.vue';
	import Kanyeism from './components/Kanyeism.vue';

	export default {
		name: 'App',
		components: { ProductListTwo, ProductListOne, Kanyeism },
	}
</script>
