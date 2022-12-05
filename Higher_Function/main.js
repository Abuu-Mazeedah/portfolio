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
/*const element =['boy', 'girl', 'baby'];

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
console.log("sort", Sort(names));*/










const names = ['David', 'Richard', 'Veronika'];

function addDonuts(index){
    index += "Food";
    return index;
}



Array.prototype.myMap = function (callBack){
    const result = [];
    for(let i =0; i < this.length; i++){
        result.push(callBack(this[i], i, this));
    }
    return result;
}




Array.prototype.myFilter = function(callBack){
    const result = [];

    for(let i = 0; i < this.length; i++){
        let filter = this[i]
        if(callBack(this[i], i, this))
        result.push(filter);
    }
    return result;
}





Array.prototype.myForEach = function(callBack){
    const result = [];

    for( let i = 0; i < this.length; i++){
        result.push(callBack(this[i], i, this))
    }
    console.log(result);
}




Array.prototype.myEvery = function(callBack){
    const result = []
    for(let i = 0; i < this.length; i++){
        if(!callBack)
        return false;
    }
    return true;
}



Array.prototype.myReduce = function(callBack, initialValue){
    if(!initialValue){
        if(typeof(this[0]) === "number")
        initialValue = 0;
        else if(typeof(this[0] === "sring"))
        initialValue = '';
    }

    for(let i = 0; i < this.length; i++){
        initialValue = callBack(initialValue, this[i])
    }
    return initialValue;
}



// Array.prototype.mySort = function(callBack){
//     if(typeof(this[0]) === 'string'){
//         const array = [];
//         for(let i = 0; i < this.length; i++){
//             array.push(this[i]);
//         }
//         for(let j = 0; j < array.length; j++){
//             for(let l =j+1; l < array.length; l++){
//                 if(array[j]>array[l]){
//                     let change = array[j];
//                     array[j] = array[l];
//                     array[l] = change;
//                 }
//             }
//         }
//         return(array);
//     }

//     if(typeof(this[0] === 'number')){
//         if(callBack)

//     }
// }






const index =[5, 6, 7,-10, -4, 6, 8, -6];

function positive(n){
    return n > 0
}
const filter = names.myMap(function addDonuts(index){
    index += " Food";
    return index;
})


const shortNames = names.myFilter(function add(name) {
  return name.length < 6;
});

const ages = [32, 33, 16, 40];

function checkAge(age) {
  return age > 15;
}

const Every = ages.myEvery(checkAge);

function getSum(total, num) {
    return total + num;
  }

const Reduce = names.myReduce(getSum)

console.log(shortNames);
console.log(filter);
console.log(Every);
console.log(Reduce);
names.myForEach(function addDonuts(index){
    index += " Food";
    return index;
})