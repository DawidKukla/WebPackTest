import * as _ from "underscore";
export module Test{
    export class C1{
        constructor(){}
        
        Log(){
            console.log("Test",_.range(0,10))
        };
    } 
}
import C1 = Test.C1;
var c=new C1();
c.Log();
