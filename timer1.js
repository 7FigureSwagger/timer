let beepInterval = process.argv.slice(2);

// for (let i = 0; i < beepInterval.length; i++) {
for (let x of beepInterval) {
  setInterval(() => {
    process.stdout.write('\x07');
    process.stdout.write(x);
  }, x * 1000);
}


// console.log(beepInterval)
// process.stdout.write(beepInterval);
// process.stdout.write('\n');
