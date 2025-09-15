function getNum(intchoice, num1, num2) {
    if (intchoice === 1) {
        return (num1 + num2)
    }
    else if (intchoice === 2) {
        return (num1 - num2)
    }
    else if (intchoice === 3) {
        return (num1 * num2)
    }
    else if (intchoice === 4) {
        if (num2 === 0) {
            return undefined
        }
        else{
            return (num1 / num2)
        }
    }
    else {
        return 0
    }
}

function getSign(intchoice) {
        if (intchoice === 1) {
        return "+"
    }
    else if (intchoice === 2) {
        return "-"
    }
    else if (intchoice === 3) {
        return "*"
    }
    else if (intchoice === 4) {
        return "/"
    }
    else {
        return 0
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function run() {
    console.log("0) Quit");
    console.log("1) Add");
    console.log("2) Subtract");
    console.log("3) Multiply");
    console.log("4) Divide");



    rl.question("Choose an option: ", (choice) => {
        const intchoice = parseInt(choice);
        if (intchoice === 0) {
            rl.close();
            return;
        }

        rl.question("Number 1: ", (str1) => {
            const num1 = parseInt(str1);

            rl.question("Number 2: ", (str2) => {
                const num2 = parseInt(str2);

                const num3 = getNum(intchoice, num1, num2);
                const sign = getSign(intchoice);
                console.log(`${num1} ${sign} ${num2} = ${num3}`);
                console.log("");
                run();
                });
            });
        });
}

run();