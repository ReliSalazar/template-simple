<template>
  <div class="banner">
    <div class="container mx-auto p-2 sm:p-0 h-screen">
      <div class="h-full flex flex-col items-start justify-center">
        <h2
          class="
            bg-black-transparent
            font-black
            text-xl
            sm:text-2xl
            lg:text-3xl
            p-2
          "
        >
          Lorem ipsum dolor sit amet.
        </h2>
        <p
          class="
            bg-black-transparent
            font-black
            text-base
            sm:text-lg
            lg:text-xl
            p-2
          "
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eum
          quidem, repudiandae quae provident ea quia neque voluptates cumque
          reprehenderit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  background-color: #eee;
  background-image: url("/img/banner-1.jpg");
  background-position: center;
  background-repeat: no-repeat;
}
</style>