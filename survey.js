const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const questions = function (question){
    rl.question('what is your name ?',(q1)=>{
        console.log(`Thank you !!`);

        rl.question("whats your favourite sport?",(q2) => {
            console.log(`Thank you !!!`);

            rl.question("tell me something about yourself?",(q3) => {
                console.log(`Thank you !!!`);

                rl.question("What is your superpower? In a few words, tell us what you are amazing at!",(q4) => {
                    console.log(`hear is your profile Name: ${q1}, Favorite Sport: ${q2}, Some-facts: ${q3}, Your SuperPower: ${q4}  `);

                    rl.close();
                });
            });
        });
    });
};

questions();