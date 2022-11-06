const input = document.querySelector('#roman');
const answer = document.querySelector('.answer');
const btn = document.querySelector('.input');
const form = document.querySelector('#numConverter');
const regExp = /^[0-9]+$/;
const AnsField = document.createElement('h2')
const msg = "Input your Number"
const msg1 = 'It is a Narcissistics Number'
const msg2 = 'It is nota Narcissistics Number'

const myFunction = element => {
    AnsField.innerHTML = "";
    AnsField.appendChild(document.createTextNode(`${element}`));
    answer.appendChild(AnsField);
    setTimeout(() => AnsField.remove (), 4000);
    input.value = '';
}


form.addEventListener('submit', e => {
    e.preventDefault();
    if(input.value === "")
        myFunction(msg);

    else{
        if(regExp.test(input.value)){
            const inputNum = input.value
            let splitedNum = '';
            let numToInteger = 0;
            let result = 0;
            for(let i = 0; i < inputNum.length; i++){
                splitedNum = (inputNum[i])
                numToInteger = parseInt(splitedNum);
                result += (numToInteger ** inputNum.length);
                // console.log(result);
            }
            if(result == inputNum)
                myFunction(msg1);
            else
                myFunction(msg2);
        }
        else
            myFunction(msg);
    }
});