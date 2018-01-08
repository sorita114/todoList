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
				<li v-if="isEmpty" class="list-group-item bg-warning">
					검색결과가 없습니다.
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {
		SEARCH_VALUE,
		SEARCH_UPDATE,
		SEARCH_GET_ITEM,
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
			isEmpty () {
				return this.$route.query.q !== undefined && this.$store.getters[SEARCH_RESULT].length === 0;
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
		},
		beforeRouteUpdate(to, from, next) {
			this.$store.dispatch(SEARCH_UPDATE, to.query.q);
			this.$store.dispatch(SEARCH_GET_ITEM);
			next();
		}
	}
</script>

<style scoped>

</style>