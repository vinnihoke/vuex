<template>
	<div :class="$style.root">
		<h2>Product List One</h2>
		<ul :class="$style.list">
			<li :class="$style.item" v-for="(product, index) in saleProducts" :key="index">
				<span>{{ product.name }}</span>
				<span :class="$style.price">${{ product.price }}</span>
			</li>
		</ul>
		<button @click="reducePrice(4)">Reduce Price</button>
		<button @click="increasePrice(4)">Increase Price</button>
	</div>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex';

	export default {
		computed: {
			...mapState({
				products: state => state.products.products
			}),
			...mapGetters({
				saleProducts: 'products/saleProducts'
			})
		},
		methods: {
			...mapActions({
				reducePrice: 'products/reducePrice',
				increasePrice: 'products/increasePrice'
			}),
		}
	};
</script>

<style lang="scss" module>
.root {
	background: #FFF8B1;
	box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
	margin-bottom: 30px;
	padding: 10px 20px;
}

.list {
	padding: 0;
}
.item {
	display: inline-block;
	margin-right: 10px;
	margin-top: 10px;
	padding: 20px;
	background: rgba(255,255,255,0.7);
}

.price{
	font-weight: bold;
	color: #E8800C;
}
</style>
