class DropConcertsTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :concerts
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
