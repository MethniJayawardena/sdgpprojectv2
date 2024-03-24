import { useEffect, useState } from 'react';

const useJDoodleWebSocket = (code, language, apiKey) => {
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("wss://api.jdoodle.com/v1/execute");

    socket.onopen = () => {
      const message = {
        clientId: '8cc0ed098863965930312590fee1bb2d',
        clientSecret: '57b5c8d5603ccc56d92e8411d72973834a291bdef6e6c4af4600e73a066869f4',
        script: code,
        language: 'java',
      };
      socket.send(JSON.stringify(message));
    };

    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.output) {
        setOutput(response.output);
      } else if (response.error) {
        setError(response.error);
      }
    };

    socket.onclose = (event) => {
      console.log("Connection closed:", event.reason);
    };

    return () => {
      socket.close();
    };
  }, [code, language, apiKey]);

  return { output, error };
};

export default useJDoodleWebSocket;
