const router = require("express").Router();
const characterModel = require("./character");
const data = require('./seeds/data.json');

const get = (req, res) => {
    characterModel.find()
        .then(characters => {
            if(characters.length === 0 ){
                res.status(404).json({Message: "characters not found"});
            } else {
                res.status(200).json(characters);
            }
        })
        .catch(error => {
            res.status(500).json({Message: error});
        });
};

const post = (req, res) => {
    const { firstName, lastName, email, password, bio } = req.body;
    if(!firstName || !lastName || !email || !password || !bio){
        res.status(401).json({Message: "Character must have firstName, lastName, email, password and bio"})
    } 
    else {
        characterModel.create({firstName, lastName, email, password, bio})
            .then(char => {
                if(!char) {
                    res.status(404).json({Message: "Char not created"})
                }
                else {
                    res.status(201).json(char);
                }
            })
            .catch(error => {
                res.status(500).json({Message: error.message});
            })

    }
}

const getId = (req, res) => {
    const { id } = req.params;
    if(!id){
        res.status({Error: 'the specified ID does not exist in our database'});
    } else {
        characterModel.findById(id)
            .then(char => {
                console.log(id);
                console.log(char);
                res.status(200).json(char);
            })
            .catch(error => {
                res.status(500).json({Error: error.message});
            })
    }
}


router.route("/")
    .get(get)
    .post(post);



module.exports = router;