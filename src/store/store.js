import{reactive} from 'vue'


const store = reactive({
    aboutMePage:false,
    opacityActiveHomePage:false,
    home: true,
    aboutPage: false,
    portfolioPage: false,
    contactPage: false,
    blogPage:false,

    aboutMeButton(){
        this.aboutMePage = true
        this.opacityActiveHomePage = true
    },

    aboutMeCloseButton(){
        this.aboutMePage = false
        this.opacityActiveHomePage = false
    },

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