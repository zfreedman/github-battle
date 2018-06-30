import axios from "axios";

// will need to use this is free github API access is not working
// ...permission denied errors
let id = "YOUR_CLIENT_ID";
let sec = "YOUR_SECRET_ID";
let params = "?client_id=" + id + "&client_secret=" + sec;

function calculateScore(profile, repos) {
  let followers = profile.followers;
  let totalStars = getStarCount(repos);
  return followers * 3 + totalStars;
}

function getProfile(username) {
  return axios.get(
    "https://api.github.com/users/"
      + username
      + params
    )
    .then(function(user) {
      return user.data;
    });
}

function getRepos(username) {
  return axios.get(
    "https://api.github.com/users/"
      + username
      + "/repos"
      + params
      + "&perpage=100"
    );
}

function getStarCount(repos) {
  return repos.data.reduce(function(starCount, repo) {
    return starCount + repo.stargazers_count;
  }, 0);
}

function getUserData(player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ])
  .then(function(promiseResultsArr) {
    let profile = promiseResultsArr[0];
    let repos = promiseResultsArr[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });
}

function handleAPIError(error) {
  console.warn(error);
  return null;
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

// methods to export
module.exports = {
  battle: (players) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleAPIError);
  },

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
