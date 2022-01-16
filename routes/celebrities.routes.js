const router = require("express").Router();
const async = require('hbs/lib/async');
const celebrityModel = require("../models/celebrity.model")


// GET - create one celebrety (form)
router.get ("/create", (req, res, next) => { 
    res.render("celebrities/new-celebrity");
});

//  POST - create celebrity
router.post("/create", async (req, res, next) => {
    const newCelebrity = {...req.body};
    try {
        await celebrityModel.create(newCelebrity);
        res.redirect("/celebrities");
      } catch (err) {
        res.render("celebrities/new-celebrity");
      }
  //console.log("celebrity create", req.body)
}); 

// GET - show all celebrities
const celebrities = [
  { name: "Tom Cruise", 
    occupation: "actor",
    catchPhrase: "Someday. That's a dangerous word. It's really just a code for never." 
  }, 
  { name: "Bradly Copper", 
    occupation: "actor",
    catchPhrase: "All you got to do is trust me. That's all you got to do." 
  }, 
  { name: "Leonardo Di Capario", 
    occupation: "actor",
    catchPhrase:"As long as you can still grab a breath, you fight. You breathe... keep breathing."
  }
];

router.get("/", (req, res, next) => {
    celebrityModel.find()
    .then((celebrities) => res.render("celebrities/celebrities.hbs", {celebrities}))
    .catch((err) => console.error(err));
});

module.exports = router;