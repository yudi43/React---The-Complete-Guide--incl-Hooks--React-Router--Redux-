export const updateObject = (oldObject, newProperties) => {
  return {
    ...oldObject,
    ...newProperties
  };
};
