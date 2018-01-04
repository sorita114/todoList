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
	import addTODOList from "../../assets/js/addTODOList";

	export default {
		name : 'InputField',
		data : function () {
			return {
				text: ''
			}
		},
		methods : {
			add () {
				addTODOList({
					text : this.text
				}).then(() => {
					this.text = '';
					this.$emit('addlist', 'add');
				});
			}
		}
	};
</script>