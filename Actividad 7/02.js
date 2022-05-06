var arr=[1,2,3,4,10,11]
var sum=0
const add=(arr)=>{
    for(let i=0; i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
add(arr)