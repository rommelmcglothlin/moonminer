<template>
  <div class="d-flex justify-content-around">
    <div v-for="upgrade in upgrades" :key="upgrade.id">
      <img :src="upgrade.img" height="100" @click="buy(upgrade)" />
      <p class="pt-4 text-light h">
        Cost:
        <b>{{ upgrade.price }}</b>
      </p>
      <p class="text-light m-auto">
        <b>Pieces of Cheese</b>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Upgrade",
  data() {
    return {
      auto: null
    };
  },
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
    }
  }
};
</script>


<style>
/* .upgrade-item {
  padding: 20px;
  background-color: lightslategray;
  text-align: center;
  .item-name {
    color: white;
    text-align: center;
    font-weight: bold;
  }
}

&.unavailable {
  user-select: none;
  pointer-events: none;
  color: red !important;
  filter: grayscale(1);
} */
</style>