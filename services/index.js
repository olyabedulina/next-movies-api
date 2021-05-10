import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export function loadMovies({
    filters = '',
    sortBy = '',
    sortOrder = '',
    search = '',
    searchBy = 'title'
}) {
    return axios.get(`${baseUrl}/movies`, {
        params: {
            filter: filters,
            sortBy: sortBy,
            sortOrder: sortOrder,
            search: search,
            searchBy: searchBy
        }
        }).then(response => {
        return response.data.data
    })
}

export function addMovie(movieInfo) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return axios.post(`${baseUrl}/movies`, movieInfo, { headers })
        .then(response => response.data)
}

export function editMovie(movieInfo) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return axios.put(`${baseUrl}/movies`, movieInfo, { headers })
        .then(response => response.data)
}

export function deleteMovie(movieId) {
    return axios.delete(`${baseUrl}/movies/${movieId}`)
        .then(response => response.data)
}

export function getMovie(movieId) {
    return axios.get(`${baseUrl}/movies/${movieId}`)
        .then(response => response.data)
}
