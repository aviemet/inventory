require 'rails_helper'

module Mutations
	module Users
		RSpec.describe UserCreate, type: :request do

			describe '.resolve' do
				it 'creates a user' do
					user = create(:user)

					expect do
						post '/graphql', params: { query: query(email: user.email, password: user.password) }
					end.to change { User.count }.by(1)
				end

				# it 'returns a user' do

				# end

			end
			
			def query(email:, password:)
				<<~GQL
					mutation {
						userCreate(authInput: {email: "#{email}", password: "#{password}"}) {
							id
							email
							person {
								id
							}
						}
					}
				GQL
			end

		end
	end
end