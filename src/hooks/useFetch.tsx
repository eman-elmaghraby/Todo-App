import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the URL
        const response = await fetch(url);
        
        // Check if the response is not ok
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        
        // Parse JSON data
        const result: T = await response.json();
        setData(result);


      } catch (err) {
        // Handle errors
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        // Set loading to false whether there was an error or not
        setLoading(false);
      }
    };

   
    fetchData();
  }, [url]); // Dependency array: refetch if URL changes

  return { data, loading, error };
}
