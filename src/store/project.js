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
        this.opacityActive = true
        this.firstProject = true
       
    },
    projectTwo(){
        this.secondProject = true
        this.opacityActive = true
    },

    projectThree(){
        this.thirdProject = true
        this.opacityActive = true
    },
    projectFour(){
        this.fourProject = true
        this.opacityActive = true
    },

    projectFive(){
        this.fiveProject = true
        this.opacityActive = true
    },

    projectSix(){
        this.sixProject = true
        this.opacityActive = true
    },

    projectSeven(){
        this.sevenProject = true
        this.opacityActive = true
    },

    projectEight(){
        this.eightProject = true
        this.opacityActive = true
    },

    projectNine(){
        this.nineProject = true
        this.opacityActive = true
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