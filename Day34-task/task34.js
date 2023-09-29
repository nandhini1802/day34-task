// Find all the topics and tasks which are thought in the month of October
db.tasks.find({"assignedDate.month": 8},{"name":1, _id: 0});
db.topics.find({"classDate.month": 8},{topic: 1, _id:0});

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({"Date.date": {$gte: 15, $lte: 31},"Date.month": {$gte: 8, $lte: 9}},{"CompanyName":1, _id: 0});

// Find all the company drives and students who are appeared for the placement.
db.users.find({id: {$in: db.company_drives.find({"CompanyName": "zoho"},{"appearedStudents": 1, _id:0}).appearedStudents}},{"name":1, _id: 0});
db.users.find({id: {$in: db.company_drives.find({"CompanyName": "tcs"},{"appearedStudents": 1, _id:0}).appearedStudents}},{"name":1, _id: 0});
db.users.find({id: {$in: db.company_drives.find({"CompanyName": "wipro"},{"appearedStudents": 1, _id:0}).appearedStudents}},{"name":1, _id: 0});

// Find the number of problems solved by the user in codekata
db.codekata.find({id: "3"},{"problemCode.solved":1, _id: 0});

// Find all the mentors with who has the mentee's count more than 15
db.mentors.find({"mentesCount": {$gte: 15}}, {"mentorName":1, _id:0});

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.topics.find({"classDate.date": {$gt: 14},"classDate.month": {$eq: 8}}, {"absent": 1, "topic": 1, _id: 0})
db.tasks.find({"assignedDate.date": {$gt: 14},"assignedDate.month": {$eq: 8}}, {"notSubmitted": 1, "name": 1, _id: 0})