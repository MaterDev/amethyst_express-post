const express = require("express");
const router = express.Router();

// A variable to tracks some server-side state
let catPoints = 10;

// Variable to track past attempts
const pastAttempts = [];

// Default route
router.get("/", (req, res) => {
  res.send(`"Hello World" in Cat is, "mrow meow mu mew"`);
});

// A sub-path to get cat status
router.get("/checkCat", (req, res) => {

    if(catPoints > 4) {
        catFeeling = `🐈‍⬛🐈‍⬛ HAPPY CAT 🐈‍⬛🐈‍⬛`;
    }
    else {
        catFeeling = `😾 SAD CAT 😾`;
    }

    const catStatus = {
        catPoints,
        catFeeling
    }

    res.send(catStatus)
});

// A sub-path to get history
router.get("/pastAttempts", (req, res) => {
  res.send(pastAttempts);
});

router.post("/feed", (req, res) => {
  // Parsed data from our post request
  const body = req.body;
  console.log("POST body is:", body);

  // Update pastAttempts[] with lastest food attempt
  pastAttempts.push(body.food);
  console.log('All attempts:', pastAttempts)

  try {
    // Condition to change state server-side
  if (body.food === "🧆") {
    catPoints = 10;

    /*
    The HTTP 201 Created success status
    response code indicates that the request has
    succeeded and has led to the creation of a resource.
    */
    res.sendStatus(201);
  } else {
    catPoints -= 1;
    res.sendStatus(201);
  }
    
  } catch (error) {
    res.send(500);
  }
  
});

// Router must be exported, or else the module `require` in server.js will throw an error
module.exports = router;
