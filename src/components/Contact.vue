<script setup>
import ContactFrom from './ContactFrom.vue';


</script>

<template>
   <section class="scrollbar-hidden w-full h-screen overflow-y-auto ">
      <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 m-auto relative py-10">
            <h1 class="text-amber text-center font-poppins font-extrabold text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl opacity-5 uppercase tracking-widest">contact</h1>
          <div class="absolute top-3 w-full py-9 sm:py-9 md:py-9 lg:py-10 xl:py-10">
            <p class="text-center text-amber font-poppins font-extrabold text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl uppercase">get in touch</p>
          </div>
      </div>
    <!---contact details-->
      <div class="w-full">
        <div class="w-95 sm:w-95 md:w-95 lg:w-11/12 xl:w-11/12 mx-auto py-5">
          <div class="grid grid-cols-12 gap-3">
            <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4">
              <h3 class="dark:text-white text-darkTeal uppercase font-poppins font-semibold text-2xl pb-4">don't be shy !</h3>
              <div class="pb-5">
                <p class="font-open dark:text-white text-darkTeal font-medium text-base">Feel free to get in touch with me.I am always open to discussing new project , creative
                    ideas or opportunites to be part of your visions.
                </p>
              </div>
              <div class="w-full">
                <div class="flex space-x-0 pb-5">
                  <div class="w-12">
                    <img src="../assets/map.svg">
                  </div>
                  <div class="w-full ">
                    <p class="uppercase dark:text-white text-darkTeal opacity-80 font-normal text-base font-open pb-1">address point</p>
                    <p class="font-semibold dark:text-white text-darkTeal text-base font-open">123 stree New York city.United States of America 657213. </p>
                  </div>
                </div>
                <div class="flex space-x-0 pb-5">
                  <div class="w-12">
                    <img src="../assets/mailAmber.svg">
                  </div>
                  <div class="w-full ">
                    <p class="uppercase opacity-80 font-normal dark:text-white text-darkTeal text-base font-open pb-1">mail me</p>
                    <p class="font-semibold font-open dark:text-white text-darkTeal text-base">md.armantext@gmail.com</p>
                  </div>
                </div>
                <div class="flex space-x-0 pb-10">
                  <div class="w-12">
                    <img src="../assets/phone.svg">
                  </div>
                  <div class="w-full ">
                    <p class="uppercase opacity-80 font-normal dark:text-white text-darkTeal text-base font-open pb-1">call me</p>
                    <p class="font-semibold font-open dark:text-white text-darkTeal text-base">01778762934</p>
                  </div>
                </div>
              <!---social icon-->  
                <div class="flex space-x-3 w-full">
                  <div class="w-10">
                    <a href="#">
                      <img class=" bg-lightBlack rounded-full p-2 hover:bg-amber hover:duration-300 duration-300 cursor-pointer" src="../assets/facebook.svg">
                    </a>
                  </div>
                  <div class="w-10">
                    <a href="#">
                      <img class=" bg-lightBlack rounded-full p-2 hover:bg-amber hover:duration-300 duration-300 cursor-pointer" src="../assets/twitter.svg">
                    </a>
                  </div>
                  <div class="w-10">
                    <a href="#">
                      <img class=" bg-lightBlack rounded-full p-2 hover:bg-amber hover:duration-300 duration-300 cursor-pointer" src="../assets/youtub.svg">
                    </a>
                  </div>
                  <div class="w-10">
                    <a href="#">
                      <img class=" bg-lightBlack rounded-full p-2 hover:bg-amber hover:duration-300 duration-300 cursor-pointer" src="../assets/web.svg">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          <!---contact from--->
            <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 ">
              <div class="ml-0 sm:ml-0 lg:mx-10 xl:mx-0 xl:ml-10 pt-10 sm:pt-10 md:pt-10 lg:pt-0 xl:pt-0">
                <div class="w-full">
                  <ContactFrom></ContactFrom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
   
</template>

<style scoped>

.scrollbar-hidden::-webkit-scrollbar {
  display: none;

}
.scrollbar-hidden {
  scrollbar-width: none; 
}

</style>
