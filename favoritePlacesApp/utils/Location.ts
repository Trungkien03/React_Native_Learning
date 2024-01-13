const GOOGLE_MAP_API_KEY = "AIzaSyAW7ykf7sEsPA0JNX1i_r8S6XSjvmuWsLI";

export const getMapPreview = (lat: number, lng: number) => {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
  return imagePreviewURL;
};

export const getAddress = async (lat: number, lng: number) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data: any = await response.json();
  const formattedAddress = data?.results && data.results[0]?.formatted_address;
  return formattedAddress;
};
