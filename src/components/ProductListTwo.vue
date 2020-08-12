<template>
	<div :class="$style.root">
		<h2>Product List Two</h2>
		<ul :class="$style.list">
			<li :class="$style.item" v-for="(product, index) in saleProducts" :key="index">
				<span>{{ product.name }}</span>
				<span :class="$style.price">${{ product.price }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';

	export default {
		computed: {
			...mapState({
				products: state => state.products.products
			}),
			...mapGetters({
				saleProducts: 'products/saleProducts'
			})
		},
	}
</script>

<style lang="scss" module>
.root {
	background: #D1E4FF;
	box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
	margin-bottom: 30px;
	padding: 10px 20px;
}

.list {
	padding: 0;
	list-style-type: none;
}
.item {
	margin-right: 10px;
	margin-top: 10px;
	padding: 20px;
	background: rgba(255,255,255,0.7);
}

.price{
	font-weight: bold;
	color: #860CE8;
	display: block;
}
</style>
