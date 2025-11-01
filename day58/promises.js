function fetch() {
    //simulating an API request
    const user = { id: 1, name: "Jyoti Dercima" };
    //executor function (resolve, reject)  pending -- fullfilled for resolved -- 
    return new Promise((resolve, reject) => { //promise is an object that represent eventual completion or failure of an asyncronous operation.
        if (user) {
            resolve(user);
        }
        else {
            reject("Error fetching user data.");
        }
    });
}

fetch()
    .then((data) => {
        console.log("Processing user data: ", data);
        console.log("User data processed successfully using Promises.");
    })
    .catch((error) => {
        console.error("Error: ", error);
    })