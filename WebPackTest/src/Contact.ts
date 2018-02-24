import "./index.less";
import "bootstrap";
import "jquery"

export module ContctModule{
    export class Contact{
        constructor(){
           
        }
        Log(){
            $(".navbar").css({"background-color":"red"});
            console.log("Contact")
        }
    }
}

import Index = ContctModule.Contact;
var contact=new Index();
contact.Log();