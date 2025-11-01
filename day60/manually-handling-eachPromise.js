const safePromise = (promise) => {
    return promise.catch(error => ({ error }));
};

Promise.all([
    safePromise(Promise.resolve("Promise 1 Success")),
    safePromise(Promise.resolve("Promise 2 Success")),
    safePromise(Promise.resolve("Promise 3 Success")),

]).then(results => console.log("Results: ", results));