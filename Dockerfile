# Bie-low Storage – Jekyll build and serve
FROM ruby:3.1-alpine

RUN apk add --no-cache build-base

WORKDIR /app

# Install gems (Gemfile.lock optional)
COPY Gemfile Gemfile.lock* ./
RUN bundle install --jobs 4 --retry 3

# Copy site source
COPY . .

# Build the site (output in _site)
RUN bundle exec jekyll build

# Expose Jekyll default port
EXPOSE 4000

# Serve the built site at http://localhost:4000/bielow-storage/
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000"]
