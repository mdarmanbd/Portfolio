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
        // this.secondProject = true
        // this.opacityActive = true
        window.open('https://github.com/mdarmanbd/module_11_Assinment_1/','_blank')
    },

    projectThree(){
        // this.thirdProject = true
        // this.opacityActive = true
        window.open('https://github.com/mdarmanbd/module_1_google_weather_app','_blank')
    },
    projectFour(){
        // this.fourProject = true
        // this.opacityActive = true
        window.open('https://github.com/mdarmanbd/ninja-js','_blank')
    },

    projectFive(){
        // this.fiveProject = true
        // this.opacityActive = true
        window.open('https://cosmic-cactus-88c529.netlify.app/','_blank')
    },

    projectSix(){
        // this.sixProject = true
        // this.opacityActive = true
        window.open('https://github.com/mdarmanbd/rick-n-morty','_blank')
    },

    projectSeven(){
        // this.sevenProject = true
        // this.opacityActive = true
        window.open('https://mdarmanbd.github.io/e-commerce-shoes-/','_blank')
    },

    projectEight(){
        // this.eightProject = true
        // this.opacityActive = true
       
        window.open('https://mdarmanbd.github.io/e-commerce_furniture_projec/','_blank')
    },

    projectNine(){
        // this.nineProject = true
        // this.opacityActive = true
        
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