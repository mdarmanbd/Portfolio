<script setup>
import {project} from '../store/project'
</script>

<template>
    <div class="w-full ">
        <div class="">
            <div class="fixed sm:fixed md:fixed lg:fixed xl:fixed left-[4%] sm:left-[4%] md:left-[4%] lg:left-[11.7%] xl:left-[11.7%] top-10 sm:top-10 md:top-10 lg:top-10 xl:top-24 w-11/12 sm:w-11/12 md:w-11/12 lg:w-3/5 m-auto z-10 ">
                <div class="z-10 w-full top-0 bg-eerieBlack rounded-lg ">
                    <!--close icon-->
                    <div class="w-full flex justify-end p-2">
                        <div @click="project.closeProjectButton" class="w-10 cursor-pointer">
                            <img src="../assets/cross.svg">
                        </div>
                    </div>
                    <!--project title-->
                    <div class="pt-2 pb-5">
                        <h3 class="text-amber font-bold text-3xl text-center uppercase font-poppins">mockup project</h3>
                    </div>
                     <!--project details-->
                    <div class="w-11/12 mx-auto block sm:block md:block lg:flex xl:flex justify-between gap-2 pb-5">
                        <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 space-y-2">
                            <div class="flex space-x-2">
                                <img src="../assets/project.svg">
                                <p class="text-lavenderGray font-open text-base font-medium">Project : </p>
                                <p class="text-lavenderGray font-open text-base font-semibold">Website</p>
                            </div>
                            <div class="flex space-x-2">
                                <img src="../assets/code.svg">
                                <p class="text-lavenderGray font-open text-base font-medium">Langages : </p>
                                <p class="text-lavenderGray font-open text-base font-semibold">HTML,CSS,Javascript</p>
                            </div>
                           
                        </div>
                        <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pt-3 sm:pt-3 md:pt-3 lg:pt-0 xl:pt-0 space-y-2">
                            <div class="flex space-x-2">
                                <img src="../assets/client.svg">
                                <p class="text-lavenderGray font-open text-base font-medium">Client : </p>
                                <p class="text-lavenderGray font-open text-base font-semibold">Envato</p>
                            </div>
                            <div class="flex space-x-2">
                                <img src="../assets/link.svg">
                                <p class="text-lavenderGray font-open text-base font-medium">Preview : </p>
                                <p class="text-lavenderGray font-open text-base font-semibold">
                                    <a class="underline text-amber" href="www.facebook.com" target="_blank">www.arman.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--project img-->
                    <div class="w-full pb-2 sm:pb-2 md:pb-2 lg:pb-5 xl:pb-5">
                        <div class="w-11/12 mx-auto h-80 overflow-hidden">
                            <img class="w-full " src="../assets/project_1.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<style scoped>


</style>
