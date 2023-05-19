<template>
  <div class="joblist lg:container p-4 2xl:p-16 xl:p-0 mx-auto">
    <div class="flex justify-between flex-wrap gap-y-20">
      <template v-for="(item, index) in visiblePublications" :key="item.time_published">
        <JobItem :item="item" />
      </template>
    </div>
    <div v-if="filteredPublications.length === 0" class="no-results">No results found.</div>
    <button v-if="hasMoreItems" class="loadmore mx-auto block mt-12 font-bold text-base leading-5 text-center rounded" @click="loadMore">Load More</button>
  </div>
</template>

<script>
import JobItem from "./JobItem.vue";

export default {
  name: 'JobList',
  props: ['filteredPublications'],
  data() {
    return {
      visiblePublications: this.filteredPublications.slice(0, 12), // Initial 12 items
      itemsPerPage: 12, // Number of items to load per page
      currentPage: 1 // Current page
    };
  },
  computed: {
    hasMoreItems() {
      return this.currentPage * this.itemsPerPage < this.filteredPublications.length;
    }
  },
  components: {
    JobItem
  },
  mounted() {
    // Handle initial filtering when the component is mounted
    this.filterFromURLParams();
  },
  methods: {
    loadMore() {
      const startIndex = this.currentPage * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const newItems = this.filteredPublications.slice(startIndex, endIndex);
      this.visiblePublications = this.visiblePublications.concat(newItems);
      this.currentPage++;

      // Update the URL with the filter parameters
      const queryParams = {
        title: this.$route.query.title || '',
        location: this.$route.query.location || '',
        fullTimeOnly: this.$route.query.fullTimeOnly || '',
      };
      this.$router.push({ query: queryParams });
    },
    filterFromURLParams() {
      // Perform the filtering with the URL parameters
      const query = this.$route.query;
      // Existing code to filter the data based on the query parameters
      
      // Update the visiblePublications based on the filtered data
      this.visiblePublications = this.filteredPublications.slice(0, this.currentPage * this.itemsPerPage);
    },
  },
  watch: {
    filteredPublications() {
      this.visiblePublications = this.filteredPublications.slice(0, 12);
      this.currentPage = 1;
    }
  }
};
</script>
