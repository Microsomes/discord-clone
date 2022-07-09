<template>

    <div class="flex items-center justify-center h-screen">
        <div style="width:450px;height:500px;background:rgb(47,49,54);overflow:hidden" class="flex flex-col  rounded-md shadow-2xl">
            <div style="background:rgb(32,34,37)" class="cursor-text flex flex-row items-center h-10 ml-4 mr-4 mt-6 rounded-md">
                <div class="flex-grow">
                <p class="text-gray-400 ml-3 text-sm">Search Tenor</p>
                </div>
                <div class="pr-4">
                <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
            
            <div class=" p-1 h-12 flex-grow flex flex-wrap justify-around">
                <div class="h-40 w-52 bg-black mt-2" v-for="fav in favourites">
                    {{fav}}
                </div>
            </div>

        </div>
    </div>

</template>


<script>

    export default{
        data:function(){
            return {
                favourites:[
                    {
                        q:"dance"
                    },
                    {
                        q:"annoyed"
                    },
                    {
                        q:"omg"
                    },
                    {
                        q:"crazy"
                    },
                     {
                        q:"crazy"
                    }
                ]   
            }
        }
    }

</script>