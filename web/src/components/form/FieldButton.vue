<script setup lang="ts">
import { Button } from "@/components/ui/button";

defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <Button @click="$emit('click')"><slot /></Button>
</template>
