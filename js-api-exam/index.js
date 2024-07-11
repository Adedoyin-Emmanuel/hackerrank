const axios = require("axios");

async function getTotalGoals(team, year) {
  let page = 0;
  let result = await fetchPerPage(team, year, 1);
  let totalGoals = 0;

  while (result.response1.total_pages >= page) {
    result = await fetchPerPage(team, year, ++page);
    result.response1.data.forEach((match) => {
      totalGoals += Number(match.team1goals);
    });
    result.response2.data.forEach((match) => {
      totalGoals += Number(match.team2goals);
    });
  }

  return totalGoals;
}

async function fetchPerPage(team, year, page) {
  var url1 = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=${page}`;
  var url2 = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${page}`;

  let [response1, response2] = await Promise.all([
    axios.get(url1),
    axios.get(url2),
  ]);

  return {
    response1: response1.data,
    response2: response2.data,
  };
}
