class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "eadf3ddf-0cdf-4e82-ac24-1306a2323e12",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

export default Api;
