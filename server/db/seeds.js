use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "John Smith",
    email_address: "johnsmith@hotmail.com",
    check_in_status: true
  },
  {
    name: "Stacy Williams",
    email_address: "stacey5673@hotmail.com",
    check_in_status: false
  },
  {
    name: "Richard Hamilton",
    email_address: "richy0958@gmail.com",
    check_in_status: false
  },
  {
    name: "Margret Jones",
    email_address: "jonies7879@gmail.com",
    check_in_status: true
  }
]);
