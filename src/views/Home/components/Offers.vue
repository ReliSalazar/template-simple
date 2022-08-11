<template>
  <div class="offers">
    <div class="container mx-auto" v-if="render && offers">
      <div class="offer flex justify-between items-center text-center relative">
        <swiper
          class="basis-full card my-5 p-5"
          :autoplay="{ deplay: 7500 }"
          :modules="modules"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :centeredSlides="true"
        >
          <swiper-slide v-for="(offer, key) in offers" :key="key">
            <div class="relative p-5 mb-7">
              <router-link :to="offer.url">
                <h2 class="font-black text-xl">{{ offer.title }}</h2>
                <p>{{ offer.description }}</p>
              </router-link>
              <button class="close w-8 h-8 absolute top-2 right-2" @click="closeOffer">
                <font-awesome-icon :icon="['fa', 'times']" />
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "Offers",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  methods: {
    closeOffer() {
      this.render = false;
    },
  },
  data() {
    return {
      render: true,
      offers: [
        {
          title: "offer 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laudantium sit, quia eligendi delectus nulla veniam sunt! Impedit, distinctio enim.",
          url: "/",
        },
        {
          title: "offer 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic labore accusamus sed alias voluptate, ducimus adipisci amet veritatis! Provident!",
          url: "/",
        },
        {
          title: "offer 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, doloribus quis. Nihil, ratione officiis quaerat laudantium possimus expedita harum unde.",
          url: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.close {
  color: #df4570;
  z-index: 1;
}
</style>