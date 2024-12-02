// import fetch from 'node-fetch'; // Ensure you have node-fetch installed
// import * as cheerio from 'cheerio';

export async function extractData() {
  try {
    // Fetch the HTML data from the URL
    const response = await fetch('https://safer.fmcsa.dot.gov/query.asp?query_type=queryCarrierSnapshot&query_param=USDOT&query_string=1650820');
    const body = await response.text();

    console.log(body)

   
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

