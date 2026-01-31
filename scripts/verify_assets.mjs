import fs from 'fs';
import path from 'path';

const projectFile = 'components/Projects.tsx';
const publicDir = 'public';

if (!fs.existsSync(projectFile)) {
    console.error(`File not found: ${projectFile}`);
    process.exit(1);
}

const content = fs.readFileSync(projectFile, 'utf-8');
// Regex to capture contents of strings "/..." ending in .png or .webp
// Quotes can be ' or "
const regex = /["'](\/[^"']+\.(?:png|webp|jpg|jpeg))["']/gi;

let match;
let found = 0;
let errors = 0;

console.log(`Scanning ${projectFile} for image paths...`);

while ((match = regex.exec(content)) !== null) {
    const imagePath = match[1];
    // Remove leading slash to join with publicDir
    const relativePath = imagePath.substring(1);
    const fullPath = path.join(publicDir, relativePath);

    if (fs.existsSync(fullPath)) {
        console.log(`[OK] Found: ${imagePath}`);
        found++;
    } else {
        // Check for case sensitivity issues by listing dir
        const dir = path.dirname(fullPath);
        const basename = path.basename(fullPath);

        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            const exactMatch = files.includes(basename);
            if (exactMatch) {
                // Should have been caught by existsSync unless permissions issues?
                console.error(`[ERROR] fs.existsSync failed but readdir found it? ${imagePath}`);
            } else {
                // Check for case mismatch
                const caseMatch = files.find(f => f.toLowerCase() === basename.toLowerCase());
                if (caseMatch) {
                    console.error(`[ERROR] Case mismatch: Referenced "${basename}" but found "${caseMatch}" in ${dir}`);
                } else {
                    console.error(`[ERROR] File not found: ${imagePath}`);
                }
            }
        } else {
            console.error(`[ERROR] Directory not found: ${path.dirname(imagePath)}`);
        }
        errors++;
    }
}

console.log(`\nScan complete. Found ${found} images. ${errors} errors.`);
if (errors > 0) process.exit(1);
