const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
"^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOne = document.getElementById("pass1-el")
let passTwo = document.getElementById("pass2-el")
let five = false
let ten = false
let fifteen = false

function fiveGen(){
  return five = true, ten = false, fifteen = false
}

function tenGen(){
    return ten = true, five = false, fifteen = false
}

function fifteenGen(){
   return fifteen = true, five = false, ten = false
}




function generate(){
    
    passOne.textContent = ""
    passTwo.textContent = ""
    if (five === true){
      for (let i = 0; i<5; i++){
         let mathOne =  Math.floor(Math.random()*characters.length)
      passOne.textContent += characters[mathOne] 
      }
  
      for (let i = 0; i<5; i++){
          let mathTwo =  Math.floor(Math.random()*characters.length)
       passTwo.textContent += characters[mathTwo] 
       //return five = false
       }
    }else if (ten === true){
      for (let i = 0; i<10; i++){
         let mathOne =  Math.floor(Math.random()*characters.length)
      passOne.textContent += characters[mathOne] 
      }
  
      for (let i = 0; i<10; i++){
          let mathTwo =  Math.floor(Math.random()*characters.length)
       passTwo.textContent += characters[mathTwo] 
       //return ten = false
       }
    }else if(fifteen === true){
      for (let i = 0; i<15; i++){
       let mathOne =  Math.floor(Math.random()*characters.length)
    passOne.textContent += characters[mathOne] 
    }

    for (let i = 0; i<15; i++){
        let mathTwo =  Math.floor(Math.random()*characters.length)
     passTwo.textContent += characters[mathTwo] 
     //return fifteen = false
     }
    }
    
    
    
    
}



