let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Sadie", "Marge", "Sam"]
let withMarmaduke = petNames.unshift(["Marmaduke"])
alert(`There are ${petNames.length} pets since adding Marmaduke`)

let userChoice = prompt("Please choose what action you want to take:\n 1 Remove Vinny from the array \n 2 Remove Marty from the array \n 3 Add Nancy \n 4 Add your name to the end of the array \n 5 Find out where Riley is located \n 6 Find out where Cindy is located \n 7 Show the Marmaduke array")
switch (userChoice){
case (userChoice = "1"):
let removeVinny = petNames.splice([5])
alert(`The action taken was: Remove Vinny\n The remaining data are: ${petNames}`);
break;

case (userChoice = "2"):
  let removeMarty= petNames.splice([3])
alert(`The action taken was: Remove Marty\n The remaining data are: ${petNames}`);
break;

case (userChoice = "3"):
  let newNancy = petNames.unshift("Nancy")
alert(`The action taken was: Add Nacy\n The remaining data are: ${petNames}`);
break;

case (userChoice = "4"):
  let newName = prompt("Enter your name: ")
alert(`The action taken was: Add your name at index ${petNames.push((newName))}, the back of the array\n The remaining data are: ${petNames}`);
break;

case (userChoice = "5"):
  let pos = petNames.indexOf("Riley")
alert(`The action taken was: Riley is located at ${pos} in the array\n The remaining data are: ${petNames}`);
break;

case (userChoice = "6"):
  let pos2 = petNames.indexOf("Cindy")
alert(`The action taken was: Cindy is located at ${pos2} in the array\n The remaining data are: ${petNames}`);
break;

case (userChoice = "7"):
alert(`The action taken was: The array you chose is ${withMarmaduke} \nThe remaining data are: ${petNames}`);
break;

default:
  alert("Have a good day");
} 


/* Section AB part b */ let removeFront= petNames.shift()
alert(`The action taken was: Remove the front of the array\n The remaining data are: ${petNames}`);

/* Section AB part c*/   let newBarney= petNames.unshift("Barney")
alert(`The action taken was: Add Barney\n The remaining data are: ${petNames}`);

/* Section AB part d*/ let allPets = petNames.push(["Ted", "Fred", "Jed", "Ned", "Ed", "Zed"])
alert(`The action taken was: Add 6 more pets\n The remaining data are: ${petNames}`);

/* Section AB part e*/ let newPets = ["Bob, Sam, Andy"]
let stringPets = petNames.concat(newPets)
alert(`The action taken was: Add join 2 sections\n The remaining data are: ${stringPets}`);

/* Section AB part f*/ let newAgnes = petNames.unshift("Agnes")
alert(`The action taken was: Add Agnes\n The remaining data are: ${petNames}`);