<script>
  import { categories } from './stores.js';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let value = '';

  function applyFilter() {
    dispatch('filterChange', {
      value: value
    });
  }
</script>

<div class="filter-wrapper">
  Show categories:
  <select
    bind:value
    on:change={applyFilter}
  >
    <option value="">All</option>
    {#each $categories as category (category.id)}
      <option value={category.name}>{category.name}</option>
    {/each}
  </select>
</div>

<style>
  .filter-wrapper {
    margin: 0 0 1.2em;
  }

  select {
    padding: 0.2em 0.4em;
    margin: 0 0 0 1em;
  }
</style>