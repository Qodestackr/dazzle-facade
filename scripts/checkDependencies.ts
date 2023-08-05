import chalk from "chalk";

export function checkDependencies(dependencies: string[]): void {
  const missingDependencies = dependencies.filter((dependency) => {
    try {
      require.resolve(dependency);
      return false;
    } catch (error) {
      return true;
    }
  });

  if (missingDependencies.length > 0) {
    console.log(chalk.red("Error: Missing required dependencies:"));
    console.log(chalk.red(missingDependencies.join(", ")));
    process.exit(1);
  }
}
