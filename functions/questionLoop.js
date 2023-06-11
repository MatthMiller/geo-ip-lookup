import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionLoop = async (type) => {
  if (type === 'IP') {
    return new Promise((resolve) => {
      const recursiveQuestion = () => {
        rl.question('Enter the IP you want to lookup: \n> ', (answer) => {
          if (answer.match(/^\d+(\.\d+)*$/g)) {
            resolve(answer);
          } else {
            console.log(
              '\n\x1b[91mBad IP format. The correct format is: 0.0.0.0\x1b[97m\n'
            );
            recursiveQuestion();
          }
        });
      };
      recursiveQuestion();
    });
  }

  if (type === 'reset') {
    return new Promise((resolve) => {
      console.log(
        '\x1b[94mPress any key to restart the application...\x1b[97m'
      );
      process.stdin.on('keypress', () => {
        resolve(true);
      });

      process.stdin.setRawMode(true);
    });
  }
};

export default questionLoop;
