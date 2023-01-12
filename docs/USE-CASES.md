[Back](../../README.md)

## Actors

- **Admin**: The admin is the person who manages all the resources (users, categories, retailers, catalogs, etc.).
- **Editor**: The editor is the person who creates catalogs to be published/approved.
- **Consumer**: The user is the person who consumes the catalogs (and all other resources).
- **System**: The system is the API itself.

## Use Cases

### Admin

#### Users

- **GetAdminUsers**: The admin must be able to get all users.
    - **Input**:
        - Pagination parameters (page).
        - Search parameters (id, name).
    - **Output**:
        - Returns a list of users with pagination.
        - Returns a list of users filtered by id or name (if provided).
        - Returns a list of users ordered by creation date (descending).

---

- **CreateAdminUser**: The admin must be able to create a user.
    - **Input**:
        - User data.
    - **Output**:
        - Returns the created user id.

---

- **GetAdminUser**: The admin must be able to get a user.
    - **Input**:
        - User id.
    - **Output**:
        - Returns the user data.

---

- **UpdateAdminUser**: The admin must be able to update a user.
    - **Input**:
        - User id.
        - User data.
    - **Output**:
        - Updates the user.

---

- **DeleteAdminUser**: The admin must be able to delete a user.
    - **Input**:
        - User id.
    - **Output**:
        - Deletes the user.

---

#### Categories

- **GetAdminCategories**: The admin must be able to get all categories.
    - **Input**:
        - Pagination parameters (page).
        - Search parameters (id, name).
    - **Output**:
        - Returns a list of categories with pagination.
        - Returns a list of categories filtered by id or name (if provided).
        - Returns a list of categories ordered by creation date (descending).

---

- **CreateAdminCategory**: The admin must be able to create a category.
    - **Input**:
        - Category data.
    - **Output**:
        - Returns the created category id.

---

- **GetAdminCategory**: The admin must be able to get a category.
    - **Input**:
        - Category id.
    - **Output**:
        - Returns the category data.

---

- **UpdateAdminCategory**: The admin must be able to update a category.
    - **Input**:
        - Category id.
        - Category data.
    - **Output**:
        - Updates the category.

---

- **DeleteAdminCategory**: The admin must be able to delete a category.
    - **Input**:
        - Category id.
    - **Output**:
        - Deletes the category.

---

#### Retailers

- **GetAdminRetailers**: The admin must be able to get all retailers.
    - **Input**:
        - Pagination parameters (page).
        - Search parameters (id, name).
    - **Output**:
        - Returns a list of retailers with pagination.
        - Returns a list of retailers filtered by id or name (if provided).
        - Returns a list of retailers ordered by creation date (descending).

---

- **CreateAdminRetailer**: The admin must be able to create a retailer.
    - **Input**:
        - Retailer data.
    - **Output**:
        - Returns the created retailer id.
        - Stores all the cities that the retailer is located in based on the location data.

---

- **GetAdminRetailer**: The admin must be able to get a retailer.
    - **Input**:
        - Retailer id.
    - **Output**:
        - Returns the retailer data.

---

- **UpdateAdminRetailer**: The admin must be able to update a retailer.
    - **Input**:
        - Retailer id.
        - Retailer data.
    - **Output**:
        - Updates the retailer.
        - Stores all the cities that the retailer is located in based on the location data.

---

- **DeleteAdminRetailer**: The admin must be able to delete a retailer.
    - **Input**:
        - Retailer id.
    - **Output**:
        - Deletes the retailer.

---

- **CreateAdminRetailersInBatch**: The admin must be able to create retailers in batch.
    - **Input**:
        - Retailers data.
    - **Output**: 
        - Creates a background job to create the retailers.

---

- **CreateAdminRetailersFromFile**: The admin must be able to create retailers from a file.
    - **Input**:
        - File with retailers data.
    - **Output**:
        - Creates a background job to create the retailers.

---

- **GetAdminRetailersExampleFile**: The admin must be able to get a file with retailers data example.
    - **Output**:
        - Returns a file with retailers data example.

---

#### Catalogs

- **UpdateAdminCatalogStatus**: The admin must be able to update a catalog status.
    - **Input**:
        - Catalog id.
        - Catalog status.
    - **Output**:
        - Updates the catalog status.

---

### Admin/Editor

#### Login

- **Login**: The admin/editor must be able to log in to the system.
    - **Input**:
        - Email address of the admin/editor.
        - Password of the admin/editor.
        - Login data (IP address, date time).
    - **Output**:
        - Returns a valid access token if the admin/editor exists, the status is active and the password is correct.
        - Returns an error if the admin/editor does not exist.
        - Returns an error if the admin/editor is not active.
        - Returns an error if the password is incorrect.
        - Logs the ip address and datetime when the login is successful.

