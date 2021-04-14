import AxiosInstance from '../utilsClient/AxiosInstance';

const setTokenDoctor = token => {
  if (token) {
    AxiosInstance.defaults.headers.common['AuthorizationDoctor'] = token
  } else {
    delete AxiosInstance.defaults.headers.common['AuthorizationDoctor']
  }
}

const setTokenPharma = token => {
  if (token) {
    AxiosInstance.defaults.headers.common['AuthorizationPharma'] = token
  } else {
    delete AxiosInstance.defaults.headers.common['AuthorizationPharma']
  }
}

const setTokenUser = token => {

  AxiosInstance.defaults.headers.common['AuthorizationUser'] = '';
  
  delete AxiosInstance.defaults.headers.common['AuthorizationUser']

  if (token) {
    AxiosInstance.defaults.headers.common['AuthorizationUser'] = `${token}`;

    console.log(AxiosInstance.defaults.headers.common['AuthorizationUser']);
  }
}

const setTokenSuperAdmin = token => {
  if (token) {
    AxiosInstance.defaults.headers.common['AuthorizationSuperAdmin'] = token
  } else {
    delete AxiosInstance.defaults.headers.common['AuthorizationSuperAdmin']
  }
}

const setTokenAdmin = token => {
  if (token) {
    AxiosInstance.defaults.headers.common['AuthorizationAdmin'] = token
  } else {
    delete AxiosInstance.defaults.headers.common['AuthorizationAdmin']
  }
}

export {
   setTokenAdmin,
   setTokenDoctor,
   setTokenPharma,
   setTokenSuperAdmin,
   setTokenUser
}