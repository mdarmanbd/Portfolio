<script setup>

</script>

<template>
    <div class="absolute top-40 left-[40%] w-full flex">
        <div class="w-3/4">
            <div class="">
                <h2 class="text-amber text-5xl font-poppins font-bold uppercase pb-2">i'm arman hossain.</h2>
                <h2 class="text-white font-poppins font-bold text-5xl uppercase ">web designer</h2>
            </div>
            <div class="py-5">
                <p class="text-white font-poppins font-medium text-base leading-9">i'm Bangladeshi based web designer & front-end developer 
                    focused on crafting clean  & user-friendly experiences.
                    i am passionate about building excellent software that improves
                    the lives of those around me.  
                </p>
            </div>
            <div class="more-Button flex justify-between gap-3 w-64 border border-amber rounded-full">
                <button class=" px-5 text-base font-montserrat font-semibold text-white bg-transparent uppercase cursor-pointer">
                    more about me
                </button>

                <div class="">
                    <img class="w-12 p-1 bg-amber rounded-full " src="../assets/rightArrow.svg">
                </div> 
                   
            </div>
        </div>

       <div class="w-full">

       </div>
       
    </div>

</template>

<style scoped>
    .more-Button{
        /* background-color: transparent;
        background-position: 100% 0; 
        background-size: 200% 100%;
        cursor: pointer;
        transition: 2s */
        background-color: transparent;   
        background-position: -100% 0; 
        background-size: 200% 100%;
        transition: background-position 2s; 
    }
    .more-Button:hover{
        /* background-position: 100% 0;
        background-image: linear-gradient(to left, #ffb400, transparent);
        cursor: pointer;
        transition: 2s */
        background-position: 100% 0; 
        background-image: linear-gradient(to right, transparent, #ffb400);
    }

</style>
