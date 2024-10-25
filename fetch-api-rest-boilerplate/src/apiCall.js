
// Create a async function getPost(url)
async function getPost(url) {
  // use try-catch block
  try {
    // use promise to call fetch(url) to get the response
    const response = await fetch(url);
    //console.log(response)

    // Check if response is ok, if not throw error with message `Failed to fetch data. Status: ${response.status}`
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    // return data as json
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {

    // catch error and throw error with message `Error fetching data: ${error.message}`
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = getPost;
