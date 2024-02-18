<script setup>
    import { project } from '../store/project';
  



</script>

<template>
    <section class="scrollbar-hidden w-full h-screen overflow-y-auto ">
       <!--heading section-->
       <div :class="[project.opacityActive ? 'opacity-5 , pointer-events-none ' : 'opacity-100']" class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 m-auto relative py-10">
            <h1 class="text-amber text-center font-poppins font-extrabold text-7xl opacity-5 uppercase tracking-widest">works</h1>
            <div class="absolute top-3 w-full py-10">
                <p class="text-center text-amber font-poppins font-extrabold text-4xl uppercase">my portfolio</p>
            </div>
        </div> 
        <!---project--->
        <div class="w-full ">
        <div :class="[project.opacityActive ? 'opacity-5 , pointer-events-none ' : 'opacity-100']" class=" w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/4  m-auto">
          <div class="grid grid-cols-12 gap-5 pb-28 sm:pb-28 md:pb-24 lg:pb-12 xl:pb-12 px-3 sm:px-3 py-5 sm:py-5 ">
            <div @click="project.projectOne" class="relative overflow-hidden cursor-pointer col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <div class="h-full bg-white rounded-lg">
                <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                  <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">E-commerce</h3>
                </div>
              </div>
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full ">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center"> Vue.js , Tailwind css</p>
                </div>
              </div>
            </div>
            <!---second project-->
            <div @click="project.projectTwo" class="relative overflow-hidden cursor-pointer col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <div class="h-full bg-white rounded-lg">
                <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                  <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">To-Do App</h3>
                </div>
              </div>
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center">Vue.js , Tailwind css</p>
                </div>
              </div>
            </div>
            <!---third project-->
            <div @click="project.projectThree" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <div class="h-full bg-white rounded-lg">
                <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                  <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">Weather App</h3>
                </div>
              </div>
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center">JavaScript , CSS</p>
                </div>
              </div>
            </div>
            <!---forth project-->
            <div @click="project.projectFour" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <div class="h-full bg-white rounded-lg">
                <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                  <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">Animation</h3>
                </div>
              </div>
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center">JavaScript , Tailwind css</p>
                </div>
              </div>
            </div>
            <!---fith project-->
            <div @click="project.projectFive" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <div class="h-full bg-white rounded-lg">
                <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                  <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">Educational Website</h3>
                </div>
              </div>
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center">bootstrap 5 , JavaScript </p>
                </div>
              </div>
            </div>
            <!---six project-->
            <div @click="project.projectSix" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <div class="h-full bg-white rounded-lg">
                <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                  <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">Rick-&-Morty</h3>
                </div>
              </div>
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center">Tailwind css</p>
                </div>
              </div>
            </div>
            <!---seven project-->
            <div @click="project.projectSeven" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <div class="h-full bg-white rounded-lg">
                <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                  <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">E-commerce</h3>
                </div>
              </div>
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center">bootstrap 5</p>
                </div>
              </div>
            </div>
            <!---eight project-->
            <div @click="project.projectEight" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <div class="h-full bg-white rounded-lg">
                <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                  <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">E-commerce</h3>
                </div>
              </div>
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center">bootstrap 5</p>
                </div>
              </div>
            </div>
            <!---nine project-->
            <div @click="project.projectNine" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <!--laptob view-->
              <div class="hidden sm:hidden md:hidden lg:hidden xl:block w-full">
                <div class="h-full bg-white rounded-lg">
                  <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                    <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">E-commerce</h3>
                  </div>
                </div>
                <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">bootstrap 5</p>
                  </div>
                </div>
              </div>
              <!--mobile view-->
              <div class="w-full block sm:block md:block lg:block xl:hidden">
                <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto">
                  <div class="h-full bg-white rounded-lg">
                    <div class="grid place-items-center h-[250px] sm:h-[250px] mg:h-[250px] lg:h-[180px] xl:h-[180px]">
                      <h3 class="text-center text-2xl font-poppins font-bold text-mideNightTeal">E-commerce</h3>
                    </div>
                  </div>
                  <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                    <div class=" absolute top-[40%] left-0 w-full h-full">
                      <p class="z-10 text-white font-poppins font-bold text-xl text-center">bootstrap 5</p>
                    </div>
                  </div>
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
