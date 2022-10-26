# Catalog API - [Clean Architecture with Typescript Series](https://www.youtube.com/watch?v=bRl-sTvLbsI&list=PLN3ZW2QI7gLfQ4oEkDWw0DZVIjvAjO140&index=2)

Geo-targeted API to find the latest catalogs (flyers) and the best deals from the nearest retailers, helping customers to save on their purchases.

The API is built with TypeScript and MongoDB on top of Node.js, using TDD, Clean Architecture, SOLID principles, and some Design Patterns and DDD Patterns.

It serves geolocated content based on city and uses roles and permissions to manage all resources (such as catalogs, retailers, and categories). The API also supports several filters, such as a product filter within the catalogs, which is possible thanks to the use of an OCR (Google Vision API) to extract text from each page of the catalogs.

> This repository is part of a series of videos about Clean Architecture with TypeScript. [You can follow the series on YouTube](https://www.youtube.com/watch?v=bRl-sTvLbsI&list=PLN3ZW2QI7gLfQ4oEkDWw0DZVIjvAjO140&index=2).
