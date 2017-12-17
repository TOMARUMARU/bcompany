require 'test_helper'

class BcompanyControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bcompany_index_url
    assert_response :success
  end

end
