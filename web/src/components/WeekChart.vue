<template>
  <Bar :data="apiData" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import { ref, onMounted } from "vue";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
};
const apiData = ref({ datasets: [], labels: [] });
const isLoading = ref(false);
const error = ref({ message: "" });

const fetchData = async () => {
  isLoading.value = true;
  try {
    const response = await fetch("/api/chart/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    apiData.value = await response.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = { message: err.message };
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>
