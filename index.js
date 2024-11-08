let cors = require('cors');
let express = require('express');
const hotels = require('./data');
let app = express();
let PORT = 3000;

app.use(cors());

//E1
function ascendingOrder(hotel1, hotel2) {
  return hotel1.price - hotel2.price;
}

function descendingOrder(hotel1, hotel2) {
  return hotel2.price - hotel1.price;
}

function getSortedHotelPricing(hotels, pricing) {
  //  shallow copy
  const hotelsCopy = hotels.slice();

  if (pricing === 'low-to-high') {
    return hotelsCopy.sort(ascendingOrder);
  } else if (pricing === 'high-to-low') {
    return hotelsCopy.sort(descendingOrder);
  }
  return hotelsCopy;
}

app.get('/hotels/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let result = getSortedHotelPricing(hotels, pricing);
  res.json({ hotels: result });
});

//E2
function ascendingOrderRating(hotel1, hotel2) {
  return hotel1.rating - hotel2.rating;
}

function descendingOrderRating(hotel1, hotel2) {
  return hotel2.rating - hotel1.rating;
}
function getSortedHotelRating(copyHotels, rating) {
  if (rating === 'low-to-high') {
    return copyHotels.sort(ascendingOrderRating);
  } else if (rating === 'high-to-low') {
    return copyHotels.sort(descendingOrderRating);
  }
}
app.get('/hotels/sort/rating', (req, res) => {
  let rating = req.query.rating;
  let copyHotels = hotels.slice();
  let result = getSortedHotelRating(copyHotels, rating);
  res.json({ hotels: result });
});

//E3
function ascendingOrderReviews(hotel1, hotel2) {
  return hotel1.reviews - hotel2.reviews;
}

function descendingOrderReviews(hotel1, hotel2) {
  return hotel2.reviews - hotel1.reviews;
}
function getSortedHotelReviews(copyHotels, reviews) {
  if (reviews === 'least-to-most') {
    return copyHotels.sort(ascendingOrderReviews);
  } else if (reviews === 'most-to-least') {
    return copyHotels.sort(descendingOrderReviews);
  }
}
app.get('/hotels/sort/reviews', (req, res) => {
  let reviews = req.query.reviews;
  let copyHotels = hotels.slice();
  let result = getSortedHotelReviews(copyHotels, reviews);
  res.json({ hotels: result });
});

//E4
function filterByAmenity(hotels, amenity) {
  return hotels.filter((hotel) => hotel.amenity.toLowerCase() === amenity);
}
app.get('/hotels/filter/amenity', (req, res) => {
  let amenity = req.query.amenity;
  if (!amenity) res.json({ message: `Please select a valid response!` });

  let filteredHotels = filterByAmenity(hotels, amenity);
  res.json({ hotels: filteredHotels });
});

//E5
function filterByCountry(hotels, country) {
  return hotels.filter((hotel) => hotel.country.toLowerCase() === country);
}
app.get('/hotels/filter/country', (req, res) => {
  let country = req.query.country;

  if (!country) res.json({ message: `Please a select a valid response!` });

  let filteredHotels = filterByCountry(hotels, country);
  res.json({ hotels: filteredHotels });
});

//E6
function filterByCategory(hotels, category) {
  return hotels.filter((hotel) => hotel.category.toLowerCase() === category);
}
app.get('/hotels/filter/category', (req, res) => {
  let category = req.query.category;
  if (!category) res.json({ message: `Please a select a valid response!` });

  let filteredHotels = filterByCategory(hotels, category);
  res.json({ hotels: filteredHotels });
});

//E7
app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels });
});

app.listen(PORT, () => {
  console.log(`Server hitting on PORT:${PORT}`);
});
