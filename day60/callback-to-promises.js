// function async1(callback) {
//     setTimeout(() => {
//         callback(null, "Result from 1");
//     }, 500);
// }
// function async2(data1, callback) {
//     setTimeout(() => {
//         callback(null, data1 + " and Result from 2");
//     }, 500)
// }

// function async3(data2, callback) {
//     setTimeout(() => {
//         callback(null, data2 + " and Result form 3");
//     }, 500);
// }

// async1((err, res1) => {
//     if (err) {
//         console.error("Error in operation 1: ", err);
//     } else {
//         async2(res1, (err, res2) => {
//             if (err) {
//                 console.error("Error in operation 2: ", err);
//             } else {
//                 async3(res2, (err, res3) => {
//                     if (err) {
//                         console.error("Error in operation 3:", err);
//                     } else {
//                         console.log("Final result: ", res3);
//                     }
//                 });
//             }
//         });
//     }
// });


//Promises


function async1() {
    return new Promise(resolve => setTimeout(() => resolve("Result 1"), 500));
}
function async2() {
    return new Promise(resolve => setTimeout(() => resolve("Result 2"), 500));
}
function async3() {
    return new Promise(resolve => setTimeout(() => resolve("Result 3"), 500));
}

async1()
    .then(res1 => async2(res1))
    .then(res2 => async3(res2))
    .then(res3 => console.log("Final: ", res3))
    .catch(err => console.error("Error: ", err));





















