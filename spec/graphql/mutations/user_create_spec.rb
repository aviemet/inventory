# require 'rails_helper'

# Rspec.describe UserCreateMigration, type: :request do
# 	context '.resolve' do
# 		it 'creates a new user' do
# 			user = create(:user)

# 			expect do
# 				post '/graphql', params: { query: query(email: user.email, password: user.password) }
# 			end.to change { User.count }.by(1)
# 		end
# 	end
# end