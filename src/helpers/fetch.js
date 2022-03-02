import Swal from 'sweetalert2';
const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) throw Error(response.status);

            return response;
        }).catch(error => Swal.fire('Error', "Algo salio mal Error: " + error.message, 'error'));
    }
}

export {
    fetchSinToken
}


