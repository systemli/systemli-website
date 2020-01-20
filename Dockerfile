FROM ruby:2.4.7-slim-stretch

RUN apt update && apt install -y \
    make \
    gcc \
    g++ \
    nodejs

RUN gem install \
    octopress:3.0.11 \
    octopress-multilingual:1.2.0 \
    octopress-paginate:1.2.0

RUN gem uninstall jekyll -I

RUN gem install \
    jekyll -v 2.5.3

ADD . /srv/jekyll

WORKDIR /srv/jekyll

EXPOSE 4000
