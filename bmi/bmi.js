const calculateBMI=()=>{
    const massInput=document.getElementById("mass").value;
    const heightInput=document.getElementById("height").value;
    const unit=document.getElementById("unit").value;
    const result=document.getElementById("result");

    let mass;
    let height;
    let bmi;

    //check unit
    //kg and cm
    if(unit==="metric"){
        mass=parseFloat(massInput);
        height=parseFloat(heightInput);
        bmi=mass / ((height / 100) ** 2);
    }
    //kg and ft-inches
    else if(unit==="imperial"){
        mass=parseFloat(massInput);
        const [feet, inches] = heightInput.split('.').map(parseFloat);
        height = (feet * 0.3048) + (inches * 0.0254);
        bmi = mass / (height ** 2);
    }
    else{
        result.innerHTML="Invalid input"
    }

    let message;
    if (bmi < 18.5) {
        message = "You are underweight.";
    } else if (bmi < 25) {
        message = "You have a normal BMI.";
    } else if (bmi < 30) {
        message = "You are overweight.";
    } else {
        message = "You are obese.";
    }
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. ${message}`;
}