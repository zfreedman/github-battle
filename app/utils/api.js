import axios from "axios";

// methods to export
module.exports = {
  fetchPopularRepos: (language) => {
    let encodedURI = window.encodeURI(
      "https://api.github.com/search/repositories?"
        + "q=stars:>1+language:"
        + language
        + "&sort=stars&order=desc&type=Repositories"
    );

    return axios.get(encodedURI)
      .then((resp) => resp.data.items);
  }
};
