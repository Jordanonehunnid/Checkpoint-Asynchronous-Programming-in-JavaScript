// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(array) {
    // Loop through each value in the array
    for (const value of array) {
      // Log the current value to the console
      console.log(value);
      // Wait for 1 second before continuing to the next iteration
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Task 02: Awaiting a Call
  async function awaitCall() {
    try {
      // Fetch data from a URL
      const response = await fetch('https://fakestoreapi.com/products');
      // Parse the JSON response
      const data = await response.json();
      // Log the parsed data to the console
      console.log(data);
    } catch (error) {
      // Handle errors if the fetch or parsing fails
      console.error('Failed to fetch data:', error.message);
    }
  }
  
  // Task 03: Handling Errors with Async/Await
  async function awaitCall() {
    try {
      // Fetch data from a URL
      const response = await fetch('https://fakestoreapi.com/products');
      // Check if the response is successful
      if (!response.ok) {
        // Throw an error if the response is not successful
        throw new Error('Failed to fetch data: API returned an error');
      }
      // Parse the JSON response
      const data = await response.json();
      // Log the parsed data to the console
      console.log(data);
    } catch (error) {
      // Handle errors if the fetch, parsing, or response status check fails
      console.error('Failed to fetch data:', error.message);
    }
  }
  
 
  
  // Testing the functions
  const array = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(array); // Test Task 01
  awaitCall(); // Test Task 02 or Task 03
