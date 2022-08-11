<template>
  <div class="gallery-content">
    <div
      class="container mx-auto flex flex-col items-center relative px-5 py-5"
    >
      <!-- Modal -->
      <div
        class="
          modal-container
          fade-in
          fixed
          w-full
          top-0
          flex
          justify-center
          items-center
        "
        v-if="showModal"
        @click="() => (this.showModal = false)"
      >
        <div
          class="container mx-auto flex justify-center items-center p-5 sm:p-0"
        >
          <div class="modal flex flex-col justify-center items-center p-5">
            <h2 class="title-primary font-black text-2xl sm:text-3xl mb-5">
              {{ modalTitle }}
            </h2>
            <div class="img-container flex justify-center items-center">
              <img
                :src="
                  modalImage || 'https://via.placeholder.com/300x300/ccc/222/'
                "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery -->
      <div class="flex flex-wrap justify-center items-center">
        <template v-for="(image, key) in images" :key="key + image.title">
          <div
            class="
              gallery-img-container
              flex
              justify-center
              items-center
              aspect-square
              overflow-hidden
              basis-full
              sm:basis-1/2
              lg:basis-1/4
            "
            @click="handleModal(key)"
          >
            <img :src="image.src" :alt="image.title" class="gallery-image" />
            <div class="details text-left p-5">
              <span
                class="
                  title
                  font-semibold
                  text-lg
                  sm:text-xl
                  2xl:text-3xl 2xl:p.10
                "
              >
                {{ image.title }}
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  methods: {
    handleModal(index) {
      this.showModal = !this.showModal;
      const image = this.images[index];
      this.modalTitle = image.title;
      this.modalImage = image.src;
    },
  },
  data() {
    return {
      showModal: false,
      modalTitle: "",
      modalImage: "",
      images: [
        {
          src: "https://via.placeholder.com/300x300/2D7DD2/222/",
          title: "image 1",
        },
        {
          src: "https://via.placeholder.com/300x300/97CC04/222/",
          title: "image 2",
        },
        {
          src: "https://via.placeholder.com/300x300/EEB902/222/",
          title: "image 3",
        },
        {
          src: "https://via.placeholder.com/300x300/F45D01/222/",
          title: "image 4",
        },
        {
          src: "https://via.placeholder.com/300x300/D8829D/222/",
          title: "image 5",
        },
        {
          src: "https://via.placeholder.com/300x300/C20114/222/",
          title: "image 6",
        },
        {
          src: "https://via.placeholder.com/300x300/922D50/222/",
          title: "image 7",
        },
      ],
    };
  },
};
</script>

<style scoped>
.gallery-content {
  margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .gallery-content {
    margin-top: 5.5rem;
  }
}

.gallery-img-container {
  position: relative;
}
.gallery-img-container .gallery-image {
  width: 98%;
  height: auto;
  max-width: 500px;
  max-height: 500px;
  margin: 1%;
}
.gallery-img-container .details {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
}
.gallery-img-container .details .title {
  color: white;
  position: relative;
  opacity: 0;
  top: 100px;
  transition-property: top, opacity;
  transition-duration: 0.35s;
  transition-delay: 0s;
}
.gallery-img-container:before {
  content: "";
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  width: 98%;
  height: 50%;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 1%;
  right: -1%;
  z-index: 2;
  transition-property: top, opacity;
  transition-duration: 0.35s;
}
.gallery-img-container:focus:before,
.gallery-img-container:hover:before,
.gallery-img-container:focus .title,
.gallery-img-container:hover .title {
  opacity: 1;
}
.gallery-img-container:focus:before,
.gallery-img-container:hover:before {
  top: 49%;
}
.gallery-img-container:focus .title,
.gallery-img-container:hover .title {
  top: 0;
  transition-delay: 0.15s;
}

.modal-container {
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 9999;
}
.modal-container .modal {
  background-color: #eee;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}
.modal-container .img-container img {
  max-height: 70vh;
}
</style>