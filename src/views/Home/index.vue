<template>
  <div class="home-content">
    <Offers />
    <Banner />
    <About />
    <Services />
    <Blog />
    <Contact />
    <Map />
  </div>
</template>

<script>
import Offers from "./components/Offers.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Blog from "./components/Blog.vue";
import Contact from "../../components/Contact.vue";
import Map from "../../components/Map.vue";

export default {
  name: "Home",
  components: {
    Offers,
    Banner,
    About,
    Services,
    Blog,
    Contact,
    Map,
  },
};
</script>

<style scoped>
.home-content {
  margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .home-content {
    margin-top: 5.5rem;
  }
}
</style>