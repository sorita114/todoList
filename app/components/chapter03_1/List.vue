<template>
	<ul class="list-unstyled list-group">
		<li v-for="todo in todos"
			class="list-group-item">
			<div class="input-group">
				<div class="input-group-prepend">
					<div class="input-group-text">
						<input type="checkbox"
							   @click="done(todo)"
							   :checked="isDone(todo)">
					</div>
				</div>
				<input type="text"
					   @keyup.enter="edit($event, todo)"
					   class="form-control"
					   :disabled="isDone(todo)"
					   :value="todo.text">
				<div class="input-group-append">
					<button type="button"
							class="btn btn-outline-secondary"
							@click.prevent="remove(todo.id)">삭제
					</button>
				</div>
			</div>
		</li>
	</ul>
</template>
<script>
	import {mapGetters} from 'vuex';
	import {
		LIST_TODO,
		LIST_TODO_GET_LIST,
		LIST_TODO_REMOVE_ITEM,
		LIST_TODO_UPDATE_ITEM
	} from '../../store_1/types';

	export default {
		name: 'List',
		props: [
			'status'
		],
		created () {
			this.$store.dispatch(LIST_TODO_GET_LIST);
		},
		computed : {
			...mapGetters({
				todos : LIST_TODO
			})
		},
		methods: {
			isDone (todo) {
				return todo.doneDatetime !== null;
			},
			isActive(todo) {
				return this.isDone(todo) ? 'active' : '';
			},
			done (todo) {
				todo.doneDatetime = !todo.doneDatetime ? new Date().getTime() : null;

				this.$store.dispatch(LIST_TODO_UPDATE_ITEM, todo);
			},
			edit ({target}, todo) {
				todo.text = target.value;

				this.$store.dispatch(LIST_TODO_UPDATE_ITEM, todo);
			},
			remove (id) {
				this.$store.dispatch(LIST_TODO_REMOVE_ITEM, id);
			}
		}
	};
</script>