var config = {
  "_id": "rs0",
  "version": 1,
  "members": [
      {
          "_id": 1,
          "host": "mongo1:27021",
          "priority": 3
      },
      {
          "_id": 2,
          "host": "mongo2:27022",
          "priority": 2
      },
      {
          "_id": 3,
          "host": "mongo3:27023",
          "priority": 1
      }
  ]
};
rs.initiate(config)