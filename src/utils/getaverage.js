export function  getAvg(array){
    let sum = array.reduce(function (accumulator, current) {
        return accumulator + current;
    });
    return  (sum / array.length).toFixed(2);

}
