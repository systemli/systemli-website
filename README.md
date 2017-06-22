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
gem install octopress octopress-paginate octopress-multilingual
gem install jekyll -v 2.5.3
```

## Add new post
 * Write new post in `_posts/`.
 * Add translation also in `_posts/`.
 * `octopress id src/_posts/first_post src/_posts/second_post
 * restart jekyll
