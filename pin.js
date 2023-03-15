var getPin = () => {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        console.log('pin not 3 digit');
        return getPin();
    }
}

var generatePin = () => {
    return Math.round(Math.random() * 10000);
}

document.getElementById('generate-pin-btn').addEventListener('click', function () {
    const pin = getPin();
    const textField = document.getElementById('text-box');
    textField.value = pin;

})

document.getElementById('calculator').addEventListener('click', (event) => {
    console.log('click');
    const number = event.target.innerText;
    const inputField = document.getElementById('input-field');
    const typedNumber = inputField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            inputField.value = '';
        } else if (number === '<') {
            const eachDigit = typedNumber.split('');
            eachDigit.pop();
            const remainDigit = eachDigit.join('');
            inputField.value = remainDigit;



        }
    }
    else {
        const newNumber =   typedNumber + number;
        inputField.value= newNumber;
    }

});

document.getElementById('click-submit').addEventListener('click', ()=>{
   
    const generatedPin = document.getElementById('text-box');
    const currentPin = generatedPin.value;

    const typedPin = document.getElementById('input-field');
    const newPin = typedPin.value;
    
    
    const pinSuccess =document.getElementById('pin-success');
    const pinFail = document.getElementById('pin-fail');

    if(currentPin == newPin){
        
        pinSuccess.style.display = 'block';
        pinFail.style.display = 'none';
        

    }
    else{
        
        pinFail.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
    
})


