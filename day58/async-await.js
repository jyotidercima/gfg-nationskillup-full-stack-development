async function fetch() {
    const user = { id: 1, name: "Jyoti Dercima" };
    return new Promise((resolve) => {
        resolve(user);
    });
}

async function process() {
    try {
        const data = await fetch();
        console.log("{Processing user data: ", data);
        console.log("User data processed successfully.");
    } catch (error) {
        console.error("Error: ", error);
    }
}

process();