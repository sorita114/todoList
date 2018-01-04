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
	import doneTODOList from '../../assets/js/doneTODOList';
	import getTODOList from '../../assets/js/getTODOList';
	import removeTODOList from '../../assets/js/removeTODOList';
	import editTODOList from '../../assets/js/editTODOList';

	export default {
		name: 'List',
		template,
		data() {
			return {
				todos: []
			}
		},
		props: [
			'status'
		],
		created () {
			this.getList();
		},
		watch : {
			status () {
				this.getList();
			}
		},
		methods: {
			isDone (todo) {
				return todo.doneDatetime !== null;
			},
			isActive(todo) {
				return this.isDone(todo) ? 'active' : '';
			},
			done (todo) {
				doneTODOList(todo)
					.then(() => {
						this.$emit('changestatus', 'done');
					});
			},
			getList () {
				getTODOList()
					.then((response) => {
						this.todos = response.data._embedded.todos;
						this.$emit('totalcount', this.todos.length);
					});
			},
			edit (event, todo) {
				todo.text = event.target.value;
				editTODOList(todo)
					.then(() => {
						this.$emit('changestatus', 'edit');
					});
			},
			remove (id) {
				removeTODOList(id)
					.then(() => {
						this.$emit('changestatus', 'remove');
					});
			}
		}
	};
</script>