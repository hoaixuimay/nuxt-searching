<template>
  <div class="container">
    <Header>
      <slot></slot>
      <div class="logo">
        <img class="logo__img" src="images/calendar.svg" />
      </div>
      <div class="search">
        <input :value="searchInput" @input="searchBooks($event.target.value)"/>
      </div>
      <div class="add-book">
        <input type="button" name="addBook" value="add book" @click="toAddPage()" />
      </div>
    </Header>
    <div class="content">
      <div class="book-container">
        <div class="book-item" v-for="(book, index) in foundBooks" :key="index">
          <h3>{{book.name}}</h3>
          <h3>{{book.author}}</h3>
          <h3>{{book.publishedYear}}</h3>
        </div>
      </div>
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
      searchInput: null
    };
  },
  computed: {
    books() {
      return this.$store.getters.books;
    },
    foundBooks() {
      return this.$store.getters.foundBooks;
    }
  },
  mounted() {
    this.searchBooks(this.searchInput);
  },
  methods: {
    toAddPage() {
      this.$router.push("/add");
    },
    searchBooks(value){
      this.searchInput = value;
      console.log(this.searchInput);
      this.$store.dispatch("searchBooks", this.searchInput);
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>
