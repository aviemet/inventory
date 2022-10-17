#!/bin/sh

set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f tmp/pids/server.pid

bin/setup
