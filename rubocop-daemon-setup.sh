curl https://raw.githubusercontent.com/fohte/rubocop-daemon/master/bin/rubocop-daemon-wrapper -o /tmp/rubocop-daemon-wrapper
if [ ! -d "/usr/local/bin/rubocop-daemon-wrapper" ]
then
  sudo mkdir -p /usr/local/bin/rubocop-daemon-wrapper
  sudo mv /tmp/rubocop-daemon-wrapper /usr/local/bin/rubocop-daemon-wrapper/rubocop
  sudo chmod +x /usr/local/bin/rubocop-daemon-wrapper/rubocop
  ln -fs /usr/local/bin/rubocop-daemon-wrapper $(which rubocop)
fi
