<template>
  <section class="done">
    <h2 class="done-title">恭喜你</h2>
    <p class="done-word">付款完成</p>
    <router-link to="/" class="done-home">繼續購物</router-link>
  </section>
</template>

<script>
export default {
  created() {
    this.$bus.$emit('progress', 3)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_variable.scss';
@import '../assets/_grid.scss';
.done {
  width: 100%;
  @include padTOdeskTop {
    width: 500px;
  }
  margin: auto;
  text-align: center;
  padding: 80px 0;
  &-home {
    color: white;
    background-color: $important;
    padding: 10px 20px;
    transition: 0.5s all;
    text-decoration: none;
    &:hover {
      background-color: darken($important, 10%);
    }
  }
}
</style>
