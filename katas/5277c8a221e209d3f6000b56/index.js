function validBraces(braces) {
    const bracesMap = {
        "[": "]",
        "{": "}",
        "(": ")",
    }

    const arrayOfBraces = [...braces.split("")];

    let flag = false;
    
    arrayOfBraces.forEach((brace, braceIndex) => {
        const bracePair = bracesMap[brace];
        

        //Мы взяли закрывающую скобку
        if(!bracePair) { 
            return;
        }   
        
        if(!arrayOfBraces.includes(bracePair)) { 
            flag = true;
        }


        
    })


    flag ? false : true; 

}

console.log(validBraces("(}"))
// validBraces("[]");
// validBraces("{}");
// validBraces("(){}[]");