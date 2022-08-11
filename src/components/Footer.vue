<template>
  <footer class="bg-black">
    <div
      class="
        container
        mx-auto
        flex flex-wrap flex-col
        sm:flex-row
        justify-center
        items-start
        p-5
        sm:px-10
      "
    >
      <div
        class="
          column
          basis-full
          sm:basis-1/2
          lg:basis-1/3
          flex flex-col
          gap-10
          mb-10
        "
      >
        <div class="list">
          <h3 class="title-primary uppercase font-black text-lg mb-5">
            Call us
          </h3>
          <ul>
            <li class="mb-1" v-for="(phone, key) in phones" :key="key">
              <a
                :href="'tel:' + phone.number"
                class="capitalize link primary-underline"
              >
                <font-awesome-icon :icon="['fa', 'phone']" />
                {{ " " + phone.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="
          column
          basis-full
          sm:basis-1/2
          lg:basis-1/3
          flex flex-col
          gap-10
          mb-10
        "
      >
        <div class="list">
          <h3 class="title-primary uppercase font-black text-lg mb-5">Email</h3>
          <ul>
            <li class="mb-1" v-for="(email, key) in emails" :key="key">
              <a
                :href="'mailto:' + email.email"
                class="capitalize link primary-underline"
              >
                <font-awesome-icon :icon="['fa', 'envelope']" />
                {{ email.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="
          column
          basis-full
          sm:basis-1/2
          lg:basis-1/3
          flex flex-col
          gap-10
          mb-10
        "
      >
        <div class="list">
          <h3 class="title-primary uppercase font-black text-lg mb-5">
            Social Media
          </h3>
          <ul>
            <li class="mb-1" v-for="(social, key) in socialMedia" :key="key">
              <a :href="social.url" class="capitalize link primary-underline">
                <font-awesome-icon :icon="['fab', social.name]" />
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="column basis full flex text-center text-sm">
        <a
          href="https://github.com/ReliSalazar/template-simple"
          class="capitalize link primary-link-bg mb-1"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
          Repository
        </a>
        <a
          href="https://github.com/ReliSalazar/template-simple"
          class="
            capitalize
            link
            primary-link-bg
            mb-1
            flex
            justify-center
            items-center
          "
        >
          <img src="/reli.ico" alt="" class="reli-icon mr-2" />
          My Portfolio
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      phones: [
        {
          number: "+1123-456-7890",
          title: "123-456-7890",
        },
        {
          number: "+1123-456-7890",
          title: "123-456-7890",
        },
        {
          number: "+1123-456-7890",
          title: "123-456-7890",
        },
        {
          number: "+1123-456-7890",
          title: "123-456-7890",
        },
      ],
      emails: [
        {
          email: "example@email.com",
          title: "example",
        },
        {
          email: "example@email.com",
          title: "information",
        },
        {
          email: "example@email.com",
          title: "report errors",
        },
      ],
      socialMedia: [
        {
          url: "https://www.facebook.com/",
          name: "facebook",
        },
        {
          url: "https://www.twitter.com/",
          name: "twitter",
        },
        {
          url: "https://www.instagram.com/",
          name: "instagram",
        },
      ],
    };
  },
};
</script>

<style scoped>
.reli-icon {
  width: 20px;
  height: 20px;
}
</style>