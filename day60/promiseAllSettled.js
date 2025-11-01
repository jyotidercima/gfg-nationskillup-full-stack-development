const promises = [
    Promise.resolve("Promise 1 Succes"),
    Promise.reject("Promise 2 Failed"),
    Promise.resolve("Promise 3 Succes"),
];

Promise.allSettled(promises)
    .then(results => console.log("All Settled Result: ", results));