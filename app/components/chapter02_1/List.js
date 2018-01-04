import doneTODOList from '../../assets/js/doneTODOList';
import getTODOList from '../../assets/js/getTODOList';
import editTODOList from '../../assets/js/editTODOList';

const template = '<ul class="list-unstyled">' +
	'<li v-for="todo in todos"' +
	':class="isActive(todo)">' +
	'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
			'<div class="input-group-text">' +
				'<input type="checkbox"' +
				'@click="done(todo)"' +
				':checked="isDone(todo)">' +
			'</div>' +
		'</div>' +
		'<input type="text" ' +
		'@keyup.enter="edit($event, todo)"'+
		'class="form-control" ' +
		':disabled="isDone(todo)" '+
		':value="todo.text">'+
	'</div>'+
	'</li>' +
'</ul>';

const List = {
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
		}
	}
};

export default List;
