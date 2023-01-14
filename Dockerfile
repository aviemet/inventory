FROM ruby:3.1.2

ADD . /inventory
WORKDIR /inventory
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update && apt-get install -yq nodejs postgresql-client
RUN npm i -g yarn
RUN yarn install
RUN bundle install
RUN bin/rails assets:precompile

ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true

EXPOSE 3000

ENTRYPOINT []
