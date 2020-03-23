<template>
  <div>
    <div>
      <h1 class="text-light">{{ cheeseCount }}</h1>
      <h3 class="text-light">Pieces of Cheese</h3>
    </div>
    <div class="pb-2 moon-container">
      <img src="../assets/moon.png" @click="mine" class="moon" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Moon",
  methods: {
    mine() {
      this.$store.dispatch("collectCheese");
    }
  },
  computed: {
    cheeseCount() {
      return this.$store.state.cheeseCount;
    }
  }
};
</script>

<style lang="scss">
.moon-container {
  animation: roll 150s linear Infinite;
}

img.moon {
  filter: sepia(1);
  transition: all 0.2s ease-out;
  max-width: 20vw;
  cursor: pointer;
}

img.moon:active {
  filter: drop-shadow(0 0 10em orange) sepia(1);
}

@keyframes roll {
  to {
    transform: rotate(360deg);
  }
  from {
    transform: rotate(0deg);
  }
}
</style>