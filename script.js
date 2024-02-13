//  var value1 = prompt("please enter value 1 :")
//  var value2 = prompt("please enter value 2 :")
//   //parseInt
//   if(isNaN(value1)){
//       alert("please enter valid number")
//   }else{
    
//   result = parseInt(value1) + parseInt(value2)
  

//   document.querySelector(".result").innerHTML = result;
//   console.log(result)
//   };

  //Question 2

  var btn = document.getElementById("togglebtn"); 

//   btn.addEventListener("click", function(){
//      var box = document.querySelector(".box");
//      box.classList.toggle("displayBox");
//   })

  // method 2
  function toggleBox() {
    var box = document.querySelector(".box");   
    box.classList.toggle("displayBox");
  }
  

  //Question 3

  var fruits = ["mango","apple","pear","ananas","orange"];
  console.log(`length :,fruits.length`);

  for(let index = 0; index < fruits.length; index++) {
    var element = fruits[index];
    console.log(element);
    // document.write(`<h1>${element}</h1>`)
    document.write("<h1>"+ index + "::" + element + "</h1>")
  }
 

  // addition


  var year = 2018; // declaration of variable

  if (year % 400 == 0 || year % 100 != 0 && year % 4 ==0) {
    alert(year + "is a leap year ");
  }else{
    alert(year + "is not a leap year");
  }
