require 'test_helper'

class PhotosControllerTest < ActionController::TestCase
  test "should get uploader:string" do
    get :uploader:string
    assert_response :success
  end

  test "should get title:string" do
    get :title:string
    assert_response :success
  end

  test "should get url:string" do
    get :url:string
    assert_response :success
  end

end
