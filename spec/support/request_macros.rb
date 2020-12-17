module RequestMacros
  def login_admin
    before(:each) do
      user = FactoryBot.create(:user)
      user.confirm
      user.add_role(:super_admin)
      user.add_role(:admin, Company.first)
      sign_in user
    end
  end

  def login_user
    user = FactoryBot.create(:user)
    user.confirm
    user.add_role(:admin, Company.first)
    sign_in user
  end
end
