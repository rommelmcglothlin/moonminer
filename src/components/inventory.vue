<template>
  <div>
    <div v-for="upgrade in upgrades" :key="upgrade.id">
      <img :src="upgrade.img" height="30" />
      <p class="text-light">
        Quantity:
        <b>{{upgrade.quantity}}</b>
      </p>
      <p class="text-light">
        <b>+{{ upgrade.multiplier }}</b> per click
      </p>
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