<template>
	<div class="card">
		<div class="card-header">
			<span>TODO List</span>
			<span class="badge badge-primary badge-pill">{{totalCount}}</span>
		</div>
		<div class="card-body">
			<input-field></input-field>
			<list></list>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {LIST_TODO_TOTAL_COUNT} from '../../store_1/types';
	import InputField from '../../components/chapter04/InputField.vue';
	import List from '../../components/chapter04/List.vue';

	export default {
		name: "TODOListBody",
		components : {
			InputField,
			List
		},
		computed: {
			...mapGetters({
				totalCount : LIST_TODO_TOTAL_COUNT
			})
		}
	};
</script>

<style scoped>

</style>