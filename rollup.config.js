import { readFile } from 'fs';
import { basename } from 'path';
import { promisify } from 'util';

import resolve from '@rollup/plugin-node-resolve';

const read = promisify(readFile);

export default {
	input: 'src/index.js',
	output: {
		dir: 'build',
		format: 'esm',
		sourcemap: false,
		minifyInternalExports: true,
		entryFileNames: '[name].[hash].js',
		assetFileNames: '[name].[hash].[ext]',
		chunkFileNames: '[name].[hash].js',
	},
	preserveEntrySignatures: false,
	plugins: [
		resolve({
			browser: true
		}),

		{
			name: 'demo/styles',
			async load(filename) {
				if (!/\.css$/.test(filename)) return;

				let ref = this.emitFile({
					type: 'asset',
					name: basename(filename),
					source: await read(filename, 'utf8'),
				});

				return {
					name: basename(filename),
					code: `export default import.meta.ROLLUP_FILE_URL_${ref}`,
					moduleSideEffects: true,
				};
			},
		}
	]
}
