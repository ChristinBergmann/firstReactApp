const apiKey =
  "EaVyENPdp2Qy-TpAUg5F3h9c3WqwVDnKA40SQbHadCyCzZ2RSHtyRQIzaPKb038J1Wob1-B99FiHo4wCa9zf8KkO5AkgwD66Wwa4wkRItAlo5-IeVEKvlAMwJWlDX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              price: business.price,
              rating: business.rating,
              //   start: business.hours[0].open[0].start,
              //   end: business.hours[0].open[0].end,
            };
          });
        }
      });
  },
};

export default Yelp;
