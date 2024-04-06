var output = document.getElementById("text-box");

    function display(num){
        output.value += num; 
    }
    function Clear()
    {
        document.getElementById("text-box").value="";
    }
    function calculate()
    {
        try{
            if(output.value === "")
            {
                output.value = "Syntax Error";
            }
            else{
            output.value = eval(output.value);
            }
        }
        catch(err){
            output.value="Invalid input";
        }
                     
    }
    function Delete()
    {
        output.value = output.value.slice(0,-1);
    }