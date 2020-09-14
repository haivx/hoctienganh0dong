<h1>Starter guide</h1>
<h3>Database:</h3>

1. Create database in local.

2. Update database config file: `/bin/database.js`:
- Note: Grant all privileges to curent user 

3. Run command line to migrate and seed:

```js
    npm run --sequelize -- db:migrate 
    npm run --sequelize -- db:seed:all
```

- Note: Because of table relationship, be aware of ordering migration file.