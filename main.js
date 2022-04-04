//Declare of variables
let regBtn=document.getElementById("regBtn")
let userFirstName=document.getElementById("userFirstName")
let userFirstNameError=document.getElementById("userFirstNameError")
let userLastName=document.getElementById("userLastName")
let userLastNameError=document.getElementById("userLastNameError")
let userGender=document.getElementById("userGender")
let userGenderError=document.getElementById("userGenderError")
let userAge=document.getElementById("userAge")
let userAgeError=document.getElementById("userAgeError")

let userPhoneNumber=document.getElementById("userPhoneNumber")
let userPhoneNumberError=document.getElementById("userPhoneNumberError")
let userSchool=document.getElementById("userSchool")
let userSchoolError=document.getElementById("userSchoolError")

// let userContinent=document.getElementById("userContinent")
// let userContinentError=document.getElementById("userContinentError")
let userCountry=document.getElementById("userCountry")
let userCountryError=document.getElementById("userCountryError")

let Mathematics=document.getElementById("Mathematics")
let mathError=document.getElementById("mathError")
let mathScore=document.getElementById("mathScore")
let mathScoreError=document.getElementById("mathScoreError")

let English=document.getElementById("English")
let engError=document.getElementById("engError")
let engScore=document.getElementById("engScore")
let engScoreError=document.getElementById("engScoreError")

let subject3=document.getElementById("subject3")
let subject3Error=document.getElementById("subject3Error")
let subject3Score=document.getElementById("subject3Score")
let subject3ScoreError=document.getElementById("subject3ScoreError")

let subject4=document.getElementById("subject4")
let subject4Error=document.getElementById("subject4Error")
let subject4Score=document.getElementById("subject4Score")
let subject4ScoreError=document.getElementById("subject4ScoreError")

let subject5=document.getElementById("subject5")
let subject5Error=document.getElementById("subject5Error")
let subject5Score=document.getElementById("subject5Score")
let subject5ScoreError=document.getElementById("subject5ScoreError")

let subject6=document.getElementById("subject6")
let subject6Error=document.getElementById("subject6Error")
let subject6Score=document.getElementById("subject6Score")
let subject6ScoreError=document.getElementById("subject6ScoreError")

let subject7=document.getElementById("subject7")
let subject7Error=document.getElementById("subject7Error")
let subject7Score=document.getElementById("subject7Score")
let subject7ScoreError=document.getElementById("subject7ScoreError")

let subject8=document.getElementById("subject8")
let subject8Error=document.getElementById("subject8Error")
let subject8Score=document.getElementById("subject8Score")
let subject8ScoreError=document.getElementById("subject8ScoreError")

let summary=document.getElementById("summary")

let studentPoint
let averageTotal
let sumTotal
let countryScore
let ageScore
let sumTotalPoint


let subjects=["Biology", "Chemistry", "Physics", "Economics", "Goverment", "History"]

subject3.addEventListener("change", function () {
    let subjectIndex=subject3.value
    subjects.splice(subjectIndex, 1)
    loopSubjects1()
    loopSubjects2()
    loopSubjects3()
    loopSubjects4()
    loopSubjects5()
})

subject4.addEventListener("change", function(){
    let subjectIndex=subject4.value
    subjects.splice(subjectIndex, 1)
    loopSubjects2()
    loopSubjects3()
    loopSubjects4()
    loopSubjects5()
})

subject5.addEventListener("change", function(){
    let subjectIndex=subject5.value
    subjects.splice(subjectIndex, 1)
    loopSubjects3()
    loopSubjects4()
    loopSubjects5()
    
})

subject6.addEventListener("change", function(){
    let subjectIndex=subject6.value
    subjects.splice(subjectIndex, 1)
    loopSubjects4()
    loopSubjects5()
    
})

subject7.addEventListener("change", function(){
    let subjectIndex=subject7.value
    subjects.splice(subjectIndex, 1)
    loopSubjects5()
    
})

subject8.addEventListener("change", function(){
    let subjectIndex=subject8.value
    subjects.splice(subjectIndex, 1)    
})


loopSubjects()
loopSubjects1()
loopSubjects2()
loopSubjects3()
loopSubjects4()
loopSubjects5()

function loopSubjects(){
    let allOptions=""
    for(let a=0; a<subjects.length; a++){
        allOptions+= `<option value="${a}"> ${subjects[a]}</option>`
    }
    subject3.innerHTML=`<option value="">Select Subject</option> ${allOptions}`
}

function loopSubjects1(){
    let allOptions=""
    for(let a=0; a<subjects.length; a++){
        allOptions+= `<option value="${a}"> ${subjects[a]}</option>`
    }
   
    subject4.innerHTML=`<option value="">Select Subject</option> ${allOptions}`
}

function loopSubjects2(){
    let allOptions=""
    for(let a=0; a<subjects.length; a++){
        allOptions+= `<option value="${a}"> ${subjects[a]}</option>`
    }
   
    subject5.innerHTML=`<option value="">Select Subject</option> ${allOptions}`
}

