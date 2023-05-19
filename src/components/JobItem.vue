<template>
    <router-link :to="`/jobs/${item.id}`" class="job-item relative rounded-md">
        <div class="company-logo absolute overflow-hidden"><img src="https://placehold.co/50x50" alt=""></div>
        <div class="item-top mt-3">
            <span class="item-time">{{ getTimeAgo(item.time_published) }}</span>
            <span class="item-jobtype">{{ item.work_type }}</span>
        </div>
        <span class="item-jobname font-bold text-xl leading-6 block mt-4">{{ item.position }}</span>
        <span class="item-companyname mt-4 block font-normal text-base leading-5"> {{item.company  }}</span>
        <span class="item-companycountry block mt-10 font-bold text-sm leading-4">{{ item.country }}</span>
    </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "JobItem",
    props: ["item"],
    methods: {
        getTimeAgo(time) {
            const currentTime = Math.floor(Date.now() / 1000); // Convert current time to seconds
            const diff = currentTime - time; // Calculate the difference in seconds
            if (diff < 60) {
                return `${diff} seconds ago`;
            }
            else if (diff < 3600) {
                const minutes = Math.floor(diff / 60);
                return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
            }
            else if (diff < 86400) {
                const hours = Math.floor(diff / 3600);
                return `${hours} hour${hours > 1 ? "s" : ""} ago`;
            }
            else if (diff < 2592000) {
                const days = Math.floor(diff / 86400);
                return `${days} day${days > 1 ? "s" : ""} ago`;
            }
            else if (diff < 31536000) {
                const months = Math.floor(diff / 2592000);
                return `${months} month${months > 1 ? "s" : ""} ago`;
            }
            else {
                const years = Math.floor(diff / 31536000);
                return `${years} year${years > 1 ? "s" : ""} ago`;
            }
        }
    },
    components: { RouterLink }
}
</script>