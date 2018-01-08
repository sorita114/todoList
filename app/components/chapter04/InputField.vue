<template>
	<div class="input-group mb-3">
		<input type="text"
			   class="form-control"
			   placeholder="입력하세요."
			   @keyup.enter="add"
			   v-model="text">
		<div class="input-group-append">
			<button type="button"
					class="btn btn-outline-secondary"
					@click.prevent="add">저장
			</button>
		</div>
	</div>
</template>
<script>
	import {
		LIST_TODO_ADD_ITEM,
		INPUT_FIELD_INPUT_TEXT,
		INPUT_FIELD_UPDATE
	} from '../../store_1/types';

	export default {
		name : 'InputField',
		computed : {
			text : {
				get () {
					return this.$store.getters[INPUT_FIELD_INPUT_TEXT];
				},
				set (value) {
					this.$store.dispatch(INPUT_FIELD_UPDATE, value);
				}
			}
		},
		methods : {
			add () {
				this.$store.dispatch(LIST_TODO_ADD_ITEM, {
					text : this.$store.getters[INPUT_FIELD_INPUT_TEXT]
				});
			}
		}
	};
</script>