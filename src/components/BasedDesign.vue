<script setup>
import { ref } from 'vue'
import {store} from '../store/store'
import { project } from '../store/project';
import About from './About.vue';
import portfolio from './Portfolio.vue';
import ContactPage from './Contact.vue'
import Blog from './Blog.vue'


const count = ref(0)

</script>

<template>
    <section>
        <div class=" w-full bg-dreamlessSleep ">
            <div class="w-full grid grid-cols-12 h-full bg-dreamlessSleep fixed sm:fixed md:fixed lg:static xl:static" >
                <!---about page-->
                <div v-if="store.aboutPage" class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-10 ">
                    <About></About>
                </div>
                <!--portfolio page-->
                <div v-if="store.portfolioPage" class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-10 ">
                   <portfolio></portfolio>
                </div>
                <!---contact page-->
                <div v-if="store.contactPage" class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-10 ">
                   <ContactPage></ContactPage>
                </div>
                <!--blog page-->
                <div v-if="store.blogPage" class="col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-10 xl:col-span-10 ">
                   <Blog></Blog>
                </div>
                <!--home page-->
                <div v-if="store.home" class=" col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 ">
                    <div class="hidden sm:hidden md:hidden lg:flex xl:flex">
                        <div class= "color-block"> </div>
                    </div>
                    <div class="py-10 sm:py-10 md:py-10 lg:py-0 xl:py-0 lg:relative w-full sm:w-full md:w-full lg:w-11/12 xl:w-11/12 mx-auto lg:h-screen xl:h-screen lg:grid xl:grid lg:place-items-center xl:place-items-center">
                        <div class="w-3/5 sm:w-3/5 md:w-3/5 lg:w-full xl:w-full rounded-full sm:rounded-full md:rounded-full lg:rounded-lg xl:rounded-lg  mx-auto block sm:block md:block lg:absolute bg-deepBlack lg:h-3/4 xl:h-3/4 shadow-xl">
                            <img class="w-full  " src="../assets/arman-removebg-jpg.png" alt="Arman.jpg">
                        </div>
                    </div>
                </div>
                <div  v-if="store.home" class=" col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 ">
                    <div class="w-11/12 sm:w-11/12 md:w-11/12 lg:w-full xl:w-full mx-auto lg:h-screen lg:grid lg:place-content-center">
                        <div class="w-full text-center sm:text-center md:text-center lg:text-left xl:text-left lg:h-1/2">
                            <!--name & title-->
                            <div class="lg:w-3/4 xl:w-3/4 lg:m-auto xl:m-auto lg:text-center xl:text-center py-1 sm:py-1 md:py-1 lg:py-0 xl:py-0">
                                <h2 class="flex justify-center text-amber text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl font-poppins font-bold uppercase pb-1">
                                    <span class="hidden sm:hidden md:hidden lg:flex xl:flex">
                                        <img class="mr-1" src="../assets/underLine.svg">
                                    </span>
                                    i'm arman hossain.</h2>
                                <h2 class="text-white font-poppins font-bold text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl uppercase ">web designer</h2>
                            </div>
                            <!--details-->
                            <div class="lg:w-3/4 xl:w-3/4 lg:m-auto xl:m-auto  pb-2 sm:pb-2 md:pb-2 lg:pb-0 xl:pb-0 lg:py-5 xl:py-5">
                                <p class="text-white font-poppins font-medium text-balance sm:text-balance md:text-balance lg:text-left xl:text-left text-sm sm:text-sm md:text-sm lg:text-base xl:text-base leading-6 sm:leading-6 md:leading-6 lg:leading-9 xl:leading-9">i'm Bangladeshi based web designer & front-end developer 
                                    focused on crafting clean  & user-friendly experiences.
                                    i am passionate about building excellent software that improves
                                    the lives of those around me.  
                                </p>
                            </div>
                            <!-- button -->
                            <div class="lg:w-3/4 xl:w-3/4 lg:m-auto xl:m-auto flex justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start pt-3 sm:pt-3 md:pt-3 lg:pt-0 xl:pt-3">
                                <div class="about-button flex justify-between gap-3 lg:w-64 xl:w-64 border border-amber rounded-full">
                                    <button class=" px-5 text-sm font-montserrat font-semibold text-white bg-transparent uppercase cursor-pointer ">
                                        more about me
                                        <div class="overlay"></div>
                                    </button>
                                    <!--button img icon-->
                                    <img class="w-12 p-1 bg-amber rounded-full " src="../assets/rightArrow.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="[project.isActive ? 'opacity-5 , pointer-events-none ' : 'opacity-100']" class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2 h-screen">
                    <div class="lg:h-screen ">
                        <div class="hidden sm:hidden md:hidden lg:flex xl:flex w-full justify-center py-5">
                            <img class="w-14 bg-lightBlack rounded-full p-1 cursor-pointer" src="../assets/light.svg">
                        </div>
                     
                        <!--side nav bar--->
                        <div class=" w-full lg:grid lg:place-items-center lg:h-3/4">
                            <div class="w-full lg:w-1/4 lg:mx-auto lg:h-3/5 lg:flex lg:justify-end">
                                <ul class="w-full sm:w-full md:w-full lg:w-fit xl:w-fit absolute sm:absolute md:absolute lg:static xl:static
                                 bottom-0 flex sm:flex md:flex lg:block xl:block justify-around sm:justify-around md:justify-around
                                  bg-gray-700 sm:bg-gray-700 md:bg-gray-700 lg:bg-dreamlessSleep py-3 lg:space-y-5 ">

                                    <li @click="store.homeButton" class="home-icon  bg-amber rounded-full overflow-hidden">
                                        <p class="uppercase font-poppins text-base text-white font-medium ">home</p>
                                        <img class="p-2" src="../assets/home.svg">
                                       
                                    </li>
                                    <li @click="store.aboutButton" class="home-icon about rounded-full overflow-hidden">
                                        <p class=" uppercase font-poppins text-base text-white font-medium ">about</p>
                                        <img class="p-2 about" src="../assets/person.svg">
                                    </li>
                                    <li @click="store.portfolioButton" class="home-icon  bg-amber rounded-full overflow-hidden">
                                        <p class=" uppercase font-poppins text-base text-white font-medium ">portfolio</p>
                                        <img class="p-2 about" src="../assets/beg.svg">
                                    </li>
                                    <li @click="store.contactButton" class="home-icon  bg-amber rounded-full overflow-hidden">
                                        <p class=" uppercase font-poppins text-base text-white font-medium ">contact</p>
                                        <img class="p-2 about" src="../assets/mail.svg">
                                    </li>
                                    <li @click="store.blogButton" class="home-icon  bg-amber rounded-full overflow-hidden">
                                        <p class=" uppercase font-poppins text-base text-white font-medium ">blog</p>
                                        <img class="p-2 about" src="../assets/sms.svg">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

  

