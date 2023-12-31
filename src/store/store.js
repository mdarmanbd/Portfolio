import{reactive} from 'vue'


const store = reactive({
    home: true,
    aboutPage: false,
    portfolioPage: false,
    contactPage: false,
    blogPage:false,
    homeButton(){
        this.home = true
        this.aboutPage = false
        this.portfolioPage = false
        this.contactPage = false
        this.blogPage = false
    },
    aboutButton(){
        this.aboutPage = true
        this.home = false
        this.portfolioPage= false
        this.contactPage = false
        this.blogPage = false
       
    },
    portfolioButton(){
        this.portfolioPage= true
        this.home = false
        this.aboutPage = false
        this.contactPage = false
        this.blogPage = false
        
    },
    contactButton(){
        this.contactPage = true
        this.home = false
        this.aboutPage = false
        this.portfolioPage = false
        this.blogPage = false
    },
    blogButton(){
        this.blogPage = true
        this.home = false
        this.aboutPage = false
        this.contactPage = false
        this.portfolioPage = false
    }

    
})

export{store}