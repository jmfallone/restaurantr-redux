class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.string :creator_username
      t.datetime :date_created
      t.integer :score
      t.string :title
      t.text :description
      t.integer :store_id
      t.text :images # JSON array of image URLs (not using array due to mysql compatibility)

      t.timestamps
    end

    add_index :reviews, :store_id
    add_index :reviews, :creator_username
  end
end
