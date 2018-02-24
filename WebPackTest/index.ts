export module Test{
    export class C1{
        constructor(){}
        
        Log(){
            console.log("Test")
        };
    } 
}
import C1 = Test.C1;
var c=new C1();
c.Log();
