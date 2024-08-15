import axios from "axios"

const handleResponse = async (response) => {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if(!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data;
}

export const postPayment = async (data) => {
  const response = await fetch("http://localhost/api/payment", {
    method: "POST",
    body: JSON.stringify(data)
  });

  return handleResponse(response).then((data) => {return data;});
}

export const postProduct = async (data, token) => {
  const response = await fetch("http://localhost/api/product", {
    method: "POST", 
    body: data,
    headers: {
      "Authorization":  token,
    }
  });
  return handleResponse(response).then((data) => {return data;});
}