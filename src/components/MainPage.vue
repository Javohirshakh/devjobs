<template>
  <div>
    <Header />
    <Search :publications="publications" @filter="filterPublications" />
    <JobList :filteredPublications="filteredPublications" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Search from "./Search.vue";
import JobList from "./JobList.vue";
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
