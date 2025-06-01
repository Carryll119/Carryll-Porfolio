import {defineConfig} from "vite"
import { resolve}	from "path"

export default defineConfig({
	build:{
		outDir: "dist",
		rolluptOptions:{
			input:{
				main: resolve(__dirname, "index.html"),
				resume: resolve(__dirname, "resume.html"),
			}
		}

	},
	plugins: [
		
	]
})