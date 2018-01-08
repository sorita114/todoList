<template>
	<div class="card border-dark">
		<div class="card-header bg-info">
			<span>Search</span>
		</div>
		<div class="card-body text-dark">
			<div class="input-group mb-3">
				<input type="text"
					   class="form-control"
					   placeholder="검색어를 입력하세요."
					   @keyup.enter="search"
					   v-model="text">
				<div class="input-group-append">
					<button type="button"
							class="btn btn-outline-secondary"
							@click.prevent="search">검색
					</button>
				</div>
			</div>
			<ul class="list-unstyled list-group">
				<li v-for="result in searchResult"
					class="list-group-item">
					{{result.text}}/{{result.createdDatetime}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {
		SEARCH_VALUE,
		SEARCH_UPDATE,
		SEARCH_RESULT
	} from '../../store_1/types';
	import {mapGetters} from 'vuex';

	export default {
		name: "Search",
		computed : {
			text : {
				get () {
					return this.$store.getters[SEARCH_VALUE];
				},
				set (value) {
					return this.$store.dispatch(SEARCH_UPDATE, value);
				}
			},
			...mapGetters({
				'searchResult' : SEARCH_RESULT
			})
		},
		methods : {
			search () {
				this.$router.push({
					path : '/examples/chapter04/search',
					query : {
						q : this.$store.getters[SEARCH_VALUE]
					}
				});
			}
		}
	}
</script>

<style scoped>

</style>