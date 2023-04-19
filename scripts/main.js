//form script
const form = document.querySelector("form");

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const numberInput = document.querySelector("#number-input").value;
        localStorage.setItem("number", numberInput);
        alert(`Number ${numberInput} saved to localStorage!`);
      });

const myImage = document.querySelector("img");              //stored a reference to your <img> element in myImage

myImage.onclick = () => {                                   //made its onclick event handler property equal to a function with no name (an "anonymous" function)
  const mySrc = myImage.getAttribute("src");                //The code retrieves the value of the image's src attribute
  if (mySrc === "images/tax_logo.png") {                    //The code uses a conditional to check if the src value is equal to the path of the original image:
    myImage.setAttribute("src", "images/tax_logo_blur.png");//the code changes the src value to the path of the second image
  } else {
    myImage.setAttribute("src", "images/tax_logo.png");     //the code changes the src value to the path of the second image
  }
}; //makes image change upon clicking

/*
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
//(above)This takes references to the new button and the heading, storing each inside variables

function setUserName() {                                    //The setUserName() function contains a prompt() function, which displays a dialog box, similar to alert()
    const myName = prompt("Please enter your name.");       //This prompt() function does more than alert(), asking the user to enter data, and storing it in a variable after the user clicks OK.
    if (!myName) {
        setUserName();                                      //If myName has no value, run setUserName() again from the start. (pressing OK or Cancel doesn't do anything)
    } else {}
    localStorage.setItem("name", myName);                   //the code calls on an API localStorage, to store data in the browser and retrieve it later. We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name
    myHeading.textContent = `Welcome to Japan Tax App, ${myName}`;            //set the textContent of the heading to a string, plus the user's newly stored name.
  }

  if (!localStorage.getItem("name")) {                      //(logical NOT, represented by the !) to check whether the name data exists
    setUserName();                                          //the setUserName() function runs to create it
  } else {
    const storedName = localStorage.getItem("name");        //we retrieve the stored name using getItem() 
    myHeading.textContent = `${storedName} is stored in localStorage. Is this you?`;//and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName()
  }

  myButton.onclick = () => {                                //When clicked, setUserName() runs. This allows the user to enter a different name by pressing the button.
    setUserName();
  };
*/

/*
const myHeading = document.querySelector("h1"); 
myHeading.textContent = "Japan Tax Website 税金";
//using a function called querySelector() to grab
//a reference to your heading, and then store it
//in a variable called myHeading
//code set the value of the myHeading variable's textContent property
//this will only affect the first <h1> element.

//to change all <h1> elements, do this:
const headings = document.querySelectorAll("h1");
headings.forEach((heading) => {
  heading.textContent = "All the h1 elements have been changed to this text";
});

document.querySelector("html").addEventListener("click", function () {
    alert("You clicked the page somewhere");
  });
//make a pop-up if you click anywhere on the page (above)
*/