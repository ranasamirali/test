


function Quotes(){
     var username= ["“Be yourself; everyone else is already taken.”" , "“A room without books is like a body without a soul.”" , "“So many books, so little time.”"]
      var text = ["  --Oscar Wilde", "--Marcus Tullius Cicero"," --Frank Zappa"]

    var number= Math.floor(Math.random()* username.length) 
   

    
  document.getElementById("outbut").innerHTML=(username[number])
  document.getElementById("inbut").innerHTML=(text[number])
 

}


