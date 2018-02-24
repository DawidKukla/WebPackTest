import "./index.less";
import "bootstrap";
import "jquery"

export module IndexModule{
    export class Index{
        constructor(){
           
        }
        Log(){
            $(".navbar").css({"background-color":"red"});
            console.log("Index")
        }
    }
}

import Index = IndexModule.Index;
var index=new Index();
index.Log();