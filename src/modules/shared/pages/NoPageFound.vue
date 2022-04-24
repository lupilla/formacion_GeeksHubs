<template>
    <section>
        <h3 class="description">Ups, no encontramos la página...</h3>
        <img src="@/assets/not-found.png" alt="not found" class="image">
    </section>
</template>
<style scoped lang="scss">
    .description {
        padding-top: 40px;
        padding-bottom: 40px;
        color: #f05455;
        font-size: 3vw;
        margin: 0;
    }
    .image {
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }
    @media (max-width: 600px) {
        .description {
            font-size: 5vw;
        }
    }
</style>