<template>
  <div class="contact-content">
    <Contact />
    <Map />
  </div>
</template>

<script>
import Contact from "../../components/Contact.vue";
import Map from "../../components/Map.vue";

export default {
  name: "ContactView",
  components: {
    Contact,
    Map
  }
};
</script>

<style scoped>
.contact-content {
  margin-top: 5rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .contact-content {
    margin-top: 5.5rem;
  }
}
</style>