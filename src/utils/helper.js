export const sortByDateThenViews = (arr) => {
  return [...arr].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;

    return b.views - a.views;
  });
};

export const sortByViewsThenDate = (arr) => {
  return [...arr].sort((a, b) => {
    if (a.views > b.views) return -1;
    if (a.views < b.views) return 1;

    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });
};
