### `pg.updateOne(tableName, selector, update)`

This asynchronous function updates a single document in the specified table based on the provided selector (usually ID) and update data. If the document doesn't exist, it creates a new one. If the table doesn't exist, it returns `false`.

### `pg.findOneAndDelete(tableName, selector)`

This asynchronous function finds and deletes a single document from the specified table based on the provided selector (usually ID). If the document doesn't exist, it returns `true`. If the table doesn't exist, it returns `false`.

### `pg.collection.drop(tableName)`

This asynchronous function drops (deletes) the specified table from the database. If the table doesn't exist, it returns `false`.

### Notes

- These functions utilize asynchronous programming to handle database operations efficiently.
- Proper error handling is implemented to ensure robustness and reliability.
- The functions automatically handle database connections, allowing for seamless interactions with the PostgreSQL database.
</p>
