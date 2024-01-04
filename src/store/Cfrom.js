import{reactive} from 'vue'


const fromValidation = reactive({
    emailRequerd : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    firstName:'',
    email:'',
    subject:'',
    textArea:'',
    nameError: false,
    subjectError: false,
    emailError: false,
    textError: false,

    // fromCheck(){
    //     if(this.firstName.length<4){
    //         this.nameError = true
    //     }
    //     else if(!this.emailRequerd.test(this.email)){
    //         this.emailError = true
    //     }
    //     else if(this.subject.length < 4){
    //         this.subjectError = true
    //     }
    //     else if(this.textArea.length < 10){
    //         this.textError = true
    //     }
        
    //     else{
    //         this.nameError = false
    //         this.emailError = false
    //         this.subjectError = false
    //         this.textError = false
    //     }
    // },

    sendMessageButton(){
       if(this.firstName.length<4){
            this.nameError = true
       }
       else if(this.subject.length<4){
            this.subjectError = true
       }
       else if(!this.emailRequerd.test(this.email)){
            this.emailError = true
       }
       else if(this.textArea.length<10){
            this.textError = true
       } else{
            this.nameError = false
            this.subjectError = false
            this.textError = false
            this.emailError = false

            this.firstName = ''
            this.email = ''
            this.subject = ''
            this.textArea = ''

            alert('Message sent!')

       }
    }

    
})

export{fromValidation}