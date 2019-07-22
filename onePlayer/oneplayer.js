var bool = true;
var activeplayer=1;
var listP1 = [];
var listP2 = [];
var listP3 = [1,2,3,4,5,6,7,8,9];
var allfield = [1,2,3,4,5,6,7,8,9];
var button = document.getElementById("buttonStart");
button.style.display="none";




function Butclick(num)
{
   if(listP1.toString().indexOf(num)==-1 && listP2.toString().indexOf(num)==-1&&bool)
    {
        if (activeplayer == 1)
        {
            setText(num,"X");
            activeplayer = 2;
            listP1.push(num);
            autoplay();        
        }
        checkwinAndLoss();
        if(activeplayer == 2)
        {
            setText(num,"O");
            activeplayer = 1;
            listP2.push(num);
        }
       document.getElementById("navMessage").innerHTML='';
       checkwinAndLoss();
    }
    else if(!bool)
    {
        //document.getElementById("navMessage").innerHTML=
        alert("Finish Game");
    }
}

function autoplay()
{
    var empytelist = [];
    var listAll = listP1.concat(listP2);
    for (var i=0 ; i<allfield.length;i++)
    {
       if(listAll.toString().indexOf(allfield[i])==-1)
       {
            empytelist.push(allfield[i]);
       }
    }
    var len=empytelist.length;
    var rubbish = Math.floor((Math.random()*len));
    var randValue = empytelist[rubbish];
    Butclick(randValue);
}


function setText(num,text)
{
    
    if(num==1)
    {
        if(document.getElementById("Rowone_1").style.outlineColor!="red")
        {
             document.getElementById("Rowone_1").innerHTML=text;
            document.getElementById("Rowone_1").style.outlineColor="red";  
        }
       
    }
    else if(num==2)
    {
         if(document.getElementById("Rowone_2").style.outlineColor!="red")
        {
             document.getElementById("Rowone_2").innerHTML=text;
            document.getElementById("Rowone_2").style.outlineColor="red";  
        }
    }
    else if(num==3)
    {
        if(document.getElementById("Rowone_3").style.outlineColor!="red")
        {
             document.getElementById("Rowone_3").innerHTML=text;
            document.getElementById("Rowone_3").style.outlineColor="red";  
        }
    }
    else if(num==4)
    {
        if(document.getElementById("Rowtwo_1").style.outlineColor!="red")
        {
             document.getElementById("Rowtwo_1").innerHTML=text;
            document.getElementById("Rowtwo_1").style.outlineColor="red";  
        }
        
    }
    else if(num==5)
    {
        if(document.getElementById("Rowtwo_2").style.outlineColor!="red")
        {
             document.getElementById("Rowtwo_2").innerHTML=text;
            document.getElementById("Rowtwo_2").style.outlineColor="red";  
        }
    }
    else if(num==6)
    {
       if(document.getElementById("Rowtwo_3").style.outlineColor!="red")
        {
            document.getElementById("Rowtwo_3").innerHTML=text;
            document.getElementById("Rowtwo_3").style.outlineColor="red";
            
        }
    }
    else if(num==7)
    {
        if(document.getElementById("Rowthree_1").style.outlineColor!="red")
        {
             document.getElementById("Rowthree_1").innerHTML=text;
            document.getElementById("Rowthree_1").style.outlineColor="red";  
        }
    }
    else if(num==8)
    {
        if(document.getElementById("Rowthree_2").style.outlineColor!="red")
        {
             document.getElementById("Rowthree_2").innerHTML=text;
            document.getElementById("Rowthree_2").style.outlineColor="red";  
        }
    }
    else if(num==9)
    {
        if(document.getElementById("Rowthree_3").style.outlineColor!="red")
        {
             document.getElementById("Rowthree_3").innerHTML=text;
            document.getElementById("Rowthree_3").style.outlineColor="red";  
        }
    }
}

function outline()
{
        document.getElementById("Rowone_1").style.outlineColor="red";  
        document.getElementById("Rowone_2").style.outlineColor="red";  
        document.getElementById("Rowone_3").style.outlineColor="red";  
 
        document.getElementById("Rowtwo_1").style.outlineColor="red";  
        document.getElementById("Rowtwo_2").style.outlineColor="red";  
        document.getElementById("Rowtwo_3").style.outlineColor="red";  
        
        document.getElementById("Rowthree_1").style.outlineColor="red";  
        document.getElementById("Rowthree_2").style.outlineColor="red";  
        document.getElementById("Rowthree_3").style.outlineColor="red";
}

