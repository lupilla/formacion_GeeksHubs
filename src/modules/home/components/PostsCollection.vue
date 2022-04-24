<template>
  <section>
    <ul class="list">
    <li v-for="(post, index) in posts" 
      :key="post.id"
      v-show="(pag - 1) * items <= index  && pag * items > index">
      <section class="section">
        <PostImage :id="post.id"></PostImage>
        <article class="article">
          <h2 class="title">{{ post.title }}</h2>
          <p class="text">{{ post.body }}</p>
          <router-link 
            class="link"
            :to="`/detail/${post.id}`">Ver detalle</router-link>
        </article>
      </section>
    </li>
  </ul>
  <Pagination 
    :items="items" 
    :pag="pag" 
    :length="posts.length"
    @previous="previousPag"
    @next="nextPag">
  </Pagination>
  </section>
</template>

<script>
import PostImage from './PostImage.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'PostsCollection',
  components: {
    PostImage,
    Pagination
  },
  props: {
    posts: [],
  },
  data() {
    return {
      items: 20, // Numero de resultados por página
      pag: 1, // Página inicial
    }
  },
  methods: {
    previousPag() {
      this.pag -= 1;
    },
    nextPag() {
      this.pag += 1;
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 20px 0 0;
}
.list {
  max-width: 1154px;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
}
li {
  margin: 0 10px;
}
.section {
  margin: 40px 0;
  display: flex;
  -webkit-box-shadow: 5px 5px 5px -2px rgba(0,0,0,0.24); 
  box-shadow: 5px 5px 5px -2px rgba(0,0,0,0.24);
  padding-right: 16px;
  border: solid 1px #1b1c4a;
}
.detail {
  &:visited, &:active, &:focus {
    color: #42b983;
  }
}
.article {
  text-align: left;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
}
.link {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 16px;
  color: #8cd96b;
  font-weight: bold;
  align-self: flex-end;
  padding-bottom: 16px;
  margin-top: auto;
}
.title {
  align-self: flex-start;
  margin-bottom: auto;
}
.text {
  align-self: flex-start;
  margin-bottom: auto;
}
@media (max-width: 600px) {
  .section {
    display: block;
    width: 100%;
    max-width: 300px;
    padding-right: 0;
    margin: 20px auto;
  }
  .article {
    margin: 0 auto;
    padding: 24px;
  }
  .title {
    margin-top: 0;
  }
  .link {
    padding: 0;
    padding-top: 1rem;
  }
}
</style>