---

#### Catalogs

- **GetAdminCatalogs**: The admin/editor must be able to get catalogs.
    - **Input**:
        - Pagination parameters (page).
        - Search parameters (id, name, status, user id).
    - **Output**:
        - Returns a list of catalogs with pagination.
        - Returns a list of catalogs filtered by id, name, status or user id (if provided).
        - Returns a list of catalogs ordered by creation date (descending).
        - Returns all the catalogs if the user is an admin.
        - Returns only the catalogs created by the user if the user is an editor.

---

- **CreateAdminCatalog**: The admin/editor must be able to create a catalog.
    - **Input**:
        - Catalog data.
    - **Output**:
        - Returns the created catalog id.
        - Sets the catalog status to "approved" if the user is an admin.
        - Sets the catalog status to "pending" if the user is an editor.
        - Increases the total number of catalogs of the retailer by 1.
        - Stores all the cities that the catalog is located in based on the location data.

---

- **GetAdminCatalog**: The admin/editor must be able to get a catalog.
    - **Input**:
        - Catalog id.
        - User id.
    - **Output**:
        - Returns the catalog data if the user is an admin.
        - Returns the catalog data if the user is an editor and the catalog was created by the user.
        - Returns an error if the user is an editor and the catalog was not created by the user.

---

- **UpdateAdminCatalog**: The admin/editor must be able to update a catalog.
    - **Input**:
        - Catalog id.
        - Catalog data.
        - User id.
    - **Output**:
        - Updates the catalog if the user is an admin.
        - Updates the catalog if the user is an editor and the catalog was created by the user.
        - Returns an error if the user is an editor and the catalog was not created by the user.
        - Updates all the fields of the catalog except the status if the user is an editor.
        - Stores all the cities that the catalog is located in based on the location data.

---

- **DeleteAdminCatalog**: The admin/editor must be able to delete a catalog.
    - **Input**:
        - Catalog id.
        - User id.
    - **Output**:
        - Deletes the catalog if the user is an admin.
        - Deletes the catalog if the user is an editor and the catalog was created by the user.
        - Returns an error if the user is an editor and the catalog was not created by the user.

---

- **CreateCatalogsInBatch**: The admin/editor must be able to create approved catalogs in batch.
    - **Input**:
        - Catalogs data.
    - **Output**:
        - Creates a background job to create the catalogs.

---

- **CreateCatalogsFromFile**: The admin/editor must be able to create approved catalogs from a file.
    - **Input**:
        - File with catalogs data.
    - **Output**:
        - Creates a background job to create the catalogs.

---

- **GetCatalogsExampleFile**: The admin/editor must be able to get a file with catalogs data example.
    - **Output**:
        - Returns a file with catalogs data example.

---

### Consumer

- **GetCities**: The consumer must be able to get all cities.
    - **Input**:
        - Country code.
    - **Output**:
        - Returns a list of cities.
        - Create the slug of the city based on the name of the city and the zone code.

---

- **GetZones**: The consumer must be able to get all zones.
    - **Input**:
        - Country code.
    - **Output**:
        - Returns a list of zones.

---

- **GetCatalogs**: The consumer must be able to get catalogs.
    - **Input**:
        - Country code.
        - City id.
        - Pagination parameters (page).
        - Search parameters (retailer id, category id, text).
    - **Output**:
        - Returns a list of approved catalogs with pagination.
        - Returns only the catalogs for the provided location (country code and city id).
        - Returns a list of catalogs filtered by retailer id, category id or text (if provided).
        - Returns a list of catalogs ordered by creation date (descending).

---

- **GetRetailers**: The consumer must be able to get retailers.
    - **Input**:
        - Country code.
        - City id.
        - Pagination parameters (page).
        - Search parameters (initial letter, category id).
    - **Output**:
        - Returns a list of retailers with pagination.
        - Returns only the retailers for the provided location (country code and city id).
        - Returns a list of retailers filtered by initial letter or category id (if provided).
        - Returns a list of retailers ordered by the number of catalogs (descending).

---

- **GetCategories**: The consumer must be able to get categories.
    - **Input**:
        - Country code.
    - **Output**:
        - Returns a list of categories.
        - Returns only the categories for the provided location (country code).
        - Returns a list of categories ordered by the weight field (descending).

---

- **GetCatalog**: The consumer must be able to get a catalog.
    - **Input**:
        - Country code.
        - City id.
        - Catalog slug.
    - **Output**:
        - Returns the catalog data if the catalog status is "approved".
        - Returns the catalog data only for the provided location (country code and city id).
        - Returns an error if the catalog status is not "approved".
        - Returns an error if the catalog is not for the provided location (country code and city id).

---

