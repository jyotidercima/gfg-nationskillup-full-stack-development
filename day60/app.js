let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Task Complete Successfully!");
        } else {
            reject("Task incomplete :/ ")
        }
    }, 2000);
});

promise
    .then(function (res) { console.log(res) })
    .catch(function (err) { console.log(err) });
