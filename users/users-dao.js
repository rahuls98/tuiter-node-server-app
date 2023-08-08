let users = [
    {
        _id: 1,
        username: "user1",
        password: "password",
        firstName: "User",
        lastName: "1",
    },
    {
        _id: 2,
        username: "user2",
        password: "password",
        firstName: "User",
        lastName: "2",
    },
];

export const findAllUsers = () => users;

export const findUserById = (uid) => {
    const index = users.findIndex((u) => u._id === uid);
    if (index !== -1) return users[index];
    return null;
};

export const findUserByUsername = (username) => {
    const index = users.findIndex((u) => u.username === username);
    if (index !== -1) return users[index];
    return null;
};

export const findUserByCredentials = (username, password) => {
    const index = users.findIndex(
        (u) => u.username === username && u.password === password
    );
    if (index !== -1) return users[index];
    return null;
};

export const createUser = (user) =>
    users.push({
        _id: users.length + 1,
        ...user,
    });

export const updateUser = (uid, user) => {
    const index = users.findIndex((u) => u._id === uid);
    users[index] = { ...users[index], ...user };
    return { status: "ok" };
};
export const deleteUser = (uid) => {
    const index = users.findIndex((u) => u._id === uid);
    users.splice(index, 1);
    return { status: "ok" };
};
