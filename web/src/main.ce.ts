import "@/assets/main.css";

import { defineCustomElement } from "vue";
import WeekChart from "@/components/WeekChart.vue";

const weekChartElement = defineCustomElement(WeekChart);
customElements.define("week-chart", weekChartElement);
