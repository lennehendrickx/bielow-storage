# Bie-Low Storage – Jekyll build and serve
# Ruby aligned with GitHub Pages (see https://pages.github.com/versions/)
FROM ruby:3.3-alpine

RUN apk add --no-cache build-base

WORKDIR /app

# Install gems (Gemfile.lock optional)
COPY Gemfile Gemfile.lock* ./
RUN bundle install --jobs 4 --retry 3

# Copy site source
COPY . .

# Build the site (output in _site)
RUN bundle exec jekyll build

EXPOSE 4000

# Serve at http://localhost:4000/
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000"]
