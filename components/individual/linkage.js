import React, { useState } from "react";
import { Select } from "antd";
import axios from "axios";

const linkage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchFor, setSearchFor] = useState("");
  const [message, setMessage] = useState("");
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://bat-project.onrender.com/values?option=${selectedOption}&value=${searchFor}`
    );
    const responseArray = response.data.results[0];
    console.log("response is ", responseArray);
    setMessage(responseArray.first_name);
  };

  return (
    <div id="linkage" className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Linkage Mapping
        </h2>
        <div className="flex gap-5">
          <form onSubmit={handleFormSubmit}>
            <label>
              Select an Option:
              <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e)}
              >
                <option value="genotype">genotype</option>
                <option value="phenotype">phenotype</option>
                <option value="id">from</option>
                <option value="first_name">to</option>
              </Select>
            </label>
            <br />
            <label>enter the "{selectedOption}" you want to search for </label>
            <input
              value={searchFor}
              onChange={(e) => setSearchFor(e.target.value)}
            />
            <br />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
          <br />
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default linkage;
