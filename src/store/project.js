import{reactive} from 'vue'


const project = reactive({
    opacityActive : false,
    firstProject:false,
    secondProject:false,
    thirdProject:false,
    fourProject:false,
    fiveProject:false,
    sixProject:false,
    sevenProject:false,
    eightProject:false,
    nineProject:false,

    projectOne(){
        // this.opacityActive = true
        // this.firstProject = true
        window.open('https://github.com/mdarmanbd/startech_project','_blank')
       
    },
    projectTwo(){
        
        window.open('https://github.com/mdarmanbd/module_11_Assinment_1/','_blank')
    },

    projectThree(){
        
        window.open('https://github.com/mdarmanbd/module_1_google_weather_app','_blank')
    },
    projectFour(){
        
        window.open('https://github.com/mdarmanbd/ninja-js','_blank')
    },

    projectFive(){
        
        window.open('https://cosmic-cactus-88c529.netlify.app/','_blank')
    },

    projectSix(){
        
        window.open('https://github.com/mdarmanbd/rick-n-morty','_blank')
    },

    projectSeven(){
        
        window.open('https://mdarmanbd.github.io/e-commerce-shoes-/','_blank')
    },

    projectEight(){
        
       
        window.open('https://mdarmanbd.github.io/e-commerce_furniture_projec/','_blank')
    },

    projectNine(){
        
        
        window.open('https://mdarmanbd.github.io/e-commerce_fashion_project/#','_blank')
    },

    closeProjectButton(){
        this.opacityActive = false
        this.firstProject = false
        this.secondProject = false
        this.thirdProject = false
        this.fourProject = false
        this.fiveProject = false
        this.sixProject = false
        this.sevenProject = false
        this.eightProject = false
        this.nineProject = false

       
    }

    
})

export{project}