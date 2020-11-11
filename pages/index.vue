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
        <input type="button" name="addBook" value="add book" />
      </div>
    </Header>
    <div class="content">

    </div>
    <!-- <div class="content">
      <Logo />
      <h1 class="title">
        nuxt-searching
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div> -->
    <Footer>
      <slot></slot>
      <h3>Copyright</h3>
    </Footer>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  components: true
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
