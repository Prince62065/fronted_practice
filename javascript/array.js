let arr=[41,25,3,48];
for (const element of arr) {
    console.log(element);
}

// to stringify array
console.log(arr.toString());
console.log(arr.join("and"));
console.log(arr.pop());
console.log(arr.push(10));
console.log(arr[3]);
// to remove first element and return delete element  
console.log(arr.shift());
// return length of array
console.log(arr.unshift(58));
// it will remove the element from array but hold the memory and return undefined value;
delete arr[0];
console.log(arr[0]);
a1=[10,9,3,8,3,78,7,3,4,3,1];
a2=[7,6,3];
a3=[8,5,5,70];
// concat() will only used to concatenating the array but it doesnot change the original value of array;
for (const element of a1.concat(a2,a3)) {
    console.log(element);
}

console.log(a1.concat(a2,a3));
console.log(a1);
// splice() is used to remove element for a range .
console.log(a1.splice(1,2));
console.log(a1);
// splice() is also used to add element at deleting place
console.log(a1.splice(1,2,84,554));
console.log(a1);
console.log(a1.reverse());

// it will create new array by performing some operation on each array element
// let newarray=a1.map((e)=>{
//     return e**2;
// })
let newarray=a1.map((e,index,array)=>{
    return e**2;
})
console.log(newarray);

// filter() is used to create new array by filtering the array .We will pass function to filter to apply condition for filter.
let greaterthanSeven=(e)=>{
    if(e>7){
        return true;
    }
    else{
        return false;
    }
}

let newarr=a1.filter(greaterthanSeven);
console.log(newarr);

// reduce an array to a single value;
let sum=newarr.reduce((a,b)=>{
    return a+b;
})
console.log(sum);