<script setup>
    import { project } from '../store/project';
    import projectOne from './ProjectOne.vue'
    import ProjectTwoVue from './ProjectTwo.vue';
    import ProjectThree from './ProjectThree.vue'
    import ProjectFour from './ProjectFour.vue'
    import ProjectFive from './ProjectFive.vue'
    import ProjectSix from './ProjectSix.vue'
    import projectSeven from './ProjectSeven.vue'
    import ProjectEight from './ProjectEight.vue'
    import ProjectNine from './ProjectNine.vue'



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
        <!--select project-->

        <!--project one-->
            <div v-if="project.firstProject" class="w-full">
                <projectOne></projectOne>
            </div>

        <!---project two-->
            <div v-if="project.secondProject" class="w-full">
                <ProjectTwoVue></ProjectTwoVue>
            </div>
        <!--project three-->
            <div v-if="project.thirdProject" class="w-full">
                <ProjectThree></ProjectThree>
            </div>
        <!---project four-->
            <div v-if="project.fourProject" class="w-full">
                <ProjectFour></ProjectFour>
            </div>
        <!---project five--->
            <div v-if="project.fiveProject" class="w-full">
                <ProjectFive></ProjectFive>
            </div>
        <!---project six-->
            <div v-if="project.sixProject" class="w-full">
                <ProjectSix></ProjectSix>
            </div>
        <!---project seven-->
            <div v-if="project.sevenProject" class="w-full">
               <projectSeven></projectSeven>
            </div>
        <!---project eight-->
            <div v-if="project.eightProject" class="w-full">
                <ProjectEight></ProjectEight>
            </div>
        <!----project nine--> 
            <div v-if="project.nineProject" class="w-full">
                <ProjectNine></ProjectNine>
            </div>

        <!-- nine project-->
        <div class="w-full ">
        <div :class="[project.opacityActive ? 'opacity-5 , pointer-events-none ' : 'opacity-100']" class=" w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/4  m-auto">
          <div class="grid grid-cols-12 gap-5 pb-28 sm:pb-28 md:pb-24 lg:pb-12 xl:pb-12 px-3 sm:px-3 py-5 sm:py-5 ">
            <div @click="project.projectOne" class="relative overflow-hidden cursor-pointer col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <img class="w-full rounded-md" src="../assets/project_1.jpg">
              <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                <div class=" absolute top-[40%] left-0 w-full h-full ">
                  <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                </div>
              </div>
            </div>
            <div @click="project.projectTwo" class="relative overflow-hidden cursor-pointer col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
                <img class="w-full rounded-md" src="../assets/project-2..jpg">
                <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                  </div>
                </div>
            </div>
            <div @click="project.projectThree" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
                <img class="w-full rounded-md" src="../assets/project-3.jpg">
                 <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                  </div>
                </div>
            </div>
            <div @click="project.projectFour" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <img class="w-full rounded-md" src="../assets/project-4.jpg">
               <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                  </div>
                </div>
            </div>
            <div @click="project.projectFive" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <img class="w-full rounded-md" src="../assets/project-5.jpg">
               <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                  </div>
                </div>
            </div>
            <div @click="project.projectSix" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
                <img class="w-full rounded-md" src="../assets/project-6.jpg">
                 <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                  </div>
                </div>
            </div>
            <div @click="project.projectSeven" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
                <img class="w-full rounded-md" src="../assets/project-7.jpg">
                 <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                  </div>
                </div>
            </div>
            <div @click="project.projectEight" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
                <img class="w-full rounded-md" src="../assets/project-8.jpg">
                 <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                  </div>
                </div>
            </div>
            <div @click="project.projectNine" class="relative overflow-hidden cursor-pointer   col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4 w-full sm:w-full md:w-full lg:w-full xl:w-full xl:h-5/5 xl:rounded-lg mx-auto">
              <!--laptob view-->
              <div class="hidden sm:hidden md:hidden lg:hidden xl:block w-full">
                <img class="w-full rounded-md" src="../assets/project-9.jpg">
                <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                  <div class=" absolute top-[40%] left-0 w-full h-full">
                    <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
                  </div>
                </div>
              </div>
              <!--mobile view-->
              <div class="w-full block sm:block md:block lg:block xl:hidden">
                <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto">
                  <img class="w-full rounded-md" src="../assets/project-9.jpg">
                  <div class="absolute bg-amber rounded-lg top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300">
                    <div class=" absolute top-[40%] left-0 w-full h-full">
                      <p class="z-10 text-white font-poppins font-bold text-xl text-center">Hello World</p>
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
