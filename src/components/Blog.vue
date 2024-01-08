<script setup>
import {useDark , useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)



</script>

<template>

<!-- <section class="bg-gray-200 h-screen w-full dark:bg-red-500">
      <div class="w-1/4 mx-auto bg-slate-100 h-2/4 grid place-items-center pt-32 dark:bg-red-200">
        <p>isDark : {{ isDark }}</p>
        <div class="w-1/4 mx-auto">
          <img v-if="isDark" class="w-full" src="../assets/light.svg">
          <img v-if="!isDark" class="w-full" src="../assets/moon.svg">
        </div>
        <h3 class="text-black">Hello world</h3>
        <button @click="toggleDark()" class="px-4 py-2 bg-green-500 dark:bg-purple-500 rounded">
          click me
        </button>
      </div>

</section> -->



  <!-- <section class="scrollbar-hidden w-full h-screen overflow-y-auto ">
  
      <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 m-auto relative py-10">
        <h1 class="text-amber text-center font-poppins font-extrabold text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl opacity-5 uppercase tracking-widest">posts</h1>
        <div class="absolute top-3 w-full py-9 sm:py-9 md:py-9 lg:py-10 xl:py-10">
          <p class="text-center text-amber font-poppins font-extrabold text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl uppercase">my blog</p>
        </div>
      </div>
   
      <div class="w-full">
        <div class="w-full lg:w-11/12 mx-auto">
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
              <div class="w-full">
                <div class="block rounded-lg cursor-pointer bg-lightBlack text-white hover:text-amber">
                  <div class=" overflow-hidden">
                    <img class="duration-300 hover:duration-300 hover:transform hover:scale-110 overflow-hidden w-full rounded-lg" src="../assets/blog-post-1.jpg">
                  </div>
                  <div class="w-full h-1 bg-amber "></div>
                  <div class="px-5 pt-3 pb-4">
                    <h3 class=" text-xl font-semibold font-poppins pb-2 ">How to own Your Audience by Creating an Email List</h3>
                    <p class="text-gray-100 font-open text-base font-medium text-left leading-6 pb-2">Tomfoolery crikey bits and bobs brilliant bamboozled down the pub 
                      amongst brolly hanky panky, cack bonnet arse
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
              <div class="w-full">
                <div class="block rounded-lg cursor-pointer bg-lightBlack text-white hover:text-amber">
                  <div class=" overflow-hidden">
                    <img class="duration-300 hover:duration-300 hover:transform hover:scale-110 overflow-hidden w-full rounded-lg" src="../assets/blog-post-1.jpg">
                  </div>
                  <div class="w-full h-1 bg-amber "></div>
                  <div class="px-5 pt-3 pb-4">
                    <h3 class="text-xl font-semibold font-poppins pb-2">How to own Your Audience by Creating an Email List</h3>
                    <p class="text-gray-100 font-open text-base font-medium text-left leading-6 pb-2">Tomfoolery crikey bits and bobs brilliant bamboozled down the pub 
                      amongst brolly hanky panky, cack bonnet arse
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
              <div class="w-full">
                <div class="block rounded-lg cursor-pointer bg-lightBlack text-white hover:text-amber">
                  <div class=" overflow-hidden">
                    <img class="duration-300 hover:duration-300 hover:transform hover:scale-110 overflow-hidden w-full rounded-lg" src="../assets/blog-post-1.jpg">
                  </div>
                  <div class="w-full h-1 bg-amber"></div>
                  <div class="px-5 pt-3 pb-4">
                    <h3 class="text-xl font-semibold font-poppins pb-2">How to own Your Audience by Creating an Email List</h3>
                    <p class="text-gray-100 font-open text-base font-medium text-left leading-6 pb-2">Tomfoolery crikey bits and bobs brilliant bamboozled down the pub 
                      amongst brolly hanky panky, cack bonnet arse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section> -->
    
</template>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;

}
.scrollbar-hidden {
  scrollbar-width: none; 
}


</style>
