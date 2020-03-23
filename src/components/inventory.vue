<template>
  <div>
    <div v-for="upgrade in upgrades" :key="upgrade.id">
      <img :src="upgrade.img" height="30" />
      <p class="text-light">Quantity: {{upgrade.quantity}}</p>
      <p class="text-light">+{{ upgrade.multiplier }} per click</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  computed: {
    upgrades() {
      return this.$store.state.upgrades;
    }
  }
};
</script>

<style>
</style>