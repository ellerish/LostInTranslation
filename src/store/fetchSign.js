

const URL = 'http://localhost:8080/translations'


export const fetchSign  = ()  =>{
    return fetch(URL)
        .then(response => response.json())
         
}

