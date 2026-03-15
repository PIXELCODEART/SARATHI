const semver = (v) => v.replace(/^v/, '').split('.').map(Number);
const [major] = semver(process.version);
if (major < 18) {
  console.error('\nERROR: Unsupported Node.js version ' + process.version + '.');
  console.error('This project requires Node.js 18.x or later (LTS).');
  console.error('Please install Node 18 or later and retry. Using nvm or nvm-windows is recommended.\n');
  process.exit(1);
}
process.exit(0);
