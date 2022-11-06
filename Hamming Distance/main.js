const input = document.querySelector('#roman');
const answer = document.querySelector('.answer');
const btn = document.querySelector('.input');
const form = document.querySelector('#numConverter');
const regExp = /^["]([\w]+),([\s])([\w]+)["]$/;
const AnsField = document.createElement('h2');
const msg = "Input a valid string";

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
        const inputedValue = input.value
        if(regExp.test(input.value)){
            let formatted = inputedValue.replace(/[,"]/g, '');
            // formartted = formartted.replace(/,/g, '');
            formatted =formatted.split(" ");
            console.log(formatted);
            const input1 = formatted[0];
            // console.log(input1);
            const input2 = formatted[1];
            // console.log(input2);

            if(input1.length === input2.length){
                let total = 0;
                for(let i = 0; i < input1.length; i++){
                    if(input1[i] !== input2[i])
                    total++;
                }
                myFunction(total);
            }
            else
            myFunction(msg);
            
        }
        else
        myFunction(msg);
    }

});



// map takes an array and function as argumentfunction
//  function map(arr, mapFunc){
//     const mapArr = []; // empty array        
    // loop though array    
//     for(let i=0;i<arr.length;i++) 
//     {        
//         const result = mapFunc(arr[i], i, arr);
//         mapArr.push(result);    
//     }    
//     return mapArr;
// }


function myMap(element, index, array){

}

function Map(array, myFunctions){
    const myArray = [];
    for(let i = 0; i < array.length; i++){

        const result = myFunctions(array[i], i, array);
        myArray.push(result);
        }
        return myArray;
    }
    


