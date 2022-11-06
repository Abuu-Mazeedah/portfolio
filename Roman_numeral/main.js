const input = document.querySelector('#roman');
const answer = document.querySelector('.answer');
const btn = document.querySelector('.input');
const form = document.querySelector('#numConverter');
const regExp = /^[0-9]+$/;
const regExp2 = /^[IVXLCDM]+$/;
const AnsField = document.createElement('h2')
const msg = "Input Valid Number"

const myFunction = element => {
    AnsField.innerHTML = "";
    AnsField.appendChild(document.createTextNode(`${element}`));
    answer.appendChild(AnsField);
    setTimeout(() => AnsField.remove (), 4000);
    input.value = '';
}

form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    // ////////////////////////////////check for input//////////////////////////////////
if(input.value === '')
    myFunction(msg)

/*=========================================================== input test =======================================================*/
else{
    if(regExp.test(input.value)){
        let filter = parseInt(input.value);
        
// ////////////////////////////////////////////////////check for valid number /////////////////////////////////////////////////////

        if(filter > 3999)
            myFunction(msg)

/*=================================================== If number is Valid =========================================================*/

        else{

            const romanNum =['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
            const integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
            let reply ="";
            let i = 0;

/*++++++++++++++++++++++++++++++++++++++++++++++++ Looping Through The Array ++++++++++++++++++++++++++++++++++++++++++++++++++++*/

           for(let i = 0; i< integer.length; i++){
                while(filter >= integer[i]){
                    reply += romanNum[i];
                   filter -= integer[i];
                }
            }
            myFunction(reply);
        }
    }

/* ======================================================= Roman conversion =========================================================*/     
    else if(regExp2.test(input.value)){
        const filter = input.value;

        function convertNum(test){
            if(test == 'M')
            return 1000;
            if(test == 'D')
            return 500;
            if(test == 'C')
            return 100;
            if(test == 'L')
            return 50;
            if(test == 'X')
            return 10;
            if(test == 'V')
            return 5;
            if(test == 'I')
            return 1;
            return-1;
        }
        let romIndex = 0;
        let romIndex2 = 0;
        let romAns = 0
        for(let i = 0; i < filter.length; i++){
            romIndex = convertNum(filter[i]);
            if(i + 1 < filter.length){
                romIndex2 = convertNum(filter[i+1]);
                if(romIndex >= romIndex2){
                    romAns += romIndex;
                }

                else {
                    romAns -= romIndex;
                }
            }
            else{
                romAns +=romIndex;
            }
        }
        myFunction(romAns);
    }
    else
        myFunction(msg);  
}    
});







/////////////////////////////////////////////////////////////FreeStyle///////////////////////////////////////////////////



/*********************************************************************************************************************************

let testNum = 2563;
let reply ="";

const romanNum =['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

for(let i = 0; i< integer.length; i++){
    while(testNum >= integer[i]){
        reply += romanNum[i];
       testNum -= integer[i];
    }
}
console.log(reply);



let testRom = 'MCMIX';



    function convertNum(test){
        if(test == 'M')
        return 1000;
        if(test == 'D')
        return 500;
        if(test == 'C')
        return 100;
        if(test == 'L')
        return 50;
        if(test == 'X')
        return 10;
        if(test == 'V')
        return 5;
        if(test == 'I')
        return 1;
        return-1;
    }

    let romIndex = 0;
    let romIndex2 = 0;
    let romAns = 0

    for(let i = 0; i < testRom.length; i++){
        romIndex = convertNum(testRom[i]);
        if(i + 1 < testRom.length){
            romIndex2 = convertNum(testRom[i+1]);
            if(romIndex >= romIndex2){
                romAns += romIndex;
            }
            else {
                romAns -= romIndex;
            }
        }
        else{
            romAns +=romIndex;
        }
    }
    console.log(romAns);
        
    
   
***********************************************************************************************************************/


    // function convertNumber(number){
    
    //     const roman = '';
    //     if(number > 0){
    //         if(number.lenth == 1){
    
    //         }
    //     }
    //     else
    //     alert("invalid input")
            
            
    //     }


 // if(i >= 1000){
    //     const x = i / 1000;
    //     const j = i % 1000
    //     var roman = "";
    //     if(x <= 3){
    //         for(i = 0; i < x; i++){
    //             roman += 'M';
    //         }
    //         if(j == 0);
    //             return roman;
    //         if(j >= 900){
    //             roman += "CM";
    //             j = j % 900;
                
    //         }
    //     }
        
    // }