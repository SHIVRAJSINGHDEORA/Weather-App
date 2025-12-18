export const formatLocalTime = (utc, offset) => {
  return new Date((utc + offset) * 1000).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
