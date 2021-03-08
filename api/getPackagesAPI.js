import React, { useState, useEffect } from "react";
import client from "./client";

const endpoint = `packages/getPending`;

function getPackages(username) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackagesAPI();
  }, []);

  const getPackagesAPI = async () => {
    const response = await fetch(
      `${client.baseURL}${endpoint}?username=${username}`
    );
    const data = await response.json();
    setPackages(data.responseObject);
  };

  return packages;
}

export default getPackages;
