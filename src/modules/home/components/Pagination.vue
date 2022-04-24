<template>
  <section>
    <nav aria-label="Page navigation" class="nav">
      <ul class="pagination">
        <li class="pagination-item">
          <a
            href="#"
            aria-label="Previous"
            v-show="showPrevious"
            class="pagination-link"
            @click="goPrevious"
          >
            <span aria-hidden="true">Anterior</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Next"
            v-show="showNext"
            class="pagination-link"
            @click="goNext"
          >
            <span aria-hidden="true">Siguiente</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>

export default {
  name: 'Navigation',
  props: {
    items: Number,
    pag: Number,
    length: {
      type: Number
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    goPrevious() {
      this.$emit('previous');
    },
    goNext() {
      this.$emit('next');
    }
  },
  computed: {
    showPrevious: function() { return this.pag != 1; },
    showNext: function() { return ( this.pag * this.items ) / this.length < 1; }
  }
};
</script>

<style scoped lang="scss">
  .nav {
    max-width: 1154px;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .pagination {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .pagination-link {
    text-decoration: none;
    padding: .6rem 1.6rem;
    margin: 1rem;
    border: solid 1px #1b1c4a;
    background: #42b983;
    color: white;
    font-weight: bold;
    &:hover {
      background: #1b1c4a;
    }
  }
</style>
