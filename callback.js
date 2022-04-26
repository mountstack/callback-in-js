
var arr = ['Mount Stack', 'Rijwan Hossain']


function addNewNames(name, cb) { 
    setTimeout(function() { 
        arr.push(name) 
        cb(); 
    }) 
} 

function printNames() { 
    setTimeout(function() { 
        console.log(arr);
    })
}

addNewNames('Asief Mahir', printNames)



