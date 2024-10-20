FROM node:lts-alpine3.17

ENV HUGO_VERSION="0.134.3"

ARG UID

ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz /tmp
RUN tar -xf /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz -C /tmp \
    && mkdir -p /usr/local/sbin \
    && mv /tmp/hugo /usr/local/sbin/hugo \
    && rm -rf /tmp/hugo_${HUGO_VERSION}_linux_amd64 \
    && rm -rf /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz \
    && rm -rf /tmp/LICENSE.md \
    && rm -rf /tmp/README.md && \
    npm install -g postcss postcss-cli && \
    adduser --home /data --disabled-password --uid ${UID} app

USER app

WORKDIR "/data"
VOLUME "/data"
EXPOSE 1313

ENTRYPOINT ["./entrypoint.sh"]
