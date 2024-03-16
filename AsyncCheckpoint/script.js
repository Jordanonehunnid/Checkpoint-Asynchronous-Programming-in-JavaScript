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
  
  // Task 04: Chaining Async/Await
  async function chainedAsyncFunctions() {
    // Define three nested asynchronous functions
    async function asyncFunction1() {
      // Wait for 1 second before logging a message
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Async Function 1 executed");
    }
  
    async function asyncFunction2() {
      // Wait for 1 second before logging a message
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Async Function 2 executed");
    }
  
    async function asyncFunction3() {
      // Wait for 1 second before logging a message
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Async Function 3 executed");
    }
  
    // Execute each asynchronous function sequentially
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
  }
  
  // Task 05: Awaiting Concurrent Requests
  async function concurrentRequests() {
    try {
      // Fetch data from two different URLs concurrently
      const [response1, response2] = await Promise.all([
        fetch('https://fakestoreapi.com/products1'),
        fetch('https://fakestoreapi.com/products2')
      ]);
      // Parse the JSON responses
      const data1 = await response1.json();
      const data2 = await response2.json();
      // Log the parsed data from both responses to the console
      console.log("Response 1:", data1);
      console.log("Response 2:", data2);
    } catch (error) {
      // Handle errors if any of the requests fail
      console.error('Failed to fetch data:', error.message);
    }
  }
  
  // Task 06: Awaiting Parallel Calls
  async function parallelCalls(urls) {
    try {
      // Fetch data from all URLs in parallel
      const responses = await Promise.all(urls.map(url => fetch(url)));
      // Parse the JSON responses from all requests
      const data = await Promise.all(responses.map(response => response.json()));
      // Log the parsed data from all responses to the console
      console.log("Responses:", data);
    } catch (error) {
      // Handle errors if any of the requests fail
      console.error('Failed to fetch data:', error.message);
    }
  }
  
  // Testing the functions
  const array = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(array); // Test Task 01
  awaitCall(); // Test Task 02 or Task 03
  chainedAsyncFunctions(); // Test Task 04
  concurrentRequests(); // Test Task 05
  parallelCalls(['https://fakestoreapi.com/products1', 'https://fakestoreapi.com/products2']); // Test Task 06
  