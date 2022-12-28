<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true,
  },
  imgAlt: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div>
    <div class="d-flex">
      <img
        :src="imgSrc"
        :alt="imgAlt"
      >
      <h1 class="title text-d-blue mx-1">
        {{ title }}
      </h1>
    </div>
    <p class="text-darkish fs-l">
      {{ subTitle }}
    </p>
  </div>
</template>

<style scoped>
  .title {
    font-size: 24px;
  }
</style>