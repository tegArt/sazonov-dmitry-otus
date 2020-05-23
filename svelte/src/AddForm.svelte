<script>
  import { categories, costs } from './stores';
  let isEditing = false;
  let now = new Date();
  let date = now.toISOString().slice(0,10);
  let localDate = '';
  let category = $categories[0].name;
  let value = 0;

  $: {
    let selectedDate = new Date(date);
    localDate = selectedDate.toLocaleDateString('ru-RU');
  }

  function toggleEditing() {
    isEditing = !isEditing;
  }

  function addCost() {
    costs.update(storeCosts => {
      storeCosts.push({
        id: storeCosts[storeCosts.length - 1].id + 1,
        date: localDate,
        category: category,
        value: value
      });

      toggleEditing();

      return storeCosts;
    });
  }
</script>

<div class="form-wrapper">
  {#if !isEditing}
    <button
      class="add"
      on:click={toggleEditing}
    >
      Add new cost <strong>+</strong>
    </button>
  {:else}
    <div class="form-row">
      <input
        type="date"
        bind:value={date}
      />

      <select bind:value={category}>
        {#each $categories as category (category.id)}
          <option value={category.name}>
            {category.name}
          </option>
        {/each}
      </select>

      <input
        type="number"
        bind:value={value}
      />
    </div>

    <div class="form-row">
      <button
        class="add submit"
        on:click={addCost}
      >
        Add
      </button>

      <button on:click={toggleEditing}>✖</button>
    </div>
  {/if}
</div>

<style>
  .form-wrapper {
    min-height: 95px;
    margin: 0 0 2em;
  }

  .form-row {
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.4em;
  }

  button {
    margin: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: all .2s ease;
  }

  input[type="date"] {
    width: 180px;
  }

  select {
    width: 200px
  }

  input[type="number"] {
    width: 160px;
  }

  .add {
    padding: 0.6em 1.2em;
    color: #fff;
    background: #398f28;
  }

  .add:active {
    background: #216b12;
  }

  .submit {
    margin: 0 0.2em 0 auto;
  }
</style>