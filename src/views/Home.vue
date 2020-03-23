<template>
  <div class="home">
    <div class="container-fluid space">
      <header class="h-25">
        <div class="row p-5">
          <div class="col-3">
            <h2 class="text-light">Inventory</h2>
            <inventory />
          </div>
          <div class="col-6 text-light">
            <h1>Moon Miner</h1>
          </div>
          <div class="col-3">
            <score />
          </div>
        </div>
      </header>

      <div class="container">
        <main>
          <div class="row">
            <div class="col-12 m-auto text-center">
              <moon />
            </div>
          </div>
          <div class="row">
            <div class="col-12 m-auto text-center">
              <upgrade class="pt-" />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Moon from "../components/moon";
import Upgrade from "../components/upgrade";
import Inventory from "../components/inventory";
import Score from "../components/score";

export default {
  name: "Home",
  components: {
    Moon,
    Upgrade,
    Score,
    Inventory
  },
  methods: {},
  computed: {
    cheeseCount() {
      return this.$store.state.cheeseCount;
    }
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  user-select: none;
}
.home {
  padding: 0;
  margin: 0;
  user-select: none;
}
body {
  background: url(../assets/sky.png) no-repeat center center;
  background-size: cover;
  height: 100vh;
  /* width: 100vw; */
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  /* flex-direction: column; */
}

.space {
  height: 100vh;
}
</style>