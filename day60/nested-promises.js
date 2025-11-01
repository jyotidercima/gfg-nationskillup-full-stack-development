function fetch() {
    return new Promise((res, rej) => {
        setTimeout(() => { res("Data fetched"); },
            1000);
    });
}

function process(data) {
    return new Promise((res, rej) => {
        setTimeout(() => { res(`Processed: ${data}`); },
            1000);
    });
}

fetch()
    .then((data) => { return process(data); })
    .then(
        (processedData) => { console.log(processedData); })
    .catch((error) => { console.error(error); });