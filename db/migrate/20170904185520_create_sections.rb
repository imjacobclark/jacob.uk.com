class CreateSections < ActiveRecord::Migration[5.1]
  def change
    create_table :sections do |t|
      t.string :heading
      t.text :markdown
      t.belongs_to :page

      t.timestamps
    end
  end
end
