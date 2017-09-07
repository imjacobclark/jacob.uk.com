class Page < ApplicationRecord
  has_many :sections, dependent: :destroy

  def self.title(slug)
    @page = self.where(slug: slug).first

    unless @page.nil?
      return @page.title
    else
      return nil
    end
  end

  def self.sections(slug)
    return Page.where(slug: slug).first.sections
  end
end
