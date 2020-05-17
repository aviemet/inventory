require 'test_helper'

class UserCompaniesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_company = user_companies(:one)
  end

  test "should get index" do
    get user_companies_url
    assert_response :success
  end

  test "should get new" do
    get new_user_company_url
    assert_response :success
  end

  test "should create user_company" do
    assert_difference('UserCompany.count') do
      post user_companies_url, params: { user_company: { company_id: @user_company.company_id, role_id: @user_company.role_id, user_id: @user_company.user_id } }
    end

    assert_redirected_to user_company_url(UserCompany.last)
  end

  test "should show user_company" do
    get user_company_url(@user_company)
    assert_response :success
  end

  test "should get edit" do
    get edit_user_company_url(@user_company)
    assert_response :success
  end

  test "should update user_company" do
    patch user_company_url(@user_company), params: { user_company: { company_id: @user_company.company_id, role_id: @user_company.role_id, user_id: @user_company.user_id } }
    assert_redirected_to user_company_url(@user_company)
  end

  test "should destroy user_company" do
    assert_difference('UserCompany.count', -1) do
      delete user_company_url(@user_company)
    end

    assert_redirected_to user_companies_url
  end
end
