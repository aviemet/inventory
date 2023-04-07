curl https://raw.githubusercontent.com/fohte/rubocop-daemon/master/bin/rubocop-daemon-wrapper -o /tmp/rubocop-daemon-wrapper
sudo mkdir -p /usr/local/bin/rubocop-daemon-wrapper
sudo mv /tmp/rubocop-daemon-wrapper /usr/local/bin/rubocop-daemon-wrapper/rubocop
sudo chmod +x /usr/local/bin/rubocop-daemon-wrapper/rubocop

ln -fs /usr/local/bin/rubocop-daemon-wrapper/rubocop $(which rubocop)
