# Source code for www.systemli.org

This static website is built with [Hugo](https://github.com/gohugoio/hugo) as site generator, using [Tailwind CSS](https://tailwindcss.com/) as CSS Framework.
Please improve by providing content, translations or code.

## Start development

 1. Make sure to have [hugo](https://gohugo.io/getting-started/installing/) installed.
 1. Make sure npm is installed
 1. Make sure postcss dependencies are installed `npm install -g postcss postcss-cli`
 1. Make sure theme dependencies are installed `cd themes/systemli && npm i`
 1. Run `hugo server` for preview
 1. Visit <http://localhost:1313/>

## Structure

* [content](content/): Pages & Posts
* [static](static/): Static content

## Add new pages or posts

To create a new page, run the corresponding command. In each case: Replace `example.md` with a unique name.

TODO: commands for different archetypes

### Homepage

The static content on the homepage comes from `content/[lang]/_index.md`. The image and links are maintained in the frontmatter. Additionally, there is a toggle in the frontmatter to hide this content from the start page (`hideStaticContent`).

### Services

If you want services to appear on the homepage, make sure to properly fill out `service_bar_title` and `icon` in the frontmatter of the relevant files. Vice versa: If you don't want them to show, delete these properties from the frontmatter (don't just leave blank, delete).

If you want to mark a service as being in beta status, add `beta: true` to the frontmatter. Don't forget to change the icon from grayscale to color once you remove the beta flag.
