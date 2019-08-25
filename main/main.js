// Write your cade below:
function caclRemaindar(dividend,divider) {
    return dividend % divider
};
//console.log(caclRemaindar(9,4));

function caclSum(arr) {
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
};
//console.log(caclSum([3, 6, 1, 8, 6, 4, 2]));

function caclSumInConditon(arr,num) {
    let total = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] < num){
            total += arr[i];
        }
    }
    return total;
};
//console.log(caclSumInConditon([3, 6, 1, 8, 6, 4, 2],5));

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}