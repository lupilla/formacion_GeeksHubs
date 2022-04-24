<template>
    <main>
        <h1>Bienvenid@ a nuestro blog</h1>
        <PostsCollection :posts="posts"></PostsCollection>
    </main>
</template>
<script>
import getPosts from '../services/getPosts';
import PostsCollection from '../components/PostsCollection.vue';
export default {
    components: {
        PostsCollection
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async getDefaultData() {
            const { data } = await getPosts();
            this.posts = data;
        }
    },
    mounted() {
        this.getDefaultData();
    }
}
</script>

<style scoped lang="scss">

</style>