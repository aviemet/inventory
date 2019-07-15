class WebappController < ApplicationController
	layout "webapp"

	def index
		props = {}
  	puts JSON.pretty_generate(props)
		@webapp_props = props
	end
end
