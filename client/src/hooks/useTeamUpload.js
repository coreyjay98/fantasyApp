import { useState } from 'react';

const useTeamUpload = async (team) => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setFetching((fetching) => !fetching);
      const res = await fetch('/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          team,
        }),
      });
      try {
        const response = await res.json();
        console.log(response);
        setData(response);
      } catch (error) {
        setError(error);
      }
      setFetching((fetching) => !fetching);
    })();
  }, []);
  return [fetching, data, error];
};

export default useTeamUpload;
