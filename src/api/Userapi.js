import Axiosapi from "./Axiosapi";
export const getUsers = () => {
    return Axiosapi.get("/users");
};
export const getUserById = (id) => {
    return Axiosapi.get(`/users/${id}`);
};
export const addUser = (userData) =>{
    return Axiosapi.post("/users",userData);
}
export const deleteUser = (id) =>{
    return Axiosapi.delete(`/users/${id}`);
}