function loopSubjects3(){
    let allOptions=""
    for(let a=0; a<subjects.length; a++){
        allOptions+= `<option value="${a}"> ${subjects[a]}</option>`
    }
   
    subject6.innerHTML=`<option value="">Select Subject</option> ${allOptions}`
}

function loopSubjects4(){
    let allOptions=""
    for(let a=0; a<subjects.length; a++){
        allOptions+= `<option value="${a}"> ${subjects[a]}</option>`
    }
   
    subject7.innerHTML=`<option value="">Select Subject</option> ${allOptions}`
}

function loopSubjects5(){
    let allOptions=""
    for(let a=0; a<subjects.length; a++){
        allOptions+= `<option value="${a}"> ${subjects[a]}</option>`
    }
   
    subject8.innerHTML=`<option value="">Select Subject</option> ${allOptions}`
}


//Adding Even Listener

regBtn.addEventListener('click', function(){
    validateDetails(); 
})


//Declare of functions and Validation

function validateDetails(){
    if(userFirstName.value==""){
        userFirstNameError.innerHTML="Your First Name is Required"
    }else if(userLastName.value==""){
        userLastNameError.innerHTML="Enter Your Last Name"
    }else if(userGender.value==""){
        userGenderError.innerHTML="Choose your Gender"
    }else if(userAge.value==""){
        userAgeError.innerHTML="Enter your Age"
    }else if(userPhoneNumber.value==""){
        userPhoneNumberError.innerHTML="Enter your Phone Number"
    }else if(userSchool.value==""){
        userSchoolError.innerHTML="Enter Your School Name"
    // }else if(userContinent.value==""){
    //     userContinentError="Select your Contient"
    }else if(userCountry.value==""){
        userCountryError.innerHTML="Select your Country"
    // }else if(Mathematics.value==""){
    //     mathError.innerHTML="Mathematics must be select"
    // }else if(English.value==""){
    //     engError.innerHTML="English must be select"
    }else if(mathScore.value==""){
        mathScoreError.innerHTML="Enter Your Score"
    }else if(engScore.value==""){
        engScoreError.innerHTML="Enter Your Score"
    }else if(subject3.value==""){
        subject3Error.innerHTML="A subject must be select"
    }else if(subject4.value==""){
        subject4Error.innerHTML="A subject must be select"
    }else if(subject5.value==""){
        subject5Error.innerHTML="A subject must be select"
    }else if(subject6.value==""){
        subject6Error.innerHTML="A subject must be select"
    }else if(subject7.value==""){
        subject7Error.innerHTML="A subject must be select"
    }else if(subject8.value==""){
        subject8Error.innerHTML="A subject must be select"
    }else if(subject3Score.value==""){
        subject3ScoreError.innerHTML="Enter Your Score"
    }else if(subject4Score.value==""){
        subject4ScoreError.innerHTML="Enter Your Score"
    }else if(subject5Score.value==""){
        subject5ScoreError.innerHTML="Enter Your Score"
    }else if(subject6Score.value==""){
        subject6ScoreError.innerHTML="Enter Your Score"
    }else if(subject7Score.value==""){
        subject7ScoreError.innerHTML="Enter Your Score"
    }else if(subject8Score.value==""){
        subject8ScoreError.innerHTML="Enter Your Score"
    }else{

        userAction()
        
    }
    
    clearError()
    
}


function clearError(){
     if(userFirstName.value!==""){
      userFirstNameError.innerHTML=""
    }
    if(userLastName.value!==""){
       userLastNameError.innerHTML=""

    }
    if(userGender.value!==""){
         userGenderError.innerHTML=""

    }
    if (userAge.value!==""){
         userAgeError.innerHTML=""

     }
     if(userPhoneNumber.value!==""){
         userPhoneNumberError.innerHTML=""

    }
    if(userSchool.value!==""){
         userSchoolError.innerHTML=""

    }
    if(userCountry.value!==""){
       userCountryError.innerHTML=""

    // // }if(userContinent.value!==""){
    // //     userContinentError.innerHTML=""

    // }if(Mathematics.value!==""){
    //     mathError.innerHTML=""

    // }if(English.value!==""){
    //     engError.innerHTML=""

    }
    if(mathScore.value!==""){
        mathScoreError.innerHTML=""
        
    }
    if(engScore.value!==""){
         engScoreError.innerHTML=""

    }
    if(subject3.value!==""){
         subject3Error.innerHTML=""

    }
    if(subject4.value!=""){
         subject4Error.innerHTML=""

    }
    if(subject5.value!==""){
        subject5Error.innerHTML=""

    }
    if(subject6.value!==""){
        subject6Error.innerHTML=""

     }if(subject7.value!==""){
        subject7Error.innerHTML=""
        
    }
    if(subject8.value!==""){
         subject8Error.innerHTML=""

     }
     
    if(subject3Score.value!==""){
        subject3ScoreError.innerHTML=""
    
    }
    if(subject4Score.value!==""){
         subject4ScoreError.innerHTML=""
    
    }
    if(subject5Score.value!==""){
        subject5ScoreError.innerHTML=""

    }
    if(subject6Score.value!==""){
         subject6ScoreError.innerHTML=""

    }
    if(subject7Score.value!==""){
         subject7ScoreError.innerHTML=""

    }
    if(subject8Score.value!==""){
        subject8ScoreError.innerHTML=""
    }
}


