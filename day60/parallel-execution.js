const p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("One")
    }, 1000)
})
const p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Two")
    }, 500)
})
const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Error!"), 200));

Promise.all([p1, p2, p3])
    .then(result => {
        console.log("All promises resolved", result);
    })
    .catch(error => console.error("At least one promise rejected: ", error));


