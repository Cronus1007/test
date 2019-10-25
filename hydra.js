function fn1()
{
    var firstString=document.getElementById("ip1").value;
    var secondString=document.getElementById("ip2").value;
    if (firstString==secondString){
        var bool = true;
        fun2(bool);
    }
    else{
        bool=false;
        fun2(bool);
    }
    function fun2(x){
        if(x){
            alert("The value of username and password is same");
        }
        else if (!x){
            alert("Ritish tatti hai");
        }
        else{
            alert ("The value of username and passwodr is different");
        }
    } 
}