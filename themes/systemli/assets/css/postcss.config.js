const purgecss = require("@fullhuman/postcss-purgecss");
const postcssImport = require("postcss-import");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const themeDir = "themes/systemli/";

module.exports = {
    plugins: [
        postcssImport({
            path: [themeDir],
        }),
        tailwindcss(themeDir + "assets/css/tailwind.config.js"),
        autoprefixer({
            path: [themeDir],
        }),
        purgecss.purgeCSSPlugin({
            content: [
                themeDir + "layouts/**/*.html",
                "content/**/*.html",
                "content/**/*.md",
                "public/**/*.html",
            ],
            defaultExtractor: (content) => {
                // Capture as liberally as possible, including things like `h-(screen-1.5)`
                const broadMatches =
                    content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

                // Capture classes within other delimiters like .block(class="w-1/2") in Pug
                const innerMatches =
                    content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

                return broadMatches.concat(innerMatches);
            },
        }),
    ],
};
