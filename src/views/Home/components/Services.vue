<template>
  <div class="services">
    <div class="container mx-auto py-5 text-center">
      <h2 class="title-primary font-black text-2xl sm:text-3xl mb-5">
        Services
      </h2>

      <div class="flex flex-wrap justify-center items-center text-center">
        <div
          class="
            service
            basis-1/2
            sm:basis-1/3
            flex flex-col
            justify-center
            items-center
            p-5
          "
          v-for="(service, key) in services"
          :key="key + service.title"
        >
          <div class="card p-5 text-lg sm:text-xl lg:text-2xl">
            <font-awesome-icon :icon="['fa', service.icon]" />
            <h2 class="font-black">{{ service.title }}</h2>
            <p class="text-base">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          icon: "store",
          title: "store",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reiciendis?",
        },
        {
          icon: "star",
          title: "star",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, illum.",
        },
        {
          icon: "clock",
          title: "clock",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, aut!",
        },
        {
          icon: "truck",
          title: "truck",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, iste?",
        },
        {
          icon: "play",
          title: "play",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, placeat.",
        },
      ],
    };
  },
};
</script>