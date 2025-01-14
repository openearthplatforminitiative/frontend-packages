const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const packagesDir = path.join(__dirname, "../packages")

const packages = fs.readdirSync(packagesDir).filter((file) => {
	return fs.statSync(path.join(packagesDir, file)).isDirectory()
})

// Build each package with tsc
packages.forEach((package) => {
	console.log(`Building package ${package} with tsc...`)
	execSync("tsc --build", {
		stdio: "inherit",
		cwd: path.join(packagesDir, package),
	})
})

// Run Storybook on port 6006
console.log("Starting Storybook on port 6006...")
execSync("start-storybook -p 6006", { stdio: "inherit" })
