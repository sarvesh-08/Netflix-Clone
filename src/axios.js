import axios from 'axios'

const instance =axios.create({
    baseURL:"https://apithemoviedb.org/3",
}    )

export default  instance;