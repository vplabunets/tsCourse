import axios from "axios";

const form = document.querySelector("form");
const addressInput = document.getElementById("address")! as HTMLInputElement;
const GOOGLE_API_KEY = "AIzaSyD200HFER1Qp-77gciulnIj4zDae8-6b4k";
type GoogleGeocondingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};
function searchAddressHandler(event: Event) {
  event?.preventDefault();
  const enteredAddress = addressInput.value;
  //send to Google's API
  axios
    .get<GoogleGeocondingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response: any) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location");
      }
      const coordinates = response.data.results[0].geometry.location;

      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );
      new google.maps.Marker({
        map: map,
        position: coordinates,
        title: "Uluru",
      });
    })
    .catch((err: any) => {
      alert(err.message);

      console.log(err);
    });
}

form?.addEventListener("submit", searchAddressHandler);
