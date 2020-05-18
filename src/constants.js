const prod = {
  API_URL : "",
}

const dev = {
  API_URL : "http://localhost:5000"
}

export const config = process.env.NODE_EV === "development" ? dev:prod;