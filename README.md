# GlobalStay Hotel Management API

A comprehensive backend system for "GlobalStay," enabling dynamic hotel listing, filtering, and sorting based on user preferences.

## Features
- **List all hotels:** Retrieve the full list of available hotels.
- **Sort hotels:** Sort hotels by pricing, ratings, or reviews in ascending or descending order.
- **Filter hotels:** Filter hotels based on amenities, categories, or country of location.
- **Cross-origin support:** Integrated with CORS for seamless API access.

## Prerequisites
- Node.js installed on your machine.
- Clone the hotel data from [this Gist link](https://gist.github.com/imrhlrvndrn/60f253e3e9101df1902f3e9f8637ad3d).

## Installation
1. Clone the repository:
   ```
   git clone <repository-link>
   cd GlobalStay-API
2. Install dependencies and start the server
```
npm i
node app.js
```
## API Endpoints
1. List All Hotels
Endpoint: /hotels
Method: GET
Description: Fetches all hotels in the dataset.
Example Call:
```
GET http://localhost:3000/hotels
```
2. Sort Hotels by Pricing
Endpoint: /hotels/sort/pricing
Method: GET
Query Parameters: pricing (low-to-high | high-to-low)
Description: Sorts hotels by pricing in the specified order.
Example Call:
```
GET http://localhost:3000/hotels/sort/pricing?pricing=low-to-high
```
3. Sort Hotels by Ratings
Endpoint: /hotels/sort/rating
Method: GET
Query Parameters: rating (low-to-high | high-to-low)
Description: Sorts hotels by ratings in the specified order.
Example Call:
```
GET http://localhost:3000/hotels/sort/rating?rating=high-to-low
```
4. Sort Hotels by Reviews
Endpoint: /hotels/sort/reviews
Method: GET
Query Parameters: reviews (least-to-most | most-to-least)
Description: Sorts hotels by reviews in the specified order.
Example Call:
```
GET http://localhost:3000/hotels/sort/reviews?reviews=least-to-most
```
5. Filter Hotels by Amenity
Endpoint: /hotels/filter/amenity
Method: GET
Query Parameters: amenity (spa | pool | gym, etc.)
Description: Filters hotels based on selected amenities.
Example Call:
```
GET http://localhost:3000/hotels/filter/amenity?amenity=spa
```
6. Filter Hotels by Country
Endpoint: /hotels/filter/country
Method: GET
Query Parameters: country (India | USA | France, etc.)
Description: Filters hotels based on the selected country.
Example Call:
```
GET http://localhost:3000/hotels/filter/country?country=india
```
7. Filter Hotels by Category
Endpoint: /hotels/filter/category
Method: GET
Query Parameters: category (Luxury | Boutique | Resort, etc.)
Description: Filters hotels based on the selected category.
Example Call:
```
GET http://localhost:3000/hotels/filter/category?category=budget
```
