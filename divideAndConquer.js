let users = {a:[], b:[], c:[], d:[],e:[]};

function checkIfUserExist(arr, name){
    if(typeof name == 'string'){
        name = name.trim().toLowerCase();
    }else{
        return `${name} is not a valid Name`;
    }
    
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start +end)/2);
    while(name!==arr[mid] && start<=end){
        if(name<arr[mid]){
            end = mid-1;
        }else{
            start = mid+1;
        }
        mid = Math.floor((start +end)/2);
    }
    if(name === arr[mid]) return arr[mid];
    return null;
}
function addUsers(name){
    if(typeof name == 'string'){
        name = name.trim().toLowerCase();
    }else{
        throw new Error(`not a valid name`);
    }
    let firstLater = name[0].toLowerCase();
    if(!users[firstLater]){
        users[firstLater] = [name];
        return 'Thank Your for Signing up!';
    }
    if(checkIfUserExist(users[firstLater], name)) return `${name} is already exist`;
    for(let key in users){
        switch(key){
            case firstLater:
                users[firstLater].push(name);
                break;
            default:
                // console.log('improper input');
        }
    }
    if(users[firstLater].length>1){
        users[firstLater]=sortIt(users[firstLater]);
        // console.log(users);
        return users[firstLater];
    }
    return users[firstLater];
}

function sortIt(arr){
    let mid = Math.floor(arr.length/2);
    if(arr.length<=1)return arr;
    let left = arr.splice(0, mid);
    let right = arr;
    return merge(sortIt(left), sortIt(right));
}

function merge(left, right){
    let result = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}
addUsers('cebrina');
addUsers('chaltu');
addUsers('chala');
addUsers('caleb');
addUsers('conner');
addUsers('cicily');
