# Catalog API - [Clean Architecture with Typescript Series](https://www.youtube.com/watch?v=bRl-sTvLbsI&list=PLN3ZW2QI7gLfQ4oEkDWw0DZVIjvAjO140&index=2)

Geo-targeted API to help customers find the latest catalogs (flyers) and best deals from nearby retailers, saving money on their purchases.

The API is built with TypeScript and MongoDB on top of Node.js, using TDD, Clean Architecture, SOLID principles, and some Design Patterns and DDD Patterns.

It serves geolocated content based on the customer's city and includes role-based permissions to manage all resources, such as catalogs, retailers, and categories. Additionally, the API offers powerful filtering capabilities, including the ability to search for specific products within catalogs using optical character recognition (OCR) technology from the Google Vision API.

> This repository is part of a series of videos about Clean Architecture with TypeScript. [You can follow the series on YouTube](https://www.youtube.com/watch?v=bRl-sTvLbsI&list=PLN3ZW2QI7gLfQ4oEkDWw0DZVIjvAjO140&index=2).

## Docs

- [Mockups](docs/MOCKUPS.md)
- [Use Cases](docs/USE-CASES.md)
- [Requirements](docs/REQUIREMENTS.md)
- [Routes](docs/ROUTES.md)

## Improvements

- [ ] Apply a more restrictive CORS policy (allowing only the website domain) to prevent CSRF attacks.
- [ ] Consider using a more appropriate solution for the search by text within catalogs (such as ElasticSearch).
- [ ] Implement logging to track errors and performance.
- [ ] Change the folder structure to represent the architectural layers, by grouping files by subdomains, instead of by layers.
