import { useState, useEffect } from "react";
import client from "./client";

const endpoint = `packages/getPending`;

function getPackages(username) {
  const [packages, setPackages] = useState();

  useEffect(() => {
    getPackagesAPI();
    () => {
      setPackages([]);
    };
  }, []);

  const getPackagesAPI = async () => {
    const response = await fetch(
      `${client.baseURL}${endpoint}?username=${username}`
    );
    const { responseObject } = await response.json();

    const dataModified = responseObject.map((el) => {
      return { ...el, statusHistory: el.statusHistory.reverse() };
    });
    setPackages(dataModified);
  };

  return packages;
}
export default getPackages;
