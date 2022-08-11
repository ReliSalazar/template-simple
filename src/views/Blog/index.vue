<template>
  <div class="blog-content">
    <div class="blog bg-gray py-10">
      <div class="container mx-auto text-center">
        <div class="flex flex-wrap justify-center items-center">
          <div
            class="basis-full sm:basis-1/2 lg:basis-1/4 p-5"
            v-for="(post, key) in posts"
            :key="key + post.title"
          >
            <div class="card p-5 flex flex-col justify-center items-center">
              <div class="mb-5 w-64">
                <img :src="post.banner" alt="" class="w-full h-auto" />
              </div>
              <h3 class="title-primary font-black text-lg sm:text-xl mb-2">
                {{ formatText(post.title, 35) }}
              </h3>
              <p class="mb-2">
                {{ formatText(post.description, 80) }}
              </p>
              <router-link
                :to="post.url"
                class="primary-button flex justify-center items-center"
              >
                <p class="mr-2">read more</p>
                <font-awesome-icon :icon="['fa', 'arrow-right']" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  methods: {
    formatText(text, offset) {
      return text.length >= offset
        ? text.substring(0, offset - 3) + "..."
        : text;
    },
  },
  data() {
    return {
      posts: [
        {
          url: "/blog/1",
          banner: "/img/banner-2.jpg",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nobis!",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab aspernatur earum velit corporis quis rem! Cupiditate odio maiores harum.",
        },
        {
          url: "/blog/1",
          banner: "/img/banner-2.jpg",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nisi?",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente nulla? Facere laudantium culpa magnam modi rem, a consectetur perferendis.",
        },
        {
          url: "/blog/1",
          banner: "/img/banner-2.jpg",
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, nostrum.",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum possimus omnis accusantium vero distinctio nobis dolorum aspernatur voluptatibus nesciunt. Id?",
        },
        {
          url: "/blog/1",
          banner: "/img/banner-2.jpg",
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, veritatis?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eum. Deserunt soluta iusto veritatis molestiae repellendus ullam quisquam possimus quos!",
        },
        {
          url: "/blog/1",
          banner: "/img/banner-2.jpg",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, architecto?",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt dolorem consequuntur sint magni temporibus culpa esse ex sequi atque.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog-content {
  margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .blog-content {
    margin-top: 5.5rem;
  }
}
</style>