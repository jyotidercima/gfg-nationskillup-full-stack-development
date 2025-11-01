async function executePromises() {
    try {
        const result = await Promise.all([
            Promise.resolve("Promise 1"),
            Promise.reject("Promise 2 Error"),
            Promise.resolve("Promise 3"),
        ]);
        console.log("Result: ", result);
    } catch (error) {
        console.error("Caught Error:", error);
    }
}

executePromises();