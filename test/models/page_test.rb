require 'test_helper'

class PageTest < ActiveSupport::TestCase
  test "return title for page" do
    assert_equal(Page.title('homepage'), 'TestApplication')
  end

  test "return nil for title when page does not exist" do
    assert_nil Page.title('i dont exist')
  end
end
