const API_ROOT = 'http://localhost:3000/api/v1';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: token
  };
};

const getUsers = () => {
  return fetch(`${API_ROOT}/users`, { headers: getHeaders() }).then(res =>
    res.json()
  );
};

const addListing = newListing => {
  return fetch(`${API_ROOT}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ newListing })
  }).then(res => res.json());
};

const getAppointments = () => {
  return fetch(`${API_ROOT}/appointments`, {
    headers: { Authorization: localStorage.getItem('token') }
  }).then(res => res.json());
};

const getListings = () => {
  return fetch(`${API_ROOT}/listings`, { headers: getHeaders() }).then(res =>
    res.json()
  );
};

const logIn = (email, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-type': 'application/JSON'
    },
    body: JSON.stringify({ email: email, password: password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const deleteAppointment = appointmentId => {
  return fetch(`${API_ROOT}/appointments/${appointmentId}`, {
    method: 'DELETE',
    headers: getHeaders()
  }).then(res => res.json());
};

const createNewListing = listing => {
  return fetch(`${API_ROOT}/listings`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ listing })
  }).then(res => res.json());
};

const createNewAppointment = appointment => {
  return fetch(`${API_ROOT}/appointments`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ appointment })
  }).then(res => res.json());
};

const deleteListing = listingId => {
  return fetch(`${API_ROOT}/listings/${listingId}`, {
    method: 'DELETE',
    headers: getHeaders()
  }).then(res => res.json());
};

export default {
  users: {
    getUsers,
    addListing
  },
  appointments: {
    getAppointments,
    deleteAppointment,
    createNewAppointment
  },
  listings: {
    getListings,
    createNewListing,
    deleteListing
  },
  auth: {
    logIn,
    getCurrentUser
  }
};
