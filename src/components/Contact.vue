<template>
  <div class="contact">
    <div class="container mx-auto my-5">
      <h2
        class="title-primary text-center font-black text-2xl sm:text-3xl mb-5"
      >
        Contact
      </h2>

      <div class="flex flex-col sm:flex-row mb-5">
        <div class="basis-full p-5">
          <h3 class="title-primary uppercase font-black text-lg mb-5">
            Talk with us!
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos repudiandae sequi pariatur nisi facilis fugit, iste
            tempora sapiente similique deleniti!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam, corporis ipsam et odit commodi voluptate? Quasi quos mollitia hic!
          </p>
        </div>

        <div class="basis-full p-5">
          <form @submit.prevent="onSubmit" class="flex flex-col">
            <div
              class="
                field
                flex flex-col
                sm:items-center sm:flex-row sm:gap-5
                mb-5
              "
            >
              <label
                for="name"
                class="basis-full sm:basis-1/5 font-black mb-2 sm:mb-0"
              >
                Name<span class="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="form-input basis-full"
                placeholder="your name"
                v-model="name"
                required
              />
            </div>

            <div
              class="
                field
                flex flex-col
                sm:items-center sm:flex-row sm:gap-5
                mb-5
              "
            >
              <label
                for="email"
                class="basis-full sm:basis-1/5 font-black mb-2 sm:mb-0"
              >
                Email<span class="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-input basis-full"
                placeholder="your email"
                v-model="email"
                required
              />
            </div>

            <div
              class="
                field
                flex flex-col
                sm:items-center sm:flex-row sm:gap-5
                mb-5
              "
            >
              <label
                for="subject"
                class="basis-full sm:basis-1/5 font-black mb-2 sm:mb-0"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="form-input basis-full"
                placeholder="message subject"
                v-model="subject"
              />
            </div>

            <div
              class="
                field
                flex flex-col
                sm:items-center sm:flex-row sm:gap-5
                mb-5
              "
            >
              <label
                for="message"
                class="basis-full sm:basis-1/5 font-black mb-2 sm:mb-0"
              >
                Message<span class="required">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                class="form-input basis-full"
                placeholder="talk with us"
                v-model="message"
                required
              />
            </div>

            <button class="submit primary-button text-lg" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    onSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        subject: this.subject ?? "default subject",
        message: this.message,
      };

      alert(data);
    },
  },
};
</script>

<style scoped>
.form-input {
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem 0.5rem 0.2rem 0.5rem;
}
.submit {
  border-radius: 0.2rem 0.5rem 0.2rem 0.5rem;
}
</style>
