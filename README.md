This static website is built with [Jekyll](https://github.com/jekyll/jekyll)
 and [octopress](https://github.com/octopress/).

Please improve by providing content, translations or code.

## Requirements
```
apt-get install python-software-properties
apt-add-repository ppa:brightbox/ruby-ng
apt-get update
apt-get install ruby2.1 ruby2.1-dev
apt-get install nodejs
gem install jekyll:2.5.3 octopress:3.0.11 octopress-multilingual:1.2.0 octopress-paginate:1.2.0

```

If jekyll doesn't start, you have multiple versions of some gems installed.
```
gem uninstall jekyll liquid colorator
```
Please uninstall the more recent ones. (LOL)

## Add new post
 * Write new post in `_posts/`.
 * Add translation also in `_posts/`.
 * `octopress id src/_posts/first_post src/_posts/second_post
 * restart jekyll
