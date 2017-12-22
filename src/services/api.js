const API_ROOT = 'http://localhost:3000/api/v1';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

const getUsers = () => {
  return fetch(`${API_ROOT}/users`, { headers: headers }).then(res =>
    res.json()
  );
};

const addListing = newListing => {
  return fetch(`${API_ROOT}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ newListing })
  }).then(res => res.json());
};

const getAppointments = userId => {
  return fetch(`${API_ROOT}/appointments`)
    .then(res => res.json())
    .then(appts =>
      appts.filter(appt => {
        return appt.user_id === userId;
      })
    );
};

const getListings = () => {
  return fetch(`${API_ROOT}/listings`, { headers: headers }).then(res =>
    res.json()
  );
};

export default {
  users: {
    getUsers,
    addListing
  },
  appointments: {
    getAppointments
  },
  listings: {
    getListings
  }
};
