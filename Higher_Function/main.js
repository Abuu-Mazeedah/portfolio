//////////////////////////////////for each///////////////////////////////
/*function foreach(element, callBack){
    for(let i = 0; i < element.length; i++){
        console.log(element(i));
    }
}*/


///////////////////////////////////filter function//////////////////////////////
/*function Filter(element){
    const array =[];
    for(let i = 0; i < element.length; i++){
        if(condition === true)
        array.push(element[i]);
    }
    return (array);
}*/

////////////////////////////////////every Function////////////////////////////////
/*function Every(element){
    const array = [];
    for(let i = 0; i < element.length; i++){

        if(condition){
            const result = true;
        }
        else{
            return false;
        }
        
    }
    return (true);
}*/

/////////////////////////////////////Sort Function////////////////////////////////
// const element =['boy', 'girl', 'baby'];

// function Sort(element){
//     const array = [];

//     for(let i = 0; i < element.length; i++){
//         // let upper = element[i].toUpperCase();
//         array.push(element[i]);
//     }

//     for(let j = 0; j < array.length; j++){
//         for(let l =j+1; l < array.length; l++){
//             if(array[j].localeCompare(array[l]) == 1){
//                 let change = array[j];
//                 array[j] = array[l];
//                 array[l] = change;
//             }
//         }
//     }
//     return(array);
// }
// console.log(Sort(element));

/////////////////////////////////////Reduce Function////////////////////////////////

/*function map(element){
    let sum = 0;
    for(let i = 0; i < element.length; i++){
        sum += element[i];
    }
    return (sum);
}*/



/////////////////////////////////////////////map Function////////////////////////////////
const element =['boy', 'girl', 'baby'];

function myMap(element, callBack){
    const array = [];
    for(let i = 0; i < element.length; i++){
        let result = callBack(element[i]);
        array.push(result);
    }
    return(array);
}
function addDonuts(index){
    index += "Food";
    return index;
}
const add = myMap(element, addDonuts);
console.log(add); 




///////////////////////////////////filter function//////////////////////////////
const index =[5, 6, 7,-10, -4, 6, 8, -6];

function myFilter(element, callBack){
    const array =[];
    for(let i = 0; i < element.length; i++){
        let result = callBack(element[i]);
        if(result)
        array.push(element[i]);
    }
    return array;
}
function positive(n){
    return n > 0
}

const answer = myFilter(index, positive);
console.log(answer)


//////////////////////////////////for each///////////////////////////////
function foreach(element, callBack){
    const array = [];
    for(let i = 0; i < element.length; i++){
        let result = callBack(element[i]);
        array.push(result);
    }
    console.log(array);
}

foreach(element, addDonuts);


const value = [32, 33, 16, 40];



////////////////////////////////////every Function////////////////////////////////
function Every(element, callBack){
    for(let i = 0; i < element.length; i++){
        let result = callBack(element[i]);
        if(result)
        result = true
        else
        return false
    }
    return true;
}

const output = Every(value, n => n > 18);
console.log(output);





/////////////////////////////////////Reduce Function////////////////////////////////
function myFunction(result, value){
    return result + value;
}

function Reduce(element, callBack){
    let sum = 0;
    for(let i = 0; i < element.length; i++){    
        sum = callBack(sum, element[i]);
        
    }
    return (sum);
}

const Sum = Reduce(index, myFunction)
console.log(Sum);






function Sort(element, callBack){
    const array = [];

    for(let i = 0; i < element.length; i++){
        // let upper = element[i].toUpperCase();
        array.push(element[i]);
    }

    for(let j = 0; j < array.length; j++){
        for(let l =j+1; l < array.length; l++){
            if(array[j]>array[l]){
                let change = array[j];
                array[j] = array[l];
                array[l] = change;
            }
        }
    }
    return(array);
}
console.log("sort", Sort(index));    


