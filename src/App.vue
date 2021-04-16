<template>
  <div>
    <router-view name="header"></router-view>
    <h1>Vue Router</h1>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
</style>