</template>

<style scoped>
/* fixed color block */
    .color-block{
        background-color: rgb(216, 169, 27);
        position: fixed;
        height: 200%;
        width: 100%;
        transform: rotate(-18deg);
        left: -87%;
        top: -60%;
    }

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



 /* side bare icon design*/
 
.home-icon{
   display: flex;
   justify-content: end;
   width:160px;
   background: #111111;
   position: relative;
   cursor: pointer;
   
   
}

.home-icon p {
    width: 50%;
    font-size: 15px;
    font-family: sans-serif;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 100px;
    color: #111111;
    padding: 10px 5px 10px 10px;
    transition: 0.3s all;
    letter-spacing: 2px;
    z-index: -1;
  
}
.home-icon img{
    width: 40px;
    background-color: #ffb400;
    border-radius: 50px;
    transition: 0.5s all;
    
}
.home-icon .about{
    background-color: #2b2a2a !important;
}


.home-icon:hover{
    transition: 0.5s all;
     /* width: 240px;  */
}
.home-icon:hover p{
    width: 100%;
    padding: 8px 10px;
    border-radius: 50px 50px;
    background-color: #ffb400;
    color: white;
    transition: 0.5s all;
    top: 0;
    left: 0px;
    padding-right: 60px;
    z-index: 1;

}

.home-icon:hover img{
    z-index: 1;
}
.home-icon:hover .about{
    background-color: #ffb400 !important;
}


/* button style */

    .more-Button{
        background-color: transparent;   
        cursor: pointer;
        position: relative;
    }
  
    .more-Button::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #ffb400;
        border-radius: 50px;
        z-index: -1;
        transition: 0.5s;
        transform-origin: 88% 0;
    }
    .more-Button1::before{
        transform: scaleX(0);
    }
    .more-Button1:hover::before{
        transform: scaleX(1);
    }
</style>