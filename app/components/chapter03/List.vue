<template>
	<ul class="list-unstyled list-group">
		<li v-for="todo in this.$store.getters.todos"
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
	export default {
		name: 'List',
		props: [
			'status'
		],
		created () {
			this.$store.dispatch('getList');
		},
		methods: {
			isDone (todo) {
				return todo.doneDatetime !== null;
			},
			isActive(todo) {
				return this.isDone(todo) ? 'active' : '';
			},
			done (todo) {
				this.$store.dispatch('doneItem', todo);
			},
			edit ({target}, todo) {
				todo.text = target.value;

				this.$store.dispatch('editItem', todo);
			},
			remove (id) {
				this.$store.dispatch('removeItem', id);
			}
		}
	};
</script>