<template>
  <div class="navbar box-shadow">
    <div
      class="container mx-auto flex p-2"
      :class="viewport === 'sm' ? 'flex-col' : 'flex-row'"
    >
      <div class="logo basis-full flex justify-between items-center">
        <div class="img-container">
          <router-link to="/">
            <img src="https://via.placeholder.com/150x50/ccc/222/" alt="" />
          </router-link>
        </div>

        <button
          class="burger aspect-square p-2"
          :class="viewMenu ? 'change' : ''"
          v-if="viewport === 'sm'"
          @click="toggleMenu"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </button>
      </div>

      <div
        class="links basis-full flex items-center"
        :class="
          viewport === 'sm' ? 'flex-col justify-center' : 'flex-row justify-end'
        "
        v-if="viewMenu || viewport !== 'sm'"
      >
        <router-link class="link primary-underline px-2" to="/">
          Inicio
        </router-link>
        <router-link class="link primary-underline px-2" to="/gallery">
          Gallery
        </router-link>
        <router-link class="link primary-underline px-2" to="/blog">
          Blog
        </router-link>
        <router-link class="link primary-underline px-2" to="/contact">
          Contact
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      viewMenu: false,
      windowWidth: window.innerWidth,
      viewport: "",
    };
  },
  methods: {
    toggleMenu() {
      this.viewMenu = !this.viewMenu;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    setViewport(newWidth) {
      this.viewport = newWidth < 640 ? "sm" : "md";
    },
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      console.log(`it changed to ${newWidth} from ${oldWidth}`);
      this.setViewport(newWidth);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.setViewport(this.windowWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 4;
  background-color: white;
}

.img-container a {
  max-width: 200px;
  max-height: 50px;
}
.img-container a img {
  width: auto;
  height: 100%;
}

.burger {
  border: 1px solid #222;
  border-radius: 4px;
}
.bar1,
.bar2,
.bar3 {
  width: 30px;
  height: 2px;
  background-color: #222;
  margin: 6px 0;
  transition: all 0.35s ease;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-5px, 6px);
  transform: rotate(-45deg) translate(-5px, 6px);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-4px, -6px);
  transform: rotate(45deg) translate(-4px, -6px);
}

.link {
  color: #555;
  transition: color 0.35s ease;
}
.link:hover {
  color: #222;
}
</style>