function userAction(){
    studentAgeScore()
}


function studentAgeScore(){
    ageScore=0
    if(userAge.value=="18-24"){
        ageScore=ageScore+100
        console.log(ageScore)
    }else if(userAge.value=="25-30"){
        ageScore=ageScore+80
        console.log(ageScore)

    }else if(userAge.value=="31-35"){
        ageScore=ageScore+50
        console.log(ageScore)

    }else if(userAge.value=="36-40"){
        ageScore=ageScore+30
        console.log(ageScore)

    }else if(userAge.value=="41"){
        ageScore=ageScore+10
        console.log(ageScore)
    }
    countryPoint()
}

function countryPoint(){
    countryScore=0
    if(userCountry.value=="africa"){
        countryScore=countryScore+50
        console.log(countryScore)

    }else if(userCountry.value=="asia"){
        countryScore=countryScore+40
        console.log(countryScore)

    }else if(userCountry.value=="southAmerica"){
        countryScore=countryScore+30
        console.log(countryScore)

    }else if(userCountry.value=="northAmerica"){
        countryScore=countryScore+20
        console.log(countryScore)
        
    }else if(userCountry.value=="others"){
        countryScore=countryScore+10
        console.log(countryScore)
    }
    studentScore()
}

function studentScore(){
    mathScore=parseInt(mathScore.value)
    engScore=parseInt(engScore.value)
    subject3Score=parseInt(subject3Score.value)
    subject4Score=parseInt(subject4Score.value)
    subject5Score=parseInt(subject5Score.value)
    subject6Score=parseInt(subject6Score.value)
    subject7Score=parseInt(subject7Score.value)
    subject8Score=parseInt(subject8Score.value)

    sumTotal=mathScore + engScore + subject3Score + subject4Score + subject5Score + subject6Score + subject7Score + subject8Score
    averageTotal=sumTotal/8
    console.log(averageTotal)
    averagePoint()
}

function averagePoint(){
    studentPoint=0
    if(averageTotal>=90 && averageTotal<=100){
        studentPoint=studentPoint+150
        console.log(studentPoint)
    }else if(averageTotal>=85 && averageTotal<=89){
        studentPoint=studentPoint+140
        console.log(studentPoint)
    }else if(averageTotal>=75 && averageTotal<=84){
        studentPoint=studentPoint+120
        console.log(studentPoint)
    }else if(averageTotal>=65 && averageTotal<=74){
        studentPoint=studentPoint+100
        console.log(studentPoint)
    }else if(averageTotal>=60 && averageTotal<=64){
        studentPoint=studentPoint+80
        console.log(studentPoint)
    }else if(averageTotal>=50 && averageTotal<=59){
        studentPoint=studentPoint+50
        console.log(studentPoint)
    }else if(averageTotal>=40 && averageTotal<=49){
        studentPoint=studentPoint+20
        console.log(studentPoint)
    }else if(averageTotal>=0 && averageTotal<39){
        studentPoint=studentPoint+0
        console.log(studentPoint)
    }
    sumScore()
}

function sumScore(){
    sumTotalPoint=0
    sumTotalPoint=ageScore+countryScore+studentPoint
    console.log(sumTotalPoint)
    studentTotalPoint()
}


function studentTotalPoint(){
    if(sumTotalPoint>=180){
        summary.innerHTML=(" The Breakdown of your scores as set below: <br> Age Point =" +ageScore+ " Point. <br> Country Point =" +countryScore+ " Point. <br> Student Point=" +studentPoint+ " Point. <br> Total Score = " +sumTotalPoint+ " Point")

    const labels = [

    'Age', 'Country','Student Point',  
  ];

  const data = {
    labels: labels,
    datasets: [{

      label: 'Student dataset',
      backgroundColor: ['rgb(255, 99, 132)','rgb(128, 255, 0)','rgb(0, 255, 255)',],
      borderColor: 'rgb(255, 99, 132)',
      data: [ageScore, countryScore, averageTotal],
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
       alert("Your Point is " +sumTotalPoint+ " Congratulation, Mr/Mrs. " +userFirstName.value+ " " +userLastName.value)

    }else{

const labels = [
    'Age',
    'Country',
    'Student Point',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: ['rgb(255, 99, 132)','rgb(128, 255, 0)','rgb(0, 255, 255)',],
      borderColor: 'rgb(255, 99, 132)',
      data: [ageScore, countryScore, averageTotal],
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

        alert("Your Point is " +sumTotalPoint+ " You are not Eligible")
    }
}
