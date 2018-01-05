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
	export default {
		name : 'InputField',
		computed : {
			text : {
				get () {
					return this.$store.getters.inputText;
				},
				set (value) {
					this.$store.dispatch('update', value);
				}
			}
		},
		methods : {
			add () {
				this.$store.dispatch('addItem', {
					text : this.$store.getters.inputText
				});
			}
		}
	};
</script>