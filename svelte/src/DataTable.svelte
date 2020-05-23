<script>
  import TableRow from './TableRow.svelte';

  export let costs = [];
</script>

<table>
  <thead>
    <TableRow
      id="#"
      date="Date"
      category="Category"
      value="Value"
    />
  </thead>
  <tbody>
  {#each costs as cost (cost.id)}
    <TableRow {...cost} />
  {/each}
</table>

<style>
  table {
    width: 100%;
    margin: 0 0 1em;
    font-size: 1.2em;
    border: 0;
  }

  thead {
    font-weight: bold;
  }
</style>