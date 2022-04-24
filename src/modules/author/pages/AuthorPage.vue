<template>
    <section class="author-section">
        <h1>Página sobre el autor</h1>
        <article class="autor-info">
            <div class="image-container">
                <img :src="require(`@/assets/users/user${user}.png`)" alt="user" class="image">
            </div>
            <div class="text">
                <p>Lorem fistrum se calle ustée ese que llega a gramenawer ese pedazo de. 
                    Qué dise usteer fistro sexuarl benemeritaar diodeno diodenoo benemeritaar a gramenawer jarl tiene musho peligro. 
                    La caidita no te digo trigo por no llamarte Rodrigor ese que llega por la gloria de mi madre papaar papaar.</p> 
                <p>Va usté muy cargadoo papaar papaar torpedo qué dise usteer mamaar diodenoo de la pradera a gramenawer a gramenawer me cago en tus muelas. 
                    Hasta luego Lucas fistro caballo blanco caballo negroorl amatomaa no puedor diodeno llevame al sircoo fistro ese que llega no puedor. 
                    Quietooor mamaar va usté muy cargadoo fistro caballo blanco caballo negroorl. 
                </p>
                <p>Caballo blanco caballo negroorl ese que llega a wan pecador ahorarr jarl te voy a borrar el cerito caballo blanco caballo negroorl. 
                    Tiene musho peligro condemor va usté muy cargadoo te va a hasé pupitaa te va a hasé pupitaa diodeno pecador caballo blanco caballo negroorl la caidita. 
                    Hasta luego Lucas fistro va usté muy cargadoo pupita a wan quietooor mamaar de la pradera papaar papaar te va a hasé pupitaa.
                </p>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: Number,
        }
    },
    methods: {
        
    },
    created() {
        this.user = Math.ceil( Math.random() * 20);
    }
}
</script>

<style scoped lang="scss">
.author-section {
    max-width: 1154px;
    width: 100%;
    margin: 0 auto;
}
.autor-info {
    display: flex;
    width: 100%;
}
.image-container {
    width: 30%;
}
.image {
    width: 100%;
}
.text {
    margin-left: 48px;
    text-align: left;
    width: 70%;
}
@media (max-width: 750px) {
    .autor-info {
        display: block;
    }
    .image-container {
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
        padding: 1rem;
    }
    .text {
        width: 100%;
        padding: 0 2rem;
        box-sizing: border-box;
        margin-left: 0;
    }
}
@media (max-width: 1200px) {
    .autor-info {
        padding-left: 2rem;
        padding-right: 2rem;
        box-sizing: border-box;
    }
}
</style>