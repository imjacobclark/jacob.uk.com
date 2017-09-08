require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test 'renders application layout' do
    get root_url

    assert_template 'page/index', 'layouts/application'
  end

  test '404' do
    get root_url + 'some_unknown_endpoint'

    assert_response :not_found
    assert_select 'h1', text: 'Not found'
  end

  test 'root' do 
    get root_url
    assert_response :success
    assert_select 'h1', text: 'TestApplication'
  end

  test 'dynamic endpoint' do
    get root_url + 'about-me'
    assert_response :success
    assert_select 'h1', text: 'About me'
  end

  test 'navigation links' do
    get root_url + 'about-me'
    assert_response :success

    assert_select 'a[href=?]', '/homepage'
    assert_select 'a[href=?]', '/about-me'
  end

  test 'section title' do
    get root_url + 'about-me'
    assert_response :success
    
    assert_select 'h2', text: 'Experience'
  end
  
  test 'section markdown' do
    get root_url + 'about-me'
    assert_response :success
    
    assert_select 'p', text: 'Software Engineering'
  end
end
