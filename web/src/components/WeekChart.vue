<template>
  <div class="chart-container">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { Chart, type ChartConfiguration } from "chart.js";
import { ref, onMounted } from "vue";

const props = defineProps({
  chartData: {
    type: Array as () => number[],
    required: true,
  },
});

const chart = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!chart.value) {
    return;
  }
  const config: ChartConfiguration = {
    type: "bar",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: "Weekly Data",
          data: props.chartData,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  new Chart(chart.value, config);
});
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
