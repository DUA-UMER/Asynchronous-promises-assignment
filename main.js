//Question # 01: Write a simple asynchronous typescript function fetchGreeting that returns a greeting
//message after a 2-second delay using setTimeout.
function fetchGreeting() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Hello World");
        }, 2000);
    });
}
fetchGreeting().then(function (greeting) {
    console.log(greeting);
});
//Question # 02:write a function simulateTask that simulates a task by logging"Task started",
//waits for 1 second, and than logs "Task completed". Use setTimeout for the delay.
function simulateTask() {
    return new Promise(function () {
        setTimeout(function () {
            console.log("Task started");
            setTimeout(function () {
                console.log("Task completed");
            }, 1000);
        }, 1000);
    });
}
simulateTask();
//Question # 03: write function fetchData that returns a promise which resolve with the 
//string "Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then(function (data) {
    console.log(data);
});
//Question # 04: write a function fetchwithError that returns a promise. It should randomly either
//resolve with "Data fetched successfully!"or reject with "Data failed!" after a delay of 1 second.
//Handle the rejection using .catch
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var randomNumber = Math.floor(Math.random() * 2);
            if (randomNumber === 0) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data failed!");
            }
        }, 1000);
    });
}
fetchWithError()
    .then(function (data) {
    console.log("Success:", data); // Output: "Success: Data fetched successfully!"
})
    .catch(function (error) {
    console.error("Error:", error); // Output: "Error: Data failed!"
});
//Question # 05: write a function executeSequentially that executes two functions 
//fetchData and processData sequentially using promises, and logs the result in the order
//they are called.
function fetchData1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
function processData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data processed successfully!");
        }, 1000);
    });
}
function executeSequentially() {
    fetchData1().then(function (data) {
        console.log(data);
        processData(data).then(function (data) {
            console.log(data);
        });
    });
}
executeSequentially();
