/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import stylexPlugin from "@stylexjs/nextjs-plugin";


const nextConfig = {
    output: 'export'
};

const __filename = fileURLToPath(import.meta.url);

export default stylexPlugin({
    rootDir: path.dirname(__filename)
})(nextConfig);
