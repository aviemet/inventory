require 'trustifi_mail'

ActionMailer::Base.add_delivery_method :trustifi_mail, TrustifiMail
