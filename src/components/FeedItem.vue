<template>

     <li @click="selectPost(post)" class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
      <div class="flex justify-between space-x-3">
        <div class="min-w-0 flex-1">
          <a href="#" class="block focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <!-- <p class="text-sm font-medium text-gray-900 truncate">{{ post.author }}</p> -->
            <p class="text-sm text-gray-500 truncate">{{ post.author }}</p>
            <p class="text-sm text-gray-500 truncate">{{ post.title }}</p>
          </a>
        </div>
        <time :datetime="post.date" class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{{ post.fromNow }}</time>
      </div>
      <div class="mt-1">
        <p class="line-clamp-2 text-sm text-gray-600">
          {{ post.miniDescription }}
        </p>
      </div>
    </li>

</template>



<script>

    export default{
        props:["post"],
        methods:{
      selectPost(post){
        console.log(post)
        this.$router.push("/post/"+post._id)
      }
    }
    }
    


</script>