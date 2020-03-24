<template>
  <div class="d-flex justify-content-around">
    <div v-for="upgrade in upgrades" :key="upgrade.id">
      <img :src="upgrade.img" height="100" />
      <p class="pt-4 text-light h">
        Cost:
        <b>{{ upgrade.price }}</b>
      </p>
      <p class="text-light m-auto">
        <b>Pieces of Cheese</b>
      </p>
      <span>
        <button
          :disabled="cheeseCount < upgrade.price"
          class="pl-2 btn btn-primary text-light"
          @click="buy(upgrade)"
        >Buy</button>
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: "Upgrade",
  props: {
    upgrade: { type: Object }
  },
  methods: {
    buy(upgrade) {
      this.$store.dispatch("buy", upgrade);
    }
    // buyIdleUpgrade() {
    //   if (this.idleCount == 0) {
    //     this.startIdleMiner();
    //     this.idleCount++;
    //   }
    // },
    // startIdleMiner() {
    //   setInterval(this.idleMine, 3000);
    // },
    // idleMine() {
    //   this.$store.dispatch("idleMiner");
    // }
  },
  computed: {
    upgrades() {
      return this.$store.state.upgrades;
    },
    cheeseCount() {
      return this.$store.state.cheeseCount;
    }
  }
};
</script>


<style>
</style>