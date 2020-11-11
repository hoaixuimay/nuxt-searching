<template>
  <div class="container">
    <Header>
      <slot></slot>
      <div class="add-book">
        <input type="button" name="backToHome" value="Back To Home Page" @click="toHomePage()" />
      </div>
      <div class="info">
        <h1>Add new book</h1>
      </div>
    </Header>
    <div class="content">

    </div>
    <Footer>
      <slot></slot>
      <h3>Some quotes goes here</h3>
    </Footer>
    <div class="footer"></div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      
    }
  },
  methods: {
    toHomePage() {
      this.$router.push("/");
    }
  }
}
</script>