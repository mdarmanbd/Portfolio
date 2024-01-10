<script setup>
import { fromValidation} from '../store/Cfrom'


</script>

<template>
    <section class="w-full">
       <div class="w-full flex space-x-3 pb-6">
            <div class="w-1/2">
                <input v-model="fromValidation.firstName" class="w-full dark:bg-eerieBlack bg-white dark:text-white text-darkTeal rounded-3xl font-open text-base border-none py-2 pl-5 pb-2
                 focus:outline-amber focus:outline-1 focus:duration-300 duration-300 outline-none placeholder:opacity-50" placeholder="YOUR NAME" required>
                 <small v-if="fromValidation.nameError"  class="text-xs text-red-400 font-open font-normal duration-300 opacity-75 pl-10"> name langth more then 4</small>
            </div>
            <div class="w-1/2">
                <input v-model="fromValidation.email" class="w-full rounded-3xl dark:bg-eerieBlack bg-white dark:text-white text-darkTeal font-open text-base border-none py-2 pl-5 pb-2
                 focus:outline-amber focus:outline-1 focus:duration-300 duration-300 outline-none placeholder:opacity-50" placeholder="YOUR EAMIL" required>
                 <small v-if="fromValidation.emailError" class="text-xs text-red-400 font-open font-normal duration-300 opacity-75 pl-10">correct email address</small>
            </div>
       </div>
       <div class="w-full pb-6">     
            <input v-model="fromValidation.subject" class="w-full dark:bg-eerieBlack bg-white dark:text-white text-darkTeal font-open rounded-3xl text-base border-none py-2 pl-5 pb-2
             focus:outline-amber focus:outline-1 focus:duration-300 duration-300 outline-none placeholder:opacity-50" placeholder="YOUR SUBJECT" required>
             <small v-if="fromValidation.subjectError" class="text-xs text-red-400 font-open font-normal duration-300 opacity-75 pl-10">subject langth more then 3</small>
       </div>
       <div class="w-full pb-6">    
            <textarea v-model="fromValidation.textArea" class="w-full h-60 dark:bg-eerieBlack bg-white dark:text-white text-darkTeal rounded-3xl font-open text-base border-none py-2 pl-5
             focus:outline-amber focus:outline-1 focus:duration-300 duration-300 outline-none placeholder:opacity-50" placeholder="YOUR MESSAGE" required>
            </textarea>
            <small v-if="fromValidation.textError" class="text-xs text-red-400 font-open font-normal duration-300 opacity-75 pl-10">massage has minimum 10 words </small>
       </div>

    <!----send button---->
        <div class="pb-36 sm:pb-36 md:pb-36 lg:pb-20 xl:pb-0">
            <div @click="fromValidation.sendMessageButton" class="about-button flex justify-between gap-3 w-64 sm:w-64 md:w-64 lg:w-64 xl:w-64 border border-amber rounded-full">
                <button class="dark:text-white text-darkTeal px-5 text-sm font-montserrat font-semibold bg-transparent uppercase cursor-pointer">
                    send message
                    <div class="overlay"></div>
                </button>
            <!--button img icon-->
                <img class="w-12 p-2 bg-amber rounded-full " src="../assets/send.svg">
            </div>
        </div>
       
    </section>

</template>

<style scoped>
/* sent button design */
 .about-button{
     cursor: pointer;
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