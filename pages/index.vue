<template>
  <div class="container">
    <Header>
      <slot></slot>
      <div class="logo">
        <img class="logo__img" src="images/calendar.svg" />
      </div>
      <div class="search">
        <input name="search" />
      </div>
      <div class="add-book">
        <input type="button" name="addBook" value="add book" @click="toAddPage()" />
      </div>
    </Header>
    <div class="content">

    </div>
    <Footer>
      <slot></slot>
      <h3>Copyright</h3>
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
      books: [
        {name: "Never die", image: "", author: "Johny Depth", publishedYear: "1989"},
        {name: "Sky walker", image: "", author: "Claudia Papalope", publishedYear: "2000"},
        {name: "Walking through the forest", image: "", author: "Walking Dead", publishedYear: "2007"}
      ]
    }
  },
  methods: {
    toAddPage() {
      this.$router.push("/add");
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
