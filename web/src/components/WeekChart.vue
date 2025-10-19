<template>
  <div class="chart-container">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script setup lang="ts">
import Chart from 'chart.js'

const props = defineProps({
  chartData: {
    type: Array,
    required: true,
  },
})

onMounted(() => {
  const config = {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          data: props.chartData,
        },
      ],
    },
  }

  new Chart(props.chartRef, config)
})
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
