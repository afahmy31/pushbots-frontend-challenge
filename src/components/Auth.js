const domain = "https://testing.pushbots.com/api"; // API endpoint
export default class Auth {
  constructor(domain) {
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
  }
  login(email, password) {
    // Get a token from the api server using fetch
    return this.fetch(`${domain}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => {
        this.setToken(res.token); // token to localStorage
        return Promise.resolve(res);
      })
      .then(function(data) {
        return fetch(`${domain}/?filter=complete`, {
          method: "GET",
          headers: { Authorization: "Bearer " + data.access_token }
        })
          .then(response => response.json())
          .then(function(data) {
            return data;
          });
      });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token;
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    // Gets the user token from localStorage
    return localStorage.getItem("id_token");
  }

  fetch(url, options) {
    // Performs api calls with authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }
    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }

  _checkStatus(response) {
    // Sends an error if response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
