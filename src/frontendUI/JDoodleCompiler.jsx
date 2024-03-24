import React, { useState } from 'react';
import useJDoodleWebSocket from './useJDoodleWebSocket'; // Import the custom hook

const JDoodleCompiler = ({ apiKey }) => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('java');
  const { output, error } = useJDoodleWebSocket(code, language, apiKey);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows="15"
        className="mb-4 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        placeholder="Enter your code here"
      ></textarea>
      <select
        value={language}
        onChange={handleLanguageChange}
        className="mb-4 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      >
        <option value="nodejs">Node.js</option>
        <option value="python">Python</option>
        {/* Add more language options as needed */}
      </select>
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Output:</h2>
        {error ? <pre className="text-red-600">{error}</pre> : <pre className="text-sm">{output}</pre>}
      </div>
    </div>
  );
};

export default JDoodleCompiler;