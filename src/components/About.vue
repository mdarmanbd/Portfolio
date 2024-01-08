<script setup>
import {store} from '../store/store'

</script>

<template>
    <section class="w-full h-screen overflow-y-auto">
        
        <!---title--->
        <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 m-auto relative py-20">
            <h1 class="text-amber text-center font-poppins font-extrabold text-6xl opacity-5 uppercase tracking-widest">Resume</h1>
            <div class="absolute top-3 w-full py-20">
                <p class="text-center text-amber font-poppins font-extrabold text-4xl uppercase">about me</p>
            </div>
        </div>

     <!---- responsive view--->

        <div class="w-full scrollbar-hidden h-screen overflow-y-auto block sm:block md:block lg:hidden xl:hidden">
                        <!--- img --->
                        <div class="grid sm:grid md:grid lg:hidden xl:hidden grid-cols-12">
                            <div class="w-full col-span-12 pb-4">
                                <div class="w-52 mx-auto bg-deepBlack rounded-full border-2 border-gray-700">
                                    <img class="w-full h-auto rounded-full shadow-xl" src="../assets/arman-removebg-jpg.png">
                                </div>
                            </div>
                        </div>
                        <!---details-->
                        <div class="py-4 w-full px-4">
                            <h3 class="dark:text-white text-darkTeal uppercase text-xl font-poppins font-semibold pb-4">personal infos</h3>
                            <div class="w-full flex space-x-0 pb-4">
                                <!--left side-->
                                <div class="w-1/2">
                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">first name : </p>
                                        <p class="capitalize dark:text-white text-darkTeal font-semibold font-open text-base" >arman </p>
                                    </div>

                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">Age : </p>
                                        <p class="capitalize dark:text-white text-darkTeal font-semibold font-open text-base" >27 years </p>
                                    </div>

                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">freelance : </p>
                                        <p class="capitalize dark:text-white text-darkTeal font-semibold font-open text-base" >available </p>
                                    </div>

                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">phone : </p>
                                        <p class="capitalize dark:text-white text-darkTeal font-semibold font-open text-base" >01682650196 </p>
                                    </div>

                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">skype : </p>
                                        <p class="lowercase dark:text-white text-darkTeal font-semibold font-open text-base" >example@.com </p>
                                    </div>
                                    
                                </div>
                                <!---right side-->
                                <div class="w-1/2 ">
                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">last name : </p>
                                        <p class="capitalize dark:text-white text-darkTeal font-semibold font-open text-base" >hossain </p>
                                    </div>
                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">natonality : </p>
                                        <p class="capitalize dark:text-white text-darkTeal font-semibold font-open text-base" >bangaldeshi </p>
                                    </div>
                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">address : </p>
                                        <p class="capitalize dark:text-white text-darkTeal font-semibold font-open text-base" >dhaka </p>
                                    </div>
                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">email : </p>
                                        <p class="lowercase dark:text-white text-darkTeal font-semibold font-open text-[14px]" >md.armantext@gmail.com </p>
                                    </div>
                                    <div class="pb-4">
                                        <p class="capitalize dark:text-white text-darkTeal opacity-80 font-open font-medium text-base">langages : </p>
                                        <p class="lowercase dark:text-white text-darkTeal font-semibold font-open text-base" >bangla , english</p>
                                    </div>
                                </div>
                            </div>
                            

                          <!---download cv button-->
                          
                            <div class="w-full pb-14 sm:pb-14 md:pb-0 lg:pb-10 xl:pb-10">
                                <div class="w-full ">
                                    <div class="!w-full sm:!w-full md:!w-full lg:w-3/4 xl:w-3/4 lg:m-auto xl:m-auto flex justify-start sm:justify-center md:justify-center lg:justify-start xl:justify-start pt-3 sm:pt-3 md:pt-3 lg:pt-0 xl:pt-3">
                                        <div class=" about-button flex justify-between gap-3 lg:w-64 xl:w-64 border border-amber rounded-full">
                                            <button class="dark:text-white text-darkTeal px-5 text-sm font-montserrat font-semibold bg-transparent uppercase cursor-pointer ">
                                                    DOWNLOAD CV
                                                <div class="overlay"></div>
                                            </button>
                                                <!--button img icon-->
                                            <img class="w-12 p-1 bg-amber rounded-full " src="../assets/download.svg">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
            </div>

        <!----laptop view----->


        <div class="hidden sm:hidden md:hidden lg:block xl:block w-1/2 m-auto ">
            <h3 class="dark:text-white text-darkTeal uppercase text-xl font-poppins font-semibold pb-5">personal infos</h3>
            <div class="w-full block sm:block md:block lg:flex xl:flex justify-between gap-2 pb-5">
                <!---left side---> 
                <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ">
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">first name : </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">arman</p>
                    </div>
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">age : </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">29 years</p>
                    </div>
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">freelance : </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">available</p>
                    </div>
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">phone : </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">01682650196</p>
                    </div>
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">facebook </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">example@.com</p>
                    </div>
                </div>
                          <!---right side-->  
                <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ">
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">last name : </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">hossain</p>
                    </div>
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">nationlity : </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">bangladeshi</p>
                    </div>
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">address : </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">dhaka</p>
                    </div>
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">email : </p>
                        <p class="lowercase font-open font-semibold text-base dark:text-white text-darkTeal ">md.armantext@gmail.com</p>
                    </div>
                    <div class="flex space-x-3 pb-4">
                        <p class="capitalize font-open text-base font-medium dark:text-white text-darkTeal opacity-85">langages : </p>
                        <p class="capitalize font-open font-semibold text-base dark:text-white text-darkTeal ">bangla , english</p>
                    </div>
                </div>
            </div>
        <!---download cv button -->
            <div class="w-full pb-14 sm:pb-14 md:pb-0 lg:pb-10 xl:pb-10">
                <div class="w-full ">
                    <div class="!w-full sm:!w-full md:!w-full lg:w-3/4 xl:w-3/4 lg:m-auto xl:m-auto flex justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start pt-3 sm:pt-3 md:pt-3 lg:pt-0 xl:pt-3">
                        <div class=" about-button flex justify-between gap-3 lg:w-64 xl:w-64 border border-amber rounded-full">
                             <button class="dark:text-white text-darkTeal px-5 text-sm font-montserrat font-semibold bg-transparent uppercase cursor-pointer ">
                                DOWNLOAD CV
                                <div class="overlay"></div>
                            </button>
                        <!--button img icon-->
                            <img class="w-12 p-1 bg-amber rounded-full " src="../assets/download.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* about button design */
.about-button{
     cursor: pointer;
     /* background-color: red; */
     background-color: transparent;
     position: relative;
     overflow: hidden;
 }
 .about-button button .overlay{
   position: absolute;
    border-radius: 50px 50px;
    top: 0;
    left: 200px;
    height: 48px;
    width: 50px;
    background-color: #ffb400;
    opacity: 0.1;
    transition: 0.4s all;
    z-index: -1;
    
}

.about-button:hover .overlay{
    left: 0;
    transition: 0.4s all;
    width: 100%;
    z-index: 1;
   
}
.about-button:hover button{
    opacity: 1000;
    
}




</style>