ARG RUBY_VERSION=3.2.2

FROM ruby:$RUBY_VERSION AS BUILD_IMAGE

ARG BUNDLER_VERSION=2.4.17
ARG NODE_MAJOR_VERSION=21

ADD . /inventory
WORKDIR /inventory

# Install basic packages
RUN apt-get update && apt-get install -y build-essential libvips postgresql-client ca-certificates curl gnupg

# Install Node
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR_VERSION.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update && apt-get install -y nodejs
RUN npm i -g yarn && yarn set version stable

# Clean up apt
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man

# Rails app lives here
WORKDIR /inventory

# Set production environment
ENV RAILS_LOG_TO_STDOUT="1"
ENV RAILS_SERVE_STATIC_FILES true
ENV RAILS_ENV production
# ENV BUNDLE_WITHOUT development
ENV NODE_ENV production

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN gem uninstall bundler && gem install bundler -v $BUNDLER_VERSION
RUN bundle install

# Install npm packages
COPY package.json yarn.lock ./
RUN yarn install

# Copy application code
COPY ./docker_copy_files.sh .
RUN chmod +x ./docker_copy_files.sh
RUN ./docker_copy_files.sh

# Precompile bootsnap code for faster boot times
RUN bundle exec bootsnap precompile --gemfile app/ lib/

# Precompiling assets for production without requiring secret RAILS_MASTER_KEY
RUN SECRET_KEY_BASE=DUMMY bundle exec rails assets:precompile

# Entrypoint prepares the database
ENTRYPOINT ["/inventory/bin/docker-entrypoint"]

EXPOSE 3000