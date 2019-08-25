// Write your cade below:
function caclRemaindar(dividend,divider) {
    result = division(dividend,divider);
    return result;
};
function division(dividend,divider){
    let result = dividend % divider;
    return result;
}
//console.log(caclRemaindar(9,4));

function caclSum(arr) {
    result = sumArr(arr);
    return result;
};

function sumArr(arr){
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
//console.log(caclSum([3, 6, 1, 8, 6, 4, 2]));

function caclSumInConditon(arr,num) {
    checkArr = checkNum(arr,num);
    result = sumArr(checkArr);
    return result;
};

function checkNum(arr,num){
    let checkArr = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] < num){
            checkArr.push(arr[i]);
        }
    }
    return checkArr;
}
//console.log(caclSumInConditon([3, 6, 1, 8, 6, 4, 2],5));

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}