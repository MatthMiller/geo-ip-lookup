class Loading {
  constructor() {
    this.interval;

    this.progressSymbols = ['\\', '|', '/', '-'];
    this.progressSteps = this.progressSymbols.map((actualSymbol) => {
      return (actualSymbol += ' Loading...');
    });
    this.progressIndex = 0;
  }

  startLoading = () => {
    this.interval = setInterval(() => {
      process.stdout.write(
        `\r\x1b[94m${this.progressSteps[this.progressIndex++]}\x1b[97m`
      );
      this.progressIndex %= this.progressSteps.length;
    }, 250);
  };

  stopLoading = () => {
    clearInterval(this.interval);
    // \x1b[0G Move cursor to start
    // \x1b[2K Clean the line
    process.stdout.write('\x1b[0G\x1b[2K');
  };
}

export default Loading;
