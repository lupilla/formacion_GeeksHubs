<template>
    <h1>Post Detail Page {{ id }}</h1>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    }
}
</script>