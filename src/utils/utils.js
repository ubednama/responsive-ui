export const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('-');
  return `${day} ${month} ${year}`;
};
