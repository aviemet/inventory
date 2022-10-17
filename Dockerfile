FROM ruby:3.1.2

ADD . /inventory
WORKDIR /inventory
RUN apt-get update && apt-get install -y nodejs npm postgresql-client
RUN npm i -g yarn
RUN yarn install
RUN bundle install

ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true

EXPOSE 3000

ENTRYPOINT []