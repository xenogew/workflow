<template>
  <Bar :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["January", "February", "March"],
  datasets: [{ label: "Financial Program", data: [40, 20, 12] }],
};

const options = {
  responsive: true,
};
</script>
