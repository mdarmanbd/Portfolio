import{reactive} from 'vue'


const project = reactive({
    isActive : false,
   
    firstProject:false,
    projectOne(){
        this.isActive = true
        this.firstProject = true
       
    },
    closeProjectButton(){
       
        this.firstProject = false
        this.isActive = false
    }

    
})

export{project}