<script>
	import { costs } from './stores.js';
	import AddForm from './AddForm.svelte';
	import DataChart from './DataChart.svelte';
	import DataFilter from './DataFilter.svelte';
	import DataTable from './DataTable.svelte';
	import TablePagination from './TablePagination.svelte';

	let page = 1;
	let perPage = 5;
	let filterCategory = '';

	$: filteredCosts = $costs.filter((cost) => {
		return filterCategory === '' || cost.category === filterCategory;
	}).reverse();

	$: visibleCosts = filteredCosts.slice((page -1) * perPage, (page - 1) * perPage + perPage);

	function applyFilter(event) {
		filterCategory = event.detail.value;
		page = 1;
	}

	function pageChange(event) {
		page = event.detail.page;
	}
</script>

<main>
	<h1>My personal costs</h1>

	<section class="column-left">
		<AddForm />

		<DataFilter
			on:filterChange={applyFilter}
			$categories
		/>

		<DataTable costs={visibleCosts} />

		<TablePagination
			on:pageChange={pageChange}
			currentPage={page}
			counter={Math.ceil(filteredCosts.length / perPage)}
		/>
	</section>

	<section class="column-right">
		<DataChart costs={filteredCosts} />
	</section>
</main>

<style>
	main {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 990px;
		margin: 0 auto;
	}

	h1 {
		flex: 0 0 100%;
		margin: 0 0 0.8em;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	.column-left {
		flex: 0 0 55%;
	}

	.column-right {
		flex: 0 0 40%;
		padding-top: 100px;
	}
</style>