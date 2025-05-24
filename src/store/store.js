import{reactive} from 'vue'
import router from '../router/router'


const store = reactive({
    aboutMePage:false,
    opacityActiveHomePage:false,
    home: true,
    aboutPage: false,
    portfolioPage: false,
    contactPage: false,
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
       window.open("https://www.google.com/" , "_blank")   
    },
    clickedDownload(){
        // window.open('https://drive.google.com/file/d/1WNaAMiA7c8r3EwdiBWJKfkkh7Way5t2R/view?usp=sharing','_blank')
        // https://drive.google.com/file/d/1XgvfX4vifQTLdzF5XUfLa6cDAnaBiKWt/view?usp=sharing
       window.open('https://drive.google.com/file/d/1XgvfX4vifQTLdzF5XUfLa6cDAnaBiKWt/view?usp=sharing','_blank')
    },
    

    
})

export{store}