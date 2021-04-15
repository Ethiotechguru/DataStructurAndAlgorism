// function findPattern(longWord, shortWord){
//     let j = 0;
//     let count = 0;
//     for(let i = 0; i<longWord.length; i++){
//         if(longWord[i] == shortWord[j]){
//             if(longWord[i+1] == shortWord[j+1] && longWord[i+2] == shortWord[j+2]){
//                 count++;
//                 j= 0;
//                 i = i+3;
//             }
//             else{
//                 j=0;
//             }
//         }
//     }
//     if(count>0) return count;
//     return -1;
// }

function findPattern(longWord, shortWord){
    let j = 0;
    let count = 0;
    for(let i = 0; i<longWord.length; i++){
        if(longWord[i] == shortWord[j]){
            if(j==shortWord.length-1){
                count++;
                j=0;
            }else{
                j++;
            }
        }else{
            j=0;
        }
    }
    if(count>0) return count;
    return -1;
}

findPattern('lolilordlolamolo', 'lol');