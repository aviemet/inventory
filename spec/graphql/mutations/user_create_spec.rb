require 'rails_helper'

module Mutations
	module Users
		RSpec.describe UserCreate, type: :request do

			describe '.resolve' do
				it 'creates a user' do
					user = build_stubbed(:user)

					expect do
						post '/graphql', params: { query: query(email: user.email, password: user.password) }
					end.to change { User.count }.by(1)
				end

				it 'returns a user' do
					user = build_stubbed(:user)
					post '/graphql', params: { query: query(email: user.email, password: user.password) }
					json = JSON.parse(response.body)
					data = json['data']['userCreate']

					expect(data).to include(
						'id' => be_present,
						'email' => user.email,
						'person' => {
							'id' => be_present,
							'contact' => {
								'id' => be_present,
								'emails' => [{
									'id' => be_present,
									'email' => user.email
								}]
							}
						}
					)
				end

			end
			
			def query(email:, password:)
				<<~GQL
					mutation {
						userCreate(authInput: {email: "#{email}", password: "#{password}"}) {
							id
							email
							person {
								id
								contact {
									id
									emails {
										id
										email
									}
								}
							}
						}
					}
				GQL
			end

		end
	end
end