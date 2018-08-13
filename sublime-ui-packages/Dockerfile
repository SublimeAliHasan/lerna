FROM node:8.11.1

ADD ./ /sublime-ui-packages

WORKDIR /sublime-ui-packages

RUN yarn && \
    apt-get update -y

VOLUME /sublime-ui-packages/node_modules
