import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/", // API base URL
    // timeout: 5000, // Optional: Timeout for requests
    headers: {
        "Content-Type": "application/json", // Optional: Add headers if needed
    },
});

export default instance;