function winner()
{
    
       if(listP1.toString().indexOf("1")!=-1 && listP1.toString().indexOf("2")!=-1 && listP1.toString().indexOf("3")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP1.toString().indexOf("4")!=-1 && listP1.toString().indexOf("5")!=-1 && listP1.toString().indexOf("6")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP1.toString().indexOf("7")!=-1 && listP1.toString().indexOf("8")!=-1 && listP1.toString().indexOf("9")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP1.toString().indexOf("1")!=-1 && listP1.toString().indexOf("4")!=-1 && listP1.toString().indexOf("7")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
    if(listP1.toString().indexOf("2")!=-1 && listP1.toString().indexOf("5")!=-1 && listP1.toString().indexOf("8")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
    if(listP1.toString().indexOf("3")!=-1 && listP1.toString().indexOf("6")!=-1 && listP1.toString().indexOf("9")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP1.toString().indexOf("1")!=-1 && listP1.toString().indexOf("2")!=-1 && listP1.toString().indexOf("3")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP1.toString().indexOf("4")!=-1 && listP1.toString().indexOf("5")!=-1 && listP1.toString().indexOf("6")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
    if(listP1.toString().indexOf("7")!=-1 && listP1.toString().indexOf("8")!=-1 && listP1.toString().indexOf("9")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
    if(listP1.toString().indexOf("1")!=-1 && listP1.toString().indexOf("5")!=-1 && listP1.toString().indexOf("9")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP1.toString().indexOf("3")!=-1 && listP1.toString().indexOf("5")!=-1 && listP1.toString().indexOf("7")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player one wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP2.toString().indexOf("1")!=-1 && listP2.toString().indexOf("2")!=-1 && listP2.toString().indexOf("3")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
    if(listP2.toString().indexOf("4")!=-1 && listP2.toString().indexOf("5")!=-1 && listP2.toString().indexOf("6")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP2.toString().indexOf("7")!=-1 && listP2.toString().indexOf("8")!=-1 && listP2.toString().indexOf("9")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
    if(listP2.toString().indexOf("1")!=-1 && listP2.toString().indexOf("4")!=-1 && listP2.toString().indexOf("7")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP2.toString().indexOf("2")!=-1 && listP2.toString().indexOf("5")!=-1 && listP2.toString().indexOf("8")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP2.toString().indexOf("3")!=-1 && listP2.toString().indexOf("6")!=-1 && listP2.toString().indexOf("9")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP2.toString().indexOf("1")!=-1 && listP2.toString().indexOf("2")!=-1 && listP2.toString().indexOf("3")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP2.toString().indexOf("4")!=-1 && listP2.toString().indexOf("5")!=-1 && listP2.toString().indexOf("6")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP2.toString().indexOf("7")!=-1 && listP2.toString().indexOf("8")!=-1 && listP2.toString().indexOf("9")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        outline();
        bool=false;
    }
     if(listP2.toString().indexOf("1")!=-1 && listP2.toString().indexOf("5")!=-1 && listP2.toString().indexOf("9")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        bool=false;
        outline();
    }
     if(listP2.toString().indexOf("3")!=-1 && listP2.toString().indexOf("5")!=-1 && listP2.toString().indexOf("7")!=-1)
    {
        document.getElementById("navMessage").innerHTML="player two wins";
        button.style.display="block";
        bool=false;
        outline();
    }
 
}

function checkwinAndLoss()
{
    var empytelist = [];
    var listAll = listP1.concat(listP2);
    for (var i=0 ; i<listP3.length;i++)
    {
       if(listAll.toString().indexOf(listP3[i])==-1)
       {
            empytelist.push(listP3[i]);
       }
    }
    var len=empytelist.length;
    if(len===0)
    {
           document.getElementById("navMessage").innerHTML="No Winner";
           button.style.display="block";
           bool=false;
    }
    winner();
    
}

function init()
{

        document.getElementById("Rowone_1").innerHTML='';
        document.getElementById("Rowone_2").innerHTML='';
        document.getElementById("Rowone_3").innerHTML='';
 
        document.getElementById("Rowtwo_1").innerHTML='';
        document.getElementById("Rowtwo_2").innerHTML='';
        document.getElementById("Rowtwo_3").innerHTML='';
        
        document.getElementById("Rowthree_1").innerHTML='';
        document.getElementById("Rowthree_2").innerHTML='';
        document.getElementById("Rowthree_3").innerHTML='';
        
        
        document.getElementById("Rowone_1").style.outlineColor="gray";  
        document.getElementById("Rowone_2").style.outlineColor="gray";  
        document.getElementById("Rowone_3").style.outlineColor="gray";  
 
        document.getElementById("Rowtwo_1").style.outlineColor="gray";  
        document.getElementById("Rowtwo_2").style.outlineColor="gray";  
        document.getElementById("Rowtwo_3").style.outlineColor="gray";  
        
        document.getElementById("Rowthree_1").style.outlineColor="gray";  
        document.getElementById("Rowthree_2").style.outlineColor="gray";  
        document.getElementById("Rowthree_3").style.outlineColor="gray";
        
        document.getElementById("navMessage").innerHTML='';
        button.style.display="none";
        listP1 = []; 
        listP2 = [];
        bool=true;
        activeplayer=1;
}
