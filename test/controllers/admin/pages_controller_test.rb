require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test 'renders admin layout' do
    get admin_pages_url

    assert_template 'admin/pages/index', 'layouts/admin'
  end
end