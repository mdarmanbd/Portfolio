<script setup>


</script>

<template>
    <section class="w-full">
        <!--heading section-->
        <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 m-auto relative py-20">
            <h1 class="text-amber text-center font-poppins font-extrabold text-6xl opacity-5 uppercase tracking-widest">Resume</h1>
            <div class="absolute top-3 w-full py-20">
                <p class="text-center text-amber font-poppins font-extrabold text-4xl uppercase">about me</p>
            </div>
        </div>
        <!----->
        <div class="w-full">
            <div class="w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5 m-auto px-5">
                <h2 class="uppercase text-white font-poppins text-xl pb-5 font-semibold">personal infos</h2>
                <div class="grid sm:grid md:grid lg:hidden xl:hidden grid-cols-12">
                    <div class="w-full col-span-12 pb-5">
                       <div class="w-32 mx-auto  bg-amber rounded-full">
                            <img class="w-32 h-auto rounded-full shadow-xl  " src="../assets/arman-removebg-jpg.png">
                       </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 ">
                    <div class="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6">
                        <div class="space-y-2 pb-5 px-3 sm:px-3 md:px-3 lg:px-0 xl:px-0">
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">First Name:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lg font-medium text-white ">Arman</span>
                            </P>
                            <P class=" text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Age:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lg font-medium text-white">27 Years</span>
                            </P>
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Freelancer:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lg font-medium text-white">Availabe</span>
                            </P>
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Phone:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lg font-medium text-white">01682650196</span>
                            </P>
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Skype:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lg font-medium text-white">Example@.com</span>
                            </P>
                        </div>
                       
                        
                    </div>
                    <div class="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 w-full">
                        <div class="w-full space-y-2 px-4 sm:px-4 md:px-4 lg:px-0 xl:px-0">
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Last Name:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lg font-medium text-white ">Hossain</span>
                            </P>
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Age:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lg font-medium text-white">29 Years</span>
                            </P>
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Address:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lg font-medium text-white">Dhaka</span>
                            </P>
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Email:
                                <span class="text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium text-white">md.armantext@gmail.com</span>
                            </P>
                            <P class="text-gray-400 font-poppins text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">Langages:
                                <span class="text-base sm:text-base md:text-base lg:text-lg xl:text-lgfont-medium text-white">Bangla,English</span>
                            </P>
                        </div>
                    </div>
                </div>
                <!------>
                <div class="w-full pt-3">
                    <div class="about-button flex justify-between gap-3 w-56 sm:w-56 md:w-56 lg:w-64 xl:w-60 border border-amber rounded-full">
                        <button class=" px-5 text-sm font-montserrat font-semibold text-white bg-transparent uppercase cursor-pointer ">
                                DOWNLOAD CV
                            <div class="overlay"></div>
                        </button>
                        <!--button img icon-->
                        <img class="w-12 p-1 bg-amber rounded-full " src="../assets/download.svg">
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