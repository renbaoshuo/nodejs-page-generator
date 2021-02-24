const fs = require('fs');
const path = require('path');
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
});
const ejs = require('ejs');
const walkdir = require('walkdir');
const { default: parseMD } = require('parse-md');

const walk = async (srcPath) => {
    let result = await walkdir.async(srcPath, { return_object: true });
    const mdPaths = [];
    Object.entries(result).forEach(([filePath, fileStatus]) => {
        if (!fileStatus.isDirectory() && filePath.match(/\.md$/ig)) {
            mdPaths.push(filePath);
        }
    });
    return mdPaths;
};

const parseMarkdownToHtml = (srcPathList = []) => {
    srcPathList.forEach((mdFilePath) => {
        const mdFileContent = fs.readFileSync(mdFilePath, 'utf8');
        const { metadata, content } = parseMD(mdFileContent);
        const filename = path.basename(mdFilePath, '.md');
        const htmlContent = md.render(content);
        const { title } = metadata;
        let generatedFileContent = '';
        ejs.renderFile('./template.ejs', { title: title, content: htmlContent }, {}, (err, str) => {
            if (err) {
                console.error(err);
            } else {
                generatedFileContent = str;
            }
        });
        fs.writeFileSync(`./dist/${filename}.html`, generatedFileContent);
        console.info('Generated:', filename);
    });
};

const main = async () => {
    const paths = await walk('./src');
    parseMarkdownToHtml(paths);
};

main();
