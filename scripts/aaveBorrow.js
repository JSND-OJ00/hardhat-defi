async function main() {}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    precess.exit(1);
  });
