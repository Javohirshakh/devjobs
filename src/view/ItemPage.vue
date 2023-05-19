<template>
    <Header />
    <ItemContent :uid="$route.params.id"/>
    <!-- <h1>Job ID: {{ $route.params.id }}</h1> -->
</template>


<script>
    import Header from "../components/Header.vue";
    import ItemContent from "../components/ItemContent.vue";


export default {
  components: {
    Header, ItemContent
  }
}
</script>