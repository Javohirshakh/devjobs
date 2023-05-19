<template>
  <div>
    <Header />
    <Search :publications="publications" @filter="filterPublications" />
    <JobList :filteredPublications="filteredPublications" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Search from "../components/Search.vue";
import JobList from "../components/JobList.vue";
import publications from "../data.json";

export default {
  components: {
    Header,
    Search,
    JobList
  },
  data() {
    return {
      publications: publications,
      filteredPublications: publications // Initially, set filteredPublications to all publications
    };
  },
  methods: {
    filterPublications(filteredPublications) {
      this.filteredPublications = filteredPublications;
    },
  },
};
</script>
