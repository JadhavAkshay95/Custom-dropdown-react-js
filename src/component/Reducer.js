import { initialState } from "./Data";

export const Reducer = (state = initialState, action) => {
  let stateData = [...initialState];
  switch (action.type) {
    case "GET_DATA":
      return [...state];

    case "FILTER_DATA":
      return filterData(stateData, action.payload);

    case "CLEAR_FILTER":
      return stateData;

    default:
      return state;
  }
};

const filterData = (state, payload) => {
  let data = [...state];
  if (payload) {
    if (payload.skills && payload.skills.length) {
      data = filterSkills(data, payload.skills);
    }
    if (payload.technology && payload.technology.length) {
      data = filterTech(data, payload.technology);
    }
    if (payload.location && payload.location.length) {
      data = filterLocation(data, payload.location);
    }
    if (payload && payload.exp) {
      data = filterByExperience(data, payload.exp);
    }
  }
  return data;
};

const filterSkills = (state, skills) => {
  return state.filter((item) => {
    if (skills.every((skill) => item.skills.includes(skill))) {
      return item;
    }
  });
};

const filterTech = (state, technologies) => {
  return state.filter((item) => {
    if (technologies.every((tech) => item.technologies.includes(tech))) {
      return item;
    }
  });
};

const filterLocation = (state, locationList) => {
  return state.filter((item) => {
    if (locationList.every((location) => item.location.includes(location))) {
      return item;
    }
  });
};

const filterByExperience = (state, exp) => {
  return state.filter((item) => item.exp >= exp);
};
