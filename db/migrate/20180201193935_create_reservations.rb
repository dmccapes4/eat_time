class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :restaurant_id
      t.string :date
      t.string :time
      t.integer :num_people
      t.boolean :completed

      t.timestamps
    end
  end
end
