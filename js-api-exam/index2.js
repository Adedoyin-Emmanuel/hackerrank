const axios = require("axios");

async function fetchPerPage(year, page) {
  const url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching page ${page}:`, error);
    throw error; // re-throw the error after logging it
  }
}

async function getNumDraws(year) {
  try {
    let firstPageResult = await fetchPerPage(year, 1);
    let totalDraws = 0;
    const totalPages = firstPageResult.total_pages;

    firstPageResult.data.forEach((match) => {
      if (match.team1goals === match.team2goals) {
        totalDraws++;
      }
    });

    const promises = [];
    for (let page = 2; page <= totalPages; page++) {
      promises.push(fetchPerPage(year, page));
    }

    const results = await Promise.all(promises);

    results.forEach((result) => {
      result.data.forEach((match) => {
        if (match.team1goals === match.team2goals) {
          totalDraws++;
        }
      });
    });

    console.log(totalDraws);
    return totalDraws;
  } catch (error) {
    console.error("Error in getNumDraws:", error);
  }
}

getNumDraws(2011);
