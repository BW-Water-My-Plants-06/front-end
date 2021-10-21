const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let mockUserData = [

  {
    userID: "0",
    username: "Client1",
    password: "password1",
    name: "Client1 Test1",
    email: "Client1@test.com",
    phone: "111-111-1111",
    role: "Client",
  },
  {
    userID: "1",
    username: "Client2",
    password: "password2",
    name: "Client2 Test2",
    email: "Client2@test.com",
    phone: "222-222-2222",
    role: "Client",
  },
  {
    userID: "2",
    username: "Client3",
    password: "password3",
    name: "Client3 Test3",
    email: "Client3@test.com",
    phone: "333-333-3333",
    role: "Client",
  },
  {
    userID: "3",
    username: "Client4",
    password: "password11",
    name: "Client11 Test11",
    email: "Client11@test.com",
    phone: "101-101-1010",
    role: "Client",
  },
  {
    userID: "4",
    username: "Client5",
    password: "password22",
    name: "Client22 Test22",
    email: "Client22@test.com",
    phone: "202-202-2020",
    role: "Client",
  },
  {
    userID: "5",
    username: "Client6",
    password: "password33",
    name: "Client33 Test33",
    email: "Client33@test.com",
    phone: "303-303-3030",
    role: "Client",
  },
];


  
let mockClassData = [
{
    classID: "1",

    name: "Aloe Vera",
    sunlightduration: "6 hours ",
    h20Frequency: "60",
    nickname: "Aloe",
    species: "plant",
    indoor: "yes",
    outdoor: "no",
    pot: "Medium",
    soil: "Alkaline",
    water: "Occasional",
    drainage: "Yes",

  },
  {
    classID: "2",

    name: "Anthurium",
    sunlightduration: "3 hours ",
    h20Frequency: "40",
    nickname: "Anthu",
    species: "plant",
    indoor: "no",
    outdoor: "yes",
    pot: "Large",
    soil: "Acid",
    water: "Frequent",
    drainage: "No",

  },
  {
    classID: "3",

    name: "Bonsai",
    sunlightduration: "4 hours ",
    h20Frequency: "80",
    nickname: "Bon",
    species: "plant",
    indoor: "yes",
    outdoor: "no",
    pot: "Small",
    soil: "Alkaline",
    water: "Very Frequent",
    drainage: "Yes",

  },
  {
    classID: "4",

    name: "Ficus",
    sunlightduration: "10 hours ",
    h20Frequency: "30",
    nickname: "Ficus",
    species: "plant",
    indoor: "no",
    outdoor: "yes",
    pot: "Medium",
    soil: "Acid",
    water: "Rain Water Sufficient",
    drainage: "Yes",

  },
  {
    classID: "5",

    name: "Succulent",
    sunlightduration: "4 hours ",
    h20Frequency: "30",
    nickname: "Succulent",
    species: "plant",
    indoor: "yes",
    outdoor: "no",
    pot: "Small",
    soil: "Alkaline",
    water: "Occasional",
    drainage: "Yes",

  },
  {
    classID: "6",

    name: "Sunflower",
    sunlightduration: "12 hours ",
    h20Frequency: "90",
    nickname: "Sunflower",
    species: "plant",
    indoor: "no",
    outdoor: "yes",
    pot: "Large",
    soil: "Acid",
    water: "Frequent",
    drainage: "No",
  },
];

let userId = mockUserData.length;

app.get("/users", (req, res) => {
  res.send(mockUserData);
});

app.get("/users/:id", (req, res) => {
  const user = mockUserData.filter(
    (user) => `${user.userID}` === req.params.id
  )[0];
  res.status(200).json(user);
});

app.post("/users", (req, res) => {
  if (
    req.body.username === undefined ||
    !req.body.password ||
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.role
  ) {
    res
      .status(400)
      .send("Make sure your request body has all the fields it needs");
  }
  let newUser = req.body;
  newUser["userID"] = userId;
  mockUserData.push(newUser);
  ++userId;
  res.status(201).json(mockUserData);
});

app.put("/users/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the user id");
  if (
    req.body.userID === undefined ||
    !req.body.username ||
    !req.body.password ||
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.role
  ) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  mockUserData = mockUserData.map((user) => {
    if (`${user.userID}` === req.params.id) {
      return req.body;

    }
    return user;
  });
  res.status(200).send(mockUserData);
});

app.delete("/users/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the user id");
  mockUserData = mockUserData.filter(
    (user) => `${user.userID}` !== req.params.id
  );
  res.status(202).send(req.params.id);
});

//   -------------------------------------------------------------------------------------------------------
//   -------------------------------------------------------------------------------------------------------
//   -------------------------------------------------------------------------------------------------------
let classId = mockClassData.length;

app.get("/classes", (req, res) => {
  res.send(mockClassData);
});

app.get("/classes/:id", (req, res) => {
  const item = mockClassData.filter(
    (item) => `${item.classID}` === req.params.id
  )[0];
  res.status(200).json(item);
});

app.post("/classes", (req, res) => {
  if (req.body.className !== undefined) {
    const newClass = req.body;
    newClass["id"] = classId;
    mockClassData.push(newClass);
  }
  ++classId;
  res.status(201).json(mockClassData);
});

app.put("/classes/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the class id");
  if (
    req.body.classID === undefined ||
    !req.body.startDate ||
    !req.body.startTime ||
    !req.body.duration ||
    !req.body.location ||
    !req.body.type ||
    !req.body.intensity ||
    !req.body.capacity ||
    !req.body.instructorID ||
    !req.body.className
  ) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  mockClassData = mockClassData.map((item) => {
    if (`${item.classID}` === req.params.id) {
      return req.body;
    }
    return item;
  });
  res.status(200).send(mockClassData);
});

app.delete("/classes/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the class id");
  mockClassData = mockClassData.filter(
    (item) => `${item.classID}` !== req.params.id
  );
  res.status(202).send(req.params.id);
});

//   -------------------------------------------------------------------------------------------------------
//   -------------------------------------------------------------------------------------------------------
//   -------------------------------------------------------------------------------------------------------

app.get("/", function (req, res) {
  res.send("App is working 👍");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});


