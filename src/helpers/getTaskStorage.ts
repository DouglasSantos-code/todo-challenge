export const getLocalStorage = () => {
  let list = localStorage.getItem('todos');
  if (typeof list === 'string') {
    return (list = JSON.parse(list));
  } else {
    return [];
  }
};
