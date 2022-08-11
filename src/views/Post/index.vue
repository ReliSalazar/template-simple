<template>
  <div class="post-content">
    <div
      class="
        banner
        w-full
        h-64
        flex
        justify-center
        items-center
        overflow-hidden
      "
    >
      <img :src="post.banner" alt="" class="w-full h-auto" />
    </div>
    <div class="container mx-auto p-5">
      <h1
        class="title-primary font-black text-2xl sm:text-3xl mb-5"
      >
        {{ post.title }}
      </h1>
      <p>
        {{ post.description }}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium
        amet doloremque eaque a nihil. Quos porro non quidem inventore
        laudantium quis vitae, quisquam, consectetur aliquid at nesciunt ipsam.
        Dolorem ipsum voluptas nisi fugit ab, cupiditate incidunt voluptatum
        aliquam, ratione alias, quis earum excepturi natus nihil vel corrupti
        ducimus exercitationem? Ipsa error facere, deleniti sunt quae maxime
        quod consequuntur vero accusamus libero praesentium unde maiores
        adipisci culpa ea asperiores illo eaque nobis, eligendi temporibus
        laborum labore voluptates. Odit, ad illo iusto enim, commodi aspernatur
        adipisci id, corrupti deleniti esse maiores earum nisi inventore fuga
        totam architecto similique. Quis et placeat velit ipsam aliquam beatae
        enim laudantium. Consequatur quod culpa vel magni facilis, dolorum et.
        Earum quas neque repudiandae eveniet amet officiis soluta minus deleniti
        quisquam repellendus quaerat necessitatibus sit, ab perferendis beatae
        voluptas illo facilis? Eveniet ut beatae, atque nesciunt modi, assumenda
        deserunt quia sunt esse dolorum dolore? Culpa placeat temporibus, soluta
        sapiente quo nisi officiis cupiditate dolorem qui ea quibusdam deserunt
        debitis. Ut, praesentium perferendis velit eveniet ducimus reiciendis
        pariatur. Nesciunt assumenda, velit, sunt ducimus animi doloremque
        veritatis quaerat mollitia natus magnam, earum sed distinctio? At dolor
        sed minima dolores repellat placeat asperiores fuga sapiente voluptates
        saepe et aspernatur repudiandae animi, magnam iure accusamus porro
        deserunt error quos corrupti natus dolore odio enim. Aliquid quas iusto,
        perspiciatis quisquam voluptates rerum maxime reprehenderit ut vitae
        deleniti sunt? Accusamus dolores non, dolorum fuga sunt vero eaque
        officiis minima laboriosam quasi aliquid quae modi atque magni autem
        possimus accusantium inventore repudiandae. Natus, doloremque rem!
        Molestias odio, optio, reprehenderit dignissimos id iure sequi, illo
        facilis incidunt dolores in earum. Nostrum consectetur explicabo quo
        praesentium ullam recusandae obcaecati quisquam quas natus delectus eos
        quia inventore asperiores doloremque iste doloribus aperiam labore,
        tempore quidem fugiat velit sit laborum cupiditate qui! Dolor laudantium
        repellat quae esse tempora? Fugiat repellendus iusto, necessitatibus
        alias autem veritatis? Ut alias natus aperiam, reprehenderit velit
        numquam iusto sint aliquid temporibus nisi animi perferendis tempora
        porro deleniti. Nesciunt dolor laudantium, expedita iure corporis
        dolores quam blanditiis? Ipsa iusto dolore praesentium voluptatum
        sapiente aut pariatur impedit autem omnis molestiae, consequatur
        deserunt fuga mollitia adipisci! Dolore, nostrum! Architecto, itaque
        repellat. Officia tenetur asperiores cum deserunt pariatur doloremque
        est. Impedit, amet explicabo? Sed consequatur et similique unde
        voluptatum vitae, impedit debitis sint exercitationem placeat
        accusantium maiores, dolores itaque, labore pariatur perferendis.
        Laboriosam non, pariatur impedit sit, quam rem laudantium ad nostrum
        fuga alias maxime reprehenderit tempora obcaecati? Commodi porro facilis
        veritatis ex laboriosam ipsam error dolore in nulla alias, amet aliquam
        quos expedita consequuntur officiis. Officia ullam recusandae earum?
        Debitis eveniet reprehenderit, ad natus reiciendis fugit quia odio
        ducimus earum libero totam velit aliquid blanditiis non. Fugiat nisi
        vero, maxime totam voluptates autem reprehenderit necessitatibus.
        Cupiditate omnis doloribus similique natus doloremque at quos voluptatem
        quas mollitia illum repellat exercitationem quia earum eum ex labore
        veniam consectetur, expedita delectus praesentium iste tenetur. Quaerat
        in, ullam, ducimus debitis harum officia distinctio commodi neque veniam
        provident ab temporibus itaque illum veritatis velit tenetur placeat
        voluptatum iste! Sequi, nemo?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      post: {
        banner: "/img/banner-2.jpg",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nobis!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab aspernatur earum velit corporis quis rem! Cupiditate odio maiores harum.",
      },
    };
  },
};
</script>

<style scoped>
.post-content {
  margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .post-content {
    margin-top: 5.5rem;
  }
}
</style>