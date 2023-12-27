<script setup>

</script>

<template>
    <div class="absolute top-40 left-[40%] !w-11/12 mx-auto ">
        <div class="w-full grid grid-cols-12 gap-10">
            <div class="col-span-7">
                <!--title section-->
                <div class="">
                    <h2 class="text-amber text-5xl font-poppins font-bold uppercase pb-2">i'm arman hossain.</h2>
                    <h2 class="text-white font-poppins font-bold text-5xl uppercase ">web designer</h2>
                </div>
                <!--details section-->
                <div class="py-5">
                    <p class="text-white font-poppins font-medium text-base leading-9">i'm Bangladeshi based web designer & front-end developer 
                        focused on crafting clean  & user-friendly experiences.
                        i am passionate about building excellent software that improves
                        the lives of those around me.  
                    </p>
                </div>
                <!--button section-->
                <div class="more-Button more-Button1 flex justify-between gap-3 w-64 border border-amber rounded-full">
                    <button class=" px-5 text-sm font-montserrat font-semibold text-white bg-transparent uppercase cursor-pointer">
                        more about me
                    </button>
                    <div class="">
                        <img class="w-12 p-1 bg-amber rounded-full " src="../assets/rightArrow.svg">
                    </div> 
                </div>
            </div>
            
            <div class="">
                <div class="flex justify-end ">
                    <ul class=" space-y-5">
                        <li class="side-Icon w-10 bg-amber rounded-full cursor-pointer">
                            <img class="p-2" src="../assets/home.svg">
                        </li>
                        <li class="w-10 bg-amber rounded-full">
                            <img class="p-2" src="../assets/home.svg">
                        </li>
                        <li class="w-10 bg-amber rounded-full">
                            <img class="p-2" src="../assets/home.svg">
                        </li>
                        <li class="w-10 bg-amber rounded-full">
                            <img class="p-2" src="../assets/home.svg">
                        </li>
                        <li class="w-10 bg-amber rounded-full">
                            <img class="p-2" src="../assets/home.svg">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       

       
       
    </div>

</template>

<style scoped>
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

    .side-Icon{
        width: 40px;
    }
    .side-Icon:hover{
        background-color: red;
       
    }

</style>
