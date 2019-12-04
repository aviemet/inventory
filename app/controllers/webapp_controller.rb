class WebappController < ApplicationController
	include ::ActionController::Cookies
	
	layout "webapp"

	def index
		props = {}
  	puts JSON.pretty_generate(props)
		@webapp_props = props
	end

	def logout_user
		cookies.delete :auth_token
		cookies.delete :refresh_token
		redirect_to "/"
	end
end
