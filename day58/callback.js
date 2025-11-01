function process(data, callback) {
    console.log("Processing user data: ", data);
    callback();
}

function fetch(callback) {
    const user = { id: 1, name: "Jyoti Dercima" };
    callback(user);
}

fetch((data) => {
    process(data, () => {
        console.log("Use data processed successfully");
    });
});


