const houseDatabase = require("./db.json");
let currentId = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houseDatabase);
  },

  createHouse: (req, res) => {
    const { id, address, price, imageURL } = req.body;

    houseDatabase.push({
      id: currentId,
      address: address,
      price: price,
      imageURL: imageURL,
    });

    currentId++;
    res.status(200).send(houseDatabase);
  },

  updateHouse: (req, res) => {
    const id = +req.params.id
    let houseIndex1;
    for(let i = 0;i < houseDatabase.length;i++) {
        if(houseDatabase[i].id === id) {
            houseIndex1 = i;
        }
    }
    const type = req.body.type
    if (type === 'plus') {
        houseDatabase[houseIndex1].price++
        res.status(200).send(houseDatabase);
    } else {
        houseDatabase[houseIndex1].price--
        res.status(200).send(houseDatabase);
    }
  },

  deleteHouse: (req, res) => {
    const id = +req.params.id;

    const index = houseDatabase.findIndex((house) => house.id === id);
    if (index !== -1) {
      houseDatabase.splice(index, 1);
      res.status(200).send(houseDatabase);
    } else {
      res.status(404).send("House not found");
    }
  },
};
