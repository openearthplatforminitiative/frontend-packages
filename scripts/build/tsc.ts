// https://github.dev/chakra-ui/chakra-ui

import { cpSync } from "node:fs"
import { join } from "node:path/posix"
import { spawnSync } from "child_process"

export async function generateTypes(dir: string) {
	const result = spawnSync("npx", ["tsc", "--project", "tsconfig.build.json"], {
		cwd: dir,
		stdio: "inherit",
	})

	if (result.error) {
		throw result.error
	}

	try {
		cpSync(
			join(dir, "dist", "types", "index.d.ts"),
			join(dir, "dist", "types", "index.d.mts")
		)
	} catch {
		console.log("No .dts file found")
	}
}
