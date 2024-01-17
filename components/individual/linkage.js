import React, { useState } from "react";
import { Select } from "antd";
import axios from "axios";
const linkage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchFor, setSearchFor] = useState("");
  const [message, setMessage] = useState("");
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setMessage("loading please wait..,")
      const response = await axios.get(
        `https://bat-project.onrender.com/values?option=${selectedOption}&value=${searchFor}`
      );

      const responseArray = response.data.results[0];
      
      // Check if the response contains any data
      if (Object.keys(responseArray).length === 0) {
        setMessage("No match found. Please try another value.");
      } else {
        setMessage(responseArray);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error fetching data. Please try again with different values that might match.");
    }
  };

  return (
    <div id="linkage" className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Linkage Mapping
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <form onSubmit={handleFormSubmit} className="w-full">
            <label className="block text-gray-700 font-bold mb-2">
              Select an Option:
              <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e)}
                defaultValue="id"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="gene">gene</option>
                <option value="id">id</option>
                <option value="sl">sl</option>
                <option value="from1">from</option>
                <option value="to1">to</option>
                <option value="Molecular_Function">Molecular function</option>
                <option value="Gene_ontology_IDs">Gene ontology IDs</option>
              </Select>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              Enter the "{selectedOption}" you want to search for:
              <input
                value={searchFor}
                onChange={(e) => setSearchFor(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Submit
            </button>
          </form>
          <br />
          {message && (
  <div className="response-container w-[900px]">
    <h3 className="text-xl font-bold mb-2">Results:</h3>
    {typeof message === "string" ? (
      <p className="response-text">{message}</p>
    ) : (
      <ul className="response-list">
        {Object.entries(message).map(([key, value]) => (
          <li key={key} className="response-item">
            <strong>{key}:</strong>
            {typeof value === "string" && (
              <span className="response-value" style={{ wordWrap: "break-word" }}>
                {value}
              </span>
            )}
            {typeof value !== "string" && <span className="response-value">{value}</span>}
          </li>
        ))}
      </ul>
    )}
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default linkage;
