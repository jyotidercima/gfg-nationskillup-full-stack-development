function first() {
    return new Promise(resolve => {
        resolve("First");
    })
}

function second(data) {
    return new Promise(resolve => resolve(data + "Second"));
}

function third(data) {
    return new Promise(resolve => resolve(data + "third"));
}

first()
    .then(second)
    .then(third)
    .then(res => console.log(res))
    .catch(err => console.log("Error: ", err));