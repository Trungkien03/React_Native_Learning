const GOOGLE_MAP_API_KEY = "AIzaSyAW7ykf7sEsPA0JNX1i_r8S6XSjvmuWsLI";

export const getMapPreview = (lat: number, long: number) => {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_MAP_API_KEY}`;
  return imagePreviewURL;
};
