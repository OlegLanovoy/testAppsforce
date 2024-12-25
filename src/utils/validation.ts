interface UserDTO {
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  };
  location: {
    country: string;
    city: string;
    street: {
      name: string;
    };
  };
}

import axios from "axios";

export const getUsers = async () => {
  const { data } = await axios.get("https://randomuser.me/api/?results=10");
  return data.results.map((user: UserDTO) => ({
    id: user.login.uuid,
    name: `${user.name.title} ${user.name.first} ${user.name.last}`,
    email: user.email,
    image: user.picture.medium,
    location: `${user.location.country}, ${user.location.city}, ${user.location.street.name}`,
  }));
};
