<script>
  import { createEventDispatcher } from 'svelte';

  export let currentPage = 1;
  export let counter = 1;

  const dispatch = createEventDispatcher();

  function pageChange(page) {
    dispatch('pageChange', {
      page: page
    });
  }

  function prev() {
    if (currentPage > 1) {
      currentPage --;
      pageChange(currentPage);
    }
  }

  function next() {
    if (currentPage < counter) {
      currentPage ++;
      pageChange(currentPage);
    }
  }
</script>

{#if counter > 1}
  <div class="pagination-wrapper">
    <span on:click={prev}>&lt;</span>
    {#each {length: counter} as _, i}
      <span
        class:active={i + 1 === currentPage}
        on:click={() => pageChange(i + 1)}
      >
        {i + 1}
      </span>
    {/each}
    <span on:click={next}>&gt;</span>
  </div>
{/if}

<style>
  .pagination-wrapper {
    text-align: center;
    font-size: 1.2em;
  }

  span {
    padding: 0.2em;
    margin: 0 0.2em;
    cursor: pointer;
  }

  .active {
    color: #4dc436;
  }
</style>