import{reactive} from 'vue'
import router from '../router/router'


const store = reactive({
    aboutMePage:false,
    opacityActiveHomePage:false,
    home: true,
    aboutPage: false,
    portfolioPage: false,
    contactPage: false,
    // downloadPage : true,


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
        
        
        window.open('https://drive.google.com/file/d/1tO-t-bmPBP2-yRI8KBVFWs4MzgQCJRPC/view' , '_blank')
       
        //     const link = document.createElement('a');
        //   link.href = 'https://drive.google.com/file/d/1tO-t-bmPBP2-yRI8KBVFWs4MzgQCJRPC/view';
        //   link.setAttribute('download', 'file.png'); //or any other extension
        //   document.body.appendChild(link);
        //   link.click();
        
        
    },
    

    
})

export{store}