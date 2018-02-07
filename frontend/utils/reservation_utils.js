export const fetchReservations = () => {
  return $.ajax({
    url: 'api/reservations'
  });
};

export const fetchReservation = id => {
  return $.ajax({
    url: 'api/reservations',
    data: { id },
  });
};

export const fetchCreateReservation = reservation => {
  return $.ajax({
    method: 'POST',
    url: 'api/reservations',
    data: { reservation },
  });
};

export const fetchUpdateReservation = reservation => {
  return $.ajax({
    method: 'PATCH',
    url: 'api/reservations',
    data: { reservation }
  });
};

export const fetchDeleteReservation = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reservations/${id}`,
  });
};
