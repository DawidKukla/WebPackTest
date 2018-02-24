import "./index.less";
import "bootstrap";
import "jquery"

export module ContctModule{
    export class Contct{
        constructor(){
           
        }
        Log(){
            $(".navbar").css({"background-color":"red"});
            console.log("XXXXXXXX")
        }
    }
}

import Index = ContctModule.Contct;
var contact=new Index();
contact.Log();