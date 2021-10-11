export const converter = (users) => {
  const newUsers = users.reduce((accum, user) => {
    const newUser = {
      id: user.id.toString(),
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      street: user.address.street,
      city: user.address.city,
    };

    accum.push(newUser);

    return accum;
  }, []);

  return newUsers;
};
