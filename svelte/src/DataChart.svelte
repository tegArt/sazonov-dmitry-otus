<script>
  import { categoryColors } from './stores.js';
  import { onMount, afterUpdate } from 'svelte';
  import Chart from 'chart.js';

  export let costs = [];
  let totals = {};
  let chart;
  let config = {
    type: 'pie',
    data: {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: []
      }]
    },
    options: {
      legend: false
    }
  };

  $: {
    totals = {};
    config.data.labels = [];
    config.data.datasets[0].data = [];
    config.data.datasets[0].backgroundColor = [];

    costs.forEach((cost) => {
      if (totals.hasOwnProperty(cost.category)) {
        totals[cost.category] += cost.value;
      } else {
        totals[cost.category] = cost.value;
      }
    });

    Object.entries(totals).forEach(([key, value]) => {
      config.data.labels.push(key);
      config.data.datasets[0].data.push(value);
      config.data.datasets[0].backgroundColor.push($categoryColors[key]);
    });

    console.log(config);
  }

  onMount(() => {
    let canvas = document.getElementById('myChart').getContext('2d')
    chart = new Chart(canvas, config);
  });

  afterUpdate(() => {
    chart.update();
  });
</script>

<canvas id="myChart" height="230"></canvas>
