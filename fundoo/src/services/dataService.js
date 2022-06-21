import axios from "axios";

const headerConfig = {
    headers:{
        token: localStorage.getItem('token')
    }
}
export const getNotes = () => {
    let response = axios.get('http://localhost:3001/api/v1/notes/retriveAll', headerConfig)
    return response
}
export const addNote = (obj) => {
    console.log(headerConfig);
    let response = axios.post('http://localhost:3001/api/v1/notes/create', obj, headerConfig)
    return response

}


export const updateArchieve = (id) => {
    console.log(id);
    let response = axios.put(`http://localhost:3001/api/v1/notes/archive/${id}`, null, headerConfig)
    return response
}

export const updateTrash = (id) => {
    console.log(id);
    let response = axios.put(`http://localhost:3001/api/v1/notes/trash/${id}`, null, headerConfig)
    return response
}

export const updateColor = (id,obj) => {
    console.log(id);
    let response = axios.put(`http://localhost:3001/api/v1/notes/color/${id}`,obj, headerConfig)
    return response
}

export const updateNotess = (id,obj) => {
    let response = axios.put(`http://localhost:3001/api/v1/notes/update/${id}`,obj, headerConfig)
    return response
}


