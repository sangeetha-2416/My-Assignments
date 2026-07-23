
//1. Learn to implement a JavaScript function to check whether a given no: is odd or even

var number = 3454
function isOddOrEven(){

    if(number%2!==0){
    console.log(number + " " + "is a odd number")
    }
    else{
        console.log(number  + " " + "is a even number")
    }

}

isOddOrEven()

//2. Learn to categorize a number as positive, negative, or zero using conditional statements in JavaScript.


var numbers

function isPositiveNegativeOrZero(numbers){

    if(numbers>0){

        console.log(numbers + ' '+ "is a positive number")
    }
    else if(numbers<0){

        console.log(numbers + ' '+"is a negative number")
    }

    else{
        console.log(numbers +' '+"is zero")
    }
}

isPositiveNegativeOrZero(2456)
isPositiveNegativeOrZero(-235)
isPositiveNegativeOrZero(0)

//function checkNumber(number) {
    if (number > 0) {
    console.log(number + " is a positive number")
    } else if (number < 0) {
        console.log(number + " is a negative number")
   } else {
        //console.log(number + " is zero")
   }
//}

//checkNumber(2456)
//checkNumber(-10)
//checkNumber(0)

//3. Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
//`runTests` with `switch` for test type messages.


var browser 

function launchBrowser(browser){

    if(browser==="chrome"){

        console.log("launching chrome browser")
    }
    else if(browser==="edge"){

        console.log("launch edge browser")
    }

    else{console.log("browser not supported")}
}

launchBrowser("firefox")

var testType

function runtest(testType){

    switch(testType){

        case "smoke":
            console.log("run smoke test")
            break

            case "sanity":
            console.log("run sanity test")
            break

            case "Regression":
                console.log("run regression test")
                break

                default :
                console.log("run smoke test")


    }

   
}
 
    runtest("smoke")

    //4.Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement 
//to assess score ranges

var studentscore

function grade(studentscore){

    switch(true){

        case (studentscore>=90 && studentscore<=100):
            console.log("Grade A")
            break

            case(studentscore>=80 && studentscore<90):
            console.log("Grade B")
            break

            case(studentscore>=70 && studentscore<80):
            console.log("Grade C")
            break

            case(studentscore>=60 && studentscore<70):
            console.log("Grade D")
            break

            default:
                console.log("Grade E")

    }

}

grade(96)
grade(82)
grade(44)
grade(65)
grade(40)
