import{reactive} from 'vue'


const store = reactive({
    home: true,
    aboutPage: false,
    aboutButton(){
        
        this.home = false
        this.aboutPage = true
       
    }
    
})

export{store}