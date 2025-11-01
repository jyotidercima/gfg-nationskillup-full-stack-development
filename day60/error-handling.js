const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            resolve(random);
        } else {
            reject("Number too low!");
        }
    }, 500);
});

myPromise
    .then(res => {
        console.log("Success", res);
        return res * 2;
    })
    .then(doubled => {
        console.log("Doubled: ", doubled);
        return doubled + 5;
    })
    .then(finalres => {
        console.log("Final: ", finalres);
    })
    .catch(err => {
        console.error("Error occured: ", err);
    });