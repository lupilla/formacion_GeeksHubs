<template>
	<img 
		:src="imgSrc" 
		alt="post random image"
		class="image"/>
</template>
<script>
export default {
    computed: {
        imgSrc() {
            return `https://picsum.photos/300/200?random=${this.id}`;
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.image {
  border-right: solid 1px #1b1c4a;
}
</style>