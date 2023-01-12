[Back](../../README.md)

## Non-functional Requirements

- The login must return an error if the rate limit is exceeded (20 requests per minute per IP address).
- All the admin routes (except login) must be protected by a JWT token.
- The creation of resources in batch must be done in a background job, and if one of the resources' creation fails, the other resources must not be affected.
- The cities and zones returned by the public route must be cached for 1 week.
- The retailers and the categories returned by the public route must be cached for 1 hour.
- The catalogs (including the catalogs list) returned by the public route must be cached for 10 minutes (except for the search by text in the catalogs list).
- The search by text in the catalogs list must consider only the catalogs from the last week.
- The database must be indexed to improve the performance of the queries.
- Import all images from a public URL (in order to allow the import of images from a CSV file).
- Do not store the binary data of the images in the database (store it in the cloud instead).
- Process the images resizing one time (at the moment that the resource is created or updated).
- The catalog images must be resized to ~170x235 pixels (for the thumbnails).
- The retailer images must be resized to max 76x76 pixels (for the logos).
- Limit the size of the uploaded files to 10MB.
- Limit the size of the batches to 100 resources per batch.
- Do not use in memory cache (use a cache server instead).
- Process the location of the retailers or catalogs only when the resource is created or updated (in order to avoid performing complex aggregations in the database for each request).
- Remove from time to time old catalogs (older than 2 months).
