# Bie-Low Storage – match GitHub Pages locally
# Versions: https://pages.github.com/versions/
source "https://rubygems.org"

# Pin to current GitHub Pages stack (Jekyll 3.10.x); see pages.github.com/versions
gem "github-pages", "~> 232", group: :jekyll_plugins
gem "webrick", "~> 1.8"

# Ruby 3.4+/4.x: no longer default gems, still required by Jekyll 3 / deps
gem "base64"
gem "bigdecimal"
gem "csv"
gem "logger"

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo-data"
end
