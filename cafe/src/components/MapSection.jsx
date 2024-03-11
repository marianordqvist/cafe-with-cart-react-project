// import { useState, useEffect } from "react";

// export default function Map() {
//   const url = "https://google-api31.p.rapidapi.com/map";
//   const options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key": "d4df5d977bmsh318d5d8cb6d3887p11b55ajsnfc34389c54e5",
//       "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
//     },
//     body: {
//       text: "white house",
//       place: "washington DC",
//       street: "",
//       city: "",
//       country: "",
//       state: "",
//       postalcode: "",
//       latitude: "",
//       longitude: "",
//       radius: "",
//     },
//   };

//   const [map, setMap] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(url, options);
//       const json = await response.json();
//       setMap(json);
//     };
//     fetchData();
//   }, []);

//   return { map };
// }
