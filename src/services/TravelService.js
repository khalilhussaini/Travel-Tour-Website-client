
//getting all Travel
export const getTravel = async () => {
  try {
    const response = await fetch("http://localhost:9000/Travel");
    const json = await response.json();
    if (response.ok) {
      return json; /// <=== return the fetched json data
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
};

///create a new Travel
export const createTravel = async (Travel) => {
  const options = {
    method: "POST",
    body: JSON.stringify(Travel),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("http://localhost:9000/Travel", options);
  const json = await response.json();
  if (response.ok) {
    return json; /// <=== return the fetched json data
  } else {
    throw new Error(response.statusText);
  }
};

///update the existing Travel
export const updateTravel = async (id, Travel) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(Travel), // data can be an object or a string
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(`http://localhost:9000/Travel/${id}`, options);
    const json = await response.json();
    if (response.ok) {
      return json; /// <=== return the fetched json data
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
};

///delete an existing Travel
export const deleteTravel = async (id) => {
  try {
    const response = await fetch(`http://localhost:9000/Travel/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      return json; /// <=== return the fetched json data (if response if ok you will get saying {message:"User Deleted"})
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
};
