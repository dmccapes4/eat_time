export const fetchSignup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
  });
};

export const fetchLogin = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
  });
};

export const fetchLogout = user => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  });
};
