<script>
  export let id = '';
  export let date = '';
  export let category = '';
  export let value = '';
</script>

<tr>
  <td>{id}</td>
  <td>{date}</td>
  <td>{category}</td>
  <td>{value}</td>
</tr>

<style>
  td {
    padding: 0.5em;
    text-align: left;
    border-bottom: #eee 1px solid;
  }
</style>