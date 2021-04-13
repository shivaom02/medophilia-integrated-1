import axios from 'axios'

const setTokenDoctor = token => {
  if (token) {
    axios.defaults.headers.common['AuthorizationDoctor'] = token
  } else {
    delete axios.defaults.headers.common['AuthorizationDoctor']
  }
}

const setTokenPharma = token => {
  if (token) {
    axios.defaults.headers.common['AuthorizationPharma'] = token
  } else {
    delete axios.defaults.headers.common['AuthorizationPharma']
  }
}

const setTokenUser = token => {
  if (token) {
    axios.defaults.headers.common['AuthorizationUser'] = token
  } else {
    delete axios.defaults.headers.common['AuthorizationUser']
  }
}

const setTokenSuperAdmin = token => {
  if (token) {
    axios.defaults.headers.common['AuthorizationSuperAdmin'] = token
  } else {
    delete axios.defaults.headers.common['AuthorizationSuperAdmin']
  }
}

const setTokenAdmin = token => {
  if (token) {
    axios.defaults.headers.common['AuthorizationAdmin'] = token
  } else {
    delete axios.defaults.headers.common['AuthorizationAdmin']
  }
}

export {
   setTokenAdmin,
   setTokenDoctor,
   setTokenPharma,
   setTokenSuperAdmin,
   setTokenUser
}