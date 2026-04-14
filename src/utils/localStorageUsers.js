export const getLocalUsers = () =>{
    const stored = localStorage.getItem("localUsers");
    return stored ? JSON.parse(stored) : [] ;
}

export const saveUser = (user) => {
    const users = getLocalUsers();
    localStorage.setItem("localUsers",JSON.stringify([...users,user]));
};

export const getlocaluserById = (id) => {
    const users= getLocalUsers();
    return users.find(user => user.id === Number(id));
}