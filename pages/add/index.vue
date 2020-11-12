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
      <div class="add-book-form">
        <div class="row">
          <label>Book name</label>
          <input v-model="bookName" />
        </div>
        <div class="row">
          <label>Author</label>
          <input v-model="author" />
        </div>
        <div class="row">
          <label>Public year</label>
          <input v-model="publicYear" />
        </div>
        <div class="row">
          <label>Description</label>
          <input v-model="description" />
        </div>
        <div>
          <input type="button" value="Save" @click="saveBook()">
        </div>
      </div>
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
      bookName: "",
      author: "",
      publicYear: "",
      description: ""
    }
  },
  methods: {
    toHomePage() {
      this.$router.push("/");
    },
    saveBook() {
      let book = {
        name: this.bookName, 
        image: "", 
        author: this.author, 
        publishedYear: this.publicYear, 
        description: this.description
      };
      this.$store.dispatch("addBook", book);
      // reset book
      this.bookName = "";
      this.author = "";
      this.publicYear = "";
      this.description = "";
    }
  }
}
</script>