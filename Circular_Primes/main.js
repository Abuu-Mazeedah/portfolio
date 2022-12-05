const input = document.querySelector('#roman');
const answer = document.querySelector('.answer');
const btn = document.querySelector('.input');
const form = document.querySelector('#numConverter');
const regExp = /^([\w]+),([\s])([\w]+)$/;
const AnsField = document.createElement('h2');

const Output = element => {
    AnsField.innerHTML = "";
    AnsField.appendChild(document.createTextNode(`${element}`));
    answer.appendChild(AnsField);
    setTimeout(() => AnsField.remove (), 4000);
    input.value = '';
}

function myFunction(value){
    const newArray =[];

    for(let i = 0; i < value.length; i++){
        if(value[i] == 0 || value[i] == 1){
            newArray.splice(i, 0, value[i]);
        }
        if(value[i] > 1){
            newArray.push(value[i])
            let m = i;
            for(let j = value[i] - 1; j > 0; j--){
                m--
                let y = newArray[m] + j;
                newArray.splice(m, 1, y)
                
            }
        }
    }
    for(let y = 0; y < value.length; y++){
        if(value[y] > 1){
            let m = y;
            for(let j = value[y] - 1; j > 0; j--){
                m++;
                let z = newArray[m] + j;
                newArray.splice(m, 1, z)
            }
        }
    }
    Output(newArray);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputedValue = input.value;
    const inputed = inputedValue.replace(/[,]/g, '').split(" ");
    const array = inputed.map(element =>{
        element = parseInt(element);
        return element;
    })

    myFunction(array)
    
})





// for(let y = 0; y < value.length; y++){
//     if(value[y] !== 0 || value[y] !== 1){
//         if(value[y] == newArray[y]){
//             let m = y;
//             for(let j = value[y] - 1; j < 0; j--){
//                 m++
//                 let z = value[m] + j;
//                 newArray.splice(m, 1, z)
//             }
//         }
//     }
// }

//myFunction(array)