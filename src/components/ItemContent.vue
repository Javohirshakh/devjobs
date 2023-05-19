<template>
    <template \ v-for="item in filteredData" :key="item.id" >
    <div class="lg:container p-4 2xl:px-52 xl:p-0 mx-auto">
      <div class="item-content-header flex h-32 rounded-md -mt-10">
        <div class="item-logo w-32 h-32 flex items-center justify-center text-white bg-yellow-600">
            Scoot
        </div>
        <div class="item-companyinfo">
          <div class="font-bold text-2xl leading-7 mb-3">{{ item.company }}</div>
          <span class="font-normal text-base leading-5 text-gray-600">companysite.com</span>
        </div>
        <div class="item-companysite flex items-center justify-center">
          <a class="font-bold text-base leading-5 rounded" href="#" target="_blank">Company site</a>
        </div>
      </div>
  
      <div class="item-content-main rounded-md mt-8">
        <div class="item-top mt-3">
            <span class="item-time">{{ getTimeAgo(item.time_published) }}</span>
            <span class="item-jobtype">{{ item.work_type }}</span>
        </div>
        <div class="item-title flex justify-between">
            <div class="font-bold text-3xl leading-9">{{ item.position }}
                <div class="item-country font-bold text-sm leading-4">United Kingdom</div>
            </div>
            <a href="#" class="font-bold text-base leading-5 rounded">Apply Now</a>
        </div>
        <p class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam unde laboriosam reprehenderit omnis atque incidunt iste explicabo amet mollitia perspiciatis minus ab quos aliquid voluptates, assumenda ullam fugit facilis repellendus sit veniam itaque possimus pariatur? Praesentium facilis qui tenetur corrupti illo voluptas pariatur impedit earum assumenda, recusandae nobis magnam eius error, eaque at! Distinctio fuga totam dolores, facere est soluta dolorum nam veritatis, hic aliquid incidunt natus tempore et cumque quas labore sit, illo magnam eos quia quo minus animi praesentium? Voluptatibus reprehenderit debitis explicabo saepe totam sunt vero! Impedit ratione dignissimos eaque neque sunt perferendis molestiae quo quod consequuntur animi soluta libero voluptatibus quam consectetur dolorum excepturi minima, odit velit. Iste quas at magni quia? A error quasi ad possimus numquam id nemo repellat nostrum. Et non repudiandae quibusdam modi, iusto soluta unde esse nulla excepturi molestias a possimus culpa vitae laudantium! Fugiat accusantium nobis ab, atque maxime a deleniti nostrum consequuntur non corporis incidunt! Pariatur omnis repellendus dolores est sunt sint necessitatibus a numquam minus. Voluptate repudiandae adipisci facilis, asperiores illum quod temporibus eligendi vitae perferendis, suscipit hic? Error at aperiam similique illum voluptas? Numquam voluptatum, dolores maxime dolorum eius molestias iste culpa officia! Atque recusandae perspiciatis totam! A, quibusdam, iusto unde deserunt veritatis quam temporibus expedita laborum ut animi molestias tenetur vero praesentium aspernatur porro tempora aperiam ipsa omnis maiores doloremque sequi! Eos, delectus ex, tenetur ipsum, magni voluptas tempora enim qui debitis cum quaerat vero consectetur sapiente. Mollitia nemo veniam cumque eveniet illo, deleniti maiores, officia esse sit tempora velit eius sint aut consequatur. Earum eos eius deleniti veniam minima similique quis quaerat, quo dolore doloremque incidunt reprehenderit perferendis. Quaerat quae earum facere eveniet molestias vero minima sit dicta neque totam quibusdam laboriosam eius quo, officia magnam at corporis delectus exercitationem amet veniam reprehenderit cum architecto in cupiditate! Porro numquam inventore molestiae ratione voluptates quidem facilis consectetur provident optio? Soluta dicta quae fuga libero recusandae! Nobis vitae commodi veritatis architecto harum quia eaque. Non repudiandae eos minus aliquid, ad tempore quasi architecto, quas ipsa pariatur quaerat inventore dolorum explicabo. Porro voluptate dignissimos ad, corrupti libero, voluptatum mollitia quidem ea laborum nam maiores quas reprehenderit corporis. Hic placeat sed quas voluptatibus illo asperiores dolore dignissimos repellat, laborum, nemo totam esse eius, at neque? Necessitatibus distinctio vero adipisci commodi odit magni voluptas ducimus, sapiente corporis minus dolorem quae vel id, eius rerum nemo modi itaque molestiae placeat a, quibusdam saepe facilis non. Blanditiis, non. Corrupti consectetur ducimus consequuntur est voluptate ex assumenda nesciunt esse, quidem neque suscipit placeat, modi eos. Amet, molestiae dolorum. Eaque eveniet rerum excepturi, numquam, ratione nihil illo velit culpa vero, praesentium omnis quod accusantium quisquam! Quaerat quasi deleniti blanditiis a error beatae deserunt veritatis laborum sunt distinctio nisi cumque nesciunt perspiciatis totam assumenda, nam eum aperiam quisquam voluptate quis delectus architecto, eveniet eos! Sint quis pariatur odit perferendis. Totam, facere. Ut deleniti vel, aliquam distinctio soluta veniam recusandae explicabo iusto officia doloremque dolore facere minus natus quo impedit delectus obcaecati repudiandae, rerum harum!</p>
      </div>
    </div>

    <div class="footer w-full mt-20">
        <div class="flex justify-between p-6 lg:container p-4 2xl:px-16 xl:p-0 mx-auto">
            <div class="position-info flex flex-col">
                <span class="font-bold text-xl leading-6">{{ item.position }}</span>
                <span class="mt-3">{{ item.company }}</span>
            </div>
            <div class="flex flex-col justify-center apply-wrapper">
                <a href="#" target="_blank" class="apply font-bold text-base leading-5 rounded">Apply Now</a>
            </div>
        </div>
    </div>
    </template>
  </template>
  
  <script>
  import publications from "../data.json";
  
  export default {
    props: {
      uid: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        data: []
      };
    },
    computed: {
      filteredData() {
        return this.data.filter(item => item.id === this.uid);
      }
    },
    mounted() {
      this.data = publications;
    },
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
  };
  </script>
  