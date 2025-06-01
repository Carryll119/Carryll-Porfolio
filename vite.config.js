import {defineConfig} from "vite"
import { resolve}	from "path"

export default defineConfig({
	build:{
		outDir: "dist",
		rollupOptions:{
			input:{
				main: resolve(__dirname, "index.html"),
				resume: resolve(__dirname, "resume.html"),
			}
		}

	},
	plugins: [
		
	]
})