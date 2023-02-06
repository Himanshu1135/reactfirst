function add(a,b){
    let sum = a+b;
    return sum
};
function mul(a,b){
    let sum = a*b;
    return sum
};
function sub(a,b){
    let sum = a-b;
    return sum
};
function div(a,b){
    let sum = a/b;
    return sum.toFixed(2)
};


export default add; 
export {div,sub,mul};