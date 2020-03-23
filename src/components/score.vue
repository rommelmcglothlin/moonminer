<template>
  <div>
    <h2 class="text-light">
      <b>Total Cheese Collected</b>
    </h2>
    <h1 class="text-light h-5">{{ totalCount }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    totalCount() {
      return this.$store.state.totalCount;
    }
  }
};
</script>

<style>
</style>