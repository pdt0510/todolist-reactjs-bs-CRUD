const levelConverted = (searchedLower) => {
  let searchedLevel = null;
  if ("small".includes(searchedLower)) {
    searchedLevel = 0;
  } else if ("medium".includes(searchedLower)) {
    searchedLevel = 1;
  } else if ("high".includes(searchedLower)) {
    searchedLevel = 2;
  }
  return searchedLevel;
};

const sortNameBy = (list, orderDir) => {
  if (orderDir === "ASC") {
    return list.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    });
  } else {
    return list.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return 1;
      else if (nameA > nameB) return -1;
      else return 0;
    });
  }
};

const sortLevelBy = (list, orderDir) => {
  if (orderDir === "ASC") {
    return list.sort((a, b) => {
      return a.level - b.level;
    });
  } else {
    return list.sort((a, b) => {
      return b.level - a.level;
    });
  }
};

const searchedFilter = (items, strSearch) => {
  let searchedLower = strSearch.toLowerCase();
  let searchedLevel = levelConverted(searchedLower);

  let searchedItem = items.filter((item) => {
    if (item.name.toLowerCase().includes(searchedLower)) {
      return item;
    } else if (item.level === searchedLevel) {
      return item;
    }
    return null;
  });
  return searchedItem;
};

const handleSortByName = (list, orderDir) => {
  return sortNameBy(list, orderDir);
};

const handleSortByLevel = (list, orderDir) => {
  return sortLevelBy(list, orderDir);
};

const SearchSortHandler = (items, orderBy, orderDir, strSearch) => {
  //tạo new array để dùng, để ko bị tham chiếu lẫn nhau
  let listShown = null;

  if (strSearch) {
    listShown = searchedFilter(items, strSearch);
  }
  else if (!strSearch) {
    listShown = Array.from(items);
  }

  if (orderBy === "NAME") {
    listShown = handleSortByName(listShown, orderDir);
  }
  else if (orderBy === "LEVEL") {
    listShown = handleSortByLevel(listShown, orderDir);
  }

  return listShown;
};

export default SearchSortHandler;
