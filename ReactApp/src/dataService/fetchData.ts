export const fetchData = (url:string, timeOut?: number) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Something went wrong!"));
        } else return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(new Error(error)));
  });
};
