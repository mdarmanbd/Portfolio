<script setup>
import { ref } from 'vue'
import ProfileImg from './ProfileImg.vue';
import ProfileDetails from './ProfileDetails.vue'

const count = ref(0)

</script>

<template>
    <section class="w-full">
        <div class="w-full h-screen bg-dreamlessSleep fixed">
            <div class="w-full">
                <!--bg color block-->
                <div class= "color-block" ></div>
                <!--container-->
                <div class="w-11/12 mx-auto">
                    <div class="w-full flex">
                        <div class="fixed top-20 bg-deepBlack rounded-lg h-4/5 w-1/4">
                            <ProfileImg/>
                        </div>
                        <div class="relative w-full">
                            <ProfileDetails/>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
           
          
            <div class="w-11/12 mx-auto">
                <!--light icon-->
                <div class="w-full flex justify-end pt-10">
                    <img class="w-14 bg-lightBlack rounded-full p-1 cursor-pointer" src="../assets/light.svg">
                </div>
                
            </div>
            
            
        </div>
    </section>
  
 


</template>

<style scoped>
    .color-block{
        background-color: rgb(216, 169, 27);
        position: fixed;
        height: 200%;
        width: 100%;
        transform: rotate(-18deg);
        left: -87%;
        top: -60%;
    }
</style>