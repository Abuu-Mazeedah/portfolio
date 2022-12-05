// const row0 = document.querySelectorAll('#col1')
// const row1 = document.querySelector('.row1')
// const row2 = document.querySelector('.row2')
// const row4 = document.querySelector('.row3')
// const row5 = document.querySelector('.row4')
// const row3 = document.querySelector('.row5')

// console.log(document.querySelectorAll('#row1'))
// function myFunction(element, array, row){
//     for(let i = 1; i < 7; i++){
//         if(document.getElementById(row) == '')
//             array.push(0);
//         else {
//             array.push
//         }
//     }
// }

// for(let i = 0; i < 6; i++){
//     row0.push(document.getElementById(i).value)
// }

// const row0Value = [];
// const row1Value = [];
// const row2Value = [];
// const row3Value = [];
// const row4Value = [];
// const row5Value = [];

// const getValue = (array, index) => {
//     for(let i = 0; i < index.length; i++){
//         if(row0[i].value == '')
//         row0[i].value = 0;
//     array.push(row0[i].value)
//     }
    
// }

// getValue(row0Value, row0);
// getValue(row1Value, row1);
// getValue(row2Value, row2);
// getValue(row3Value, row3);
// getValue(row4Value, row4);
// getValue(row5Value, row5);

// console.log(row0Value);


const inputArr = [];
const inputs =[];
const result = document.querySelector('.resultField');
const AnsField = document.createElement('h2');
const form = document.querySelector('#event');



form.addEventListener('submit', (e) => {

    for(let i = 0; i < 36; i++){
        inputs.push(parseInt(document.getElementById(i).value));
    }
    console.log(inputs)
    
    function myFunction(num){
        inputArr.push([inputs[num], inputs[num+1], inputs[num+2], inputs[num+3], inputs[num+4], inputs[num+5]])
    }
    myFunction(0);
    myFunction(6);
    myFunction(12);
    myFunction(18);
    myFunction(24);
    myFunction(30);
    
    console.log(inputArr);
    
    e.preventDefault(); 

    const seatArr = seat =>{
        let seatSpace = seat.filter(i => isNaN(i))
        if(seatSpace.length){
            AnsField.innerHTML ='';
            AnsField.appendChild(document.createTextNode(`All or some of the seat are Empty`));
            AnsField.className = 'field';
            result.appendChild(AnsField);
        }
        
        else{   
            let returnValue = "true";
            for(let i = 0; i < 6; i++){
                document.getElementById(i).style.backgroundColor = "green";
                const filterArr = [];
                filterArr.push(seat[i]);
                for (var y = i + 6; y < seat.length; y++) {
                    if (seat[y] > filterArr[filterArr.length - 1]) {
                      filterArr.push(seat[y]);
                      document.getElementById(y).style.backgroundColor = "green";
                    } else {
                      
                    //   document.getElementById(y).style.backgroundColor = "red";
                        document.getElementById(y).style.backgroundColor = "red";
                        returnValue = "false";
                    }
                    y += 5;
                  }
            }
            AnsField.innerHTML ='';
            for(let j = 0; j < 6; j++){
                let otherField = document.createElement('p')
                otherField.appendChild(document.createTextNode(`[${inputArr[j]}]` ));
                result.appendChild(otherField);
            }
            AnsField.appendChild(document.createTextNode(`${returnValue}`));
            result.appendChild(AnsField);

        }
        
    }

    seatArr(inputs);
})



