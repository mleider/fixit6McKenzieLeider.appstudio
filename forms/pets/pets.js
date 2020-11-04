let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];
let withMarmaduke = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];
let pets = withMarmaduke.push('Marmaduke');

let action =  prompt("Please type a letter corresponding to the following action you want to perform:\n 1. remove Vinny \n 2. remove Marty \n 3. add Nancy to front \n 4. add your name to the end.\n 5. See where Riley is located in the array.\n 6. See where Cindy is located.\n 7. show the withMarmaduke array data.")
if (action === '1') {
  let removeVinny = petNames.splice(5, 1)
  console.log(`The action taken was: Remove Vinny.  The remaining array data are: ${petNames}`)
} else if (action === '2') {
  let removeMarty = petNames.splice(3, 1)
  console.log(`The action taken was: Remove Marty.  The remaining array data are: ${petNames}`)
} else if (action === '3') {
  let addNancy = petNames.unshift('Nancy')
  console.log(`The action taken was: Add Nancy to the front of the array.  The remaining array data are: ${petNames}`)
} else if (action === '4') {
  let Name = prompt("Please enter your name.")
  let addYourName = petNames.push(Name)
  console.log(`The action taken was: Add your name to the end of the array.  The remaining array data are: ${petNames}`)
} else if (action === '5') {
  let position = petNames.indexOf('Riley')
  console.log(`The action taken was: See where Riley is located in the array.  Riley is located at position ${position}. The remaining array data are: ${petNames}`)
} else if (action === '6') {
  let position1 = petNames.indexOf('Cindy')
  console.log(`The action taken was: See where Cindy is located in the array. Cindy is located at position ${position1}. The remaining array data are: ${petNames}`)
} else if (action === '7') {
  console.log(`The action taken was: Show the 'withMarmaduke' array data.  Here is the array: ${withMarmaduke}`) 
} else {
  alert("Please enter a valid letter corresponding to an action")
}
