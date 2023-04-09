<template>
  <div class="container">
    <li v-for="coin in coins" :key="coin.id">{{ coin.name }}</li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const { data } = await axios.get(
      "https://api.coinmarketcap.com/v1/ticker/"
    );
    console.log(coins.data);
  },
};
</script>