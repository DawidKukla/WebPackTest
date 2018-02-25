import "./index.less";
import "bootstrap";
import "jquery"
import "bluebird";


export module IndexModule{
    export class Index{
        constructor(){
           
        }
        async Log(){
            $(".navbar").css({"background-color":"red"});
            console.log("Index")
            await this.Wait(5000);
            console.log("after waiting")
        }
        
        public async Wait(timeout:number){
            return new Promise((resolve)=>{
                window.setTimeout(()=>resolve(),timeout);
            });
        }
    }
}

import Index = IndexModule.Index;
var index=new Index();
index.Log();