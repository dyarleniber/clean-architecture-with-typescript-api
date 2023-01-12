[Back](../../README.md)

## HTTP Routes

### Admin Routes

| Method | Route         | Description  |
|:-------|:--------------|:-------------|
| POST   | /admin/login  | Login a user |

| Method | Route            | Description   |
|:-------|:-----------------|:--------------|
| GET    | /admin/users     | Get all users |
| POST   | /admin/users     | Create a user |
| GET    | /admin/users/:id | Get a user    |
| PUT    | /admin/users/:id | Update a user |
| DELETE | /admin/users/:id | Delete a user |

| Method | Route                 | Description        |
|:-------|:----------------------|:-------------------|
| GET    | /admin/categories     | Get all categories |
| POST   | /admin/categories     | Create a category  |
| GET    | /admin/categories/:id | Get a category     |
| PUT    | /admin/categories/:id | Update a category  |
| DELETE | /admin/categories/:id | Delete a category  |

| Method | Route                  | Description                      |
|:-------|:-----------------------|:---------------------------------|
| GET    | /admin/retailers       | Get all retailers                |
| POST   | /admin/retailers       | Create a retailer                |
| GET    | /admin/retailers/:id   | Get a retailer                   |
| PUT    | /admin/retailers/:id   | Update a retailer                |
| DELETE | /admin/retailers/:id   | Delete a retailer                |
| POST   | /admin/retailers/batch | Create retailers in batch        |
| POST   | /admin/retailers/file  | Create retailers from a file     |
| GET    | /admin/retailers/file  | Download retailers file template |

| Method | Route                      | Description                     |
|:-------|:---------------------------|:--------------------------------|
| GET    | /admin/catalogs            | Get all catalogs                |
| POST   | /admin/catalogs            | Create a catalog                |
| GET    | /admin/catalogs/:id        | Get a catalog                   |
| PUT    | /admin/catalogs/:id        | Update a catalog                |
| DELETE | /admin/catalogs/:id        | Delete a catalog                |
| PATCH  | /admin/catalogs/:id/status | Update a catalog status         |
| POST   | /admin/catalogs/batch      | Create catalogs in batch        |
| POST   | /admin/catalogs/file       | Create catalogs from a file     |
| GET    | /admin/catalogs/file       | Download catalogs file template |

### Website Routes

| Method | Route           | Description        |
|:-------|:----------------|:-------------------|
| GET    | /cities         | Get all cities     |
| GET    | /zones          | Get all zones      |
| GET    | /catalogs       | Get the catalogs   |
| GET    | /retailers      | Get all retailers  |
| GET    | /categories     | Get all categories |
| GET    | /catalogs/:slug | Get a catalog      |
