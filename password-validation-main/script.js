var is_visible = false;

function see()
{
    var input = document.getElementById("password");
    var see = document.getElementById("see");
    
    if(is_visible)
    {
        input.type = 'password';
        is_visible = false; 
        see.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true; 
        see.style.color='#162626';
    }
    
}

function check()
{
    var input = document.getElementById("password").value;
    
    input=input.trim();
    document.getElementById("password").value=input;
    document.getElementById("count").innerText="Length : " + input.length;
    if(input.length>=5)
    {
        document.getElementById("check0").style.color="#00ccff";
    }
    else
    {
       document.getElementById("check0").style.color="#c8d0e7"; 
    }
    if(input.match(/[0-9]/i))
    {
        document.getElementById("check1").style.color="#00ccff";
    }
    else
    {
       document.getElementById("check1").style.color="#c8d0e7"; 
    }
    
    if(input.match(/[^A-Za-z0-9-' ']/i))
    {
        document.getElementById("check2").style.color="#00ccff";
    }
    else
    {
       document.getElementById("check2").style.color="#c8d0e7"; 
    }
    
    if(input.match(' '))
    {
        document.getElementById("check3").style.color="#c8d0e7";
    }
    else
    {
       document.getElementById("check3").style.color="#00ccff"; 
    }
}

