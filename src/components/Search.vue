<template>
    <div class="lg:container mx-auto px-4 xl:px-0 2xl:px-16">
      <form class="w-full h-20 rounded-md bg-white flex overflow-hidden search-form" @submit.prevent="searchJobs">
        <div class="form-title">
          <span class="icon block w-6 h-6 absolute select-none bg-no-repeat"></span>
          <input
            type="text"
            class="w-full h-full font-normal text-base leading-5 relative title-input"
            placeholder="Filter by title, companies, expertise…"
            v-model="titleFilter"
          >
        </div>
        <div class="form-location relative">
          <span class="icon block w-6 h-6 absolute select-none bg-no-repeat"></span>
          <input
            type="text"
            class="w-full h-full font-normal text-base leading-5 relative"
            placeholder="Filter by location…"
            v-model="locationFilter"
          >
        </div>
        <div class="form-fulltime__checkbox flex items-center pl-8">
          <label for="fulltime" class="font-bold text-base leading-5 inline-flex items-center cursor-pointer">
            <input type="checkbox" class="absolute opacity-0" name="fulltime" id="fulltime" v-model="fullTimeOnly">
            <span class="checkmark relative w-6 h-6 rounded mr-4"></span>
            Full Time Only
          </label>
        </div>
        <div class="submit flex items-center justify-center mr-2">
          <button type="submit" class="font-bold text-base leading-5 text-center rounded">Search</button>
        </div>
      </form>
    </div>
  </template>

<script>
export default {
  name: 'Search',
  props: ['publications'],
  data() {
    return {

        titleFilter: '',
      locationFilter: '',
      fullTimeOnly: false,
    };
  },
  created() {
    const query = this.$route.query;
    if (query.title || query.location || query.fullTimeOnly) {
      this.titleFilter = query.title || '';
      this.locationFilter = query.location || '';
      this.fullTimeOnly = query.fullTimeOnly === 'true';
      this.searchJobs();
    }
  },
  methods: {
    searchJobs() {
      const filteredPublications = this.publications.filter(publication => {
        const titleMatch = publication.position.toLowerCase().includes(this.titleFilter.toLowerCase());
        const locationMatch = publication.country.toLowerCase().includes(this.locationFilter.toLowerCase());
        const fullTimeMatch = !this.fullTimeOnly || publication.work_type.toLowerCase() === 'full time';
        return titleMatch && locationMatch && fullTimeMatch;
      });

      this.$emit('filter', filteredPublications);

      const queryParams = {
        title: this.titleFilter,
        location: this.locationFilter,
        fullTimeOnly: this.fullTimeOnly.toString(),
      };
      this.$router.push({ query: queryParams });
    },
    filterFromURLParams() {
      const query = this.$route.query;
      this.titleFilter = query.title || '';
      this.locationFilter = query.location || '';
      this.fullTimeOnly = query.fullTimeOnly === 'true';
      this.searchJobs();
    },
  },
  created() {
    this.filterFromURLParams();
  },
};
</script>
