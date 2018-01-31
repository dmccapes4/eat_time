class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :state
      t.string :city
      t.string :cuisine
      t.integer :max_capacity
      t.integer :time
      t.string :image_url

      t.timestamps
    end
  end
end
