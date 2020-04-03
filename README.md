# Source code for www.systemli.org

This static website is built with [Hugo](https://github.com/gohugoio/hugo) as site generator, using [Tailwind CSS](https://tailwindcss.com/) as CSS Framework.
Please improve by providing content, translations or code.

## Start development

 1. Run `hugo server` for preview
 2. Visit http://localhost:1313/
 3. If you change either tailwind.config.js or main.css run `npm run build-css` or `npm run watch-css`

## Structure

* [content](content/): Pages & Posts
* [static](static/): Static content

## Add new pages or posts

Make sure to have [hugo](https://gohugo.io/getting-started/installing/) installed. To create a new page, run the corresponding command. In each case: Replace `example.md` with a unique name.

TODO: commands for different archetypes

### Services

If you want services to appear on the homepage, make sure to properly fill out `homepage_title` and `icon` in the frontmatter of the relevant files. Vice versa: If you don't want them to show, delete these properties from the frontmatter (don't just leave blank, delete).
