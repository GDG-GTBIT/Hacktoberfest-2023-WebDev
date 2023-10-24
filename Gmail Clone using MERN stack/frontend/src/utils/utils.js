export const addEllipsis = (text) => {
  if (text.length > 10) {
    return text.substring(0, 20) + "...........";
  }
};
