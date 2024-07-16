class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :subtitle
      t.integer :rating
      t.string :image
      t.string :restaurant_id
      t.string :user_id
      t.string :restaurant_name

      t.timestamps
    end
  end
end
