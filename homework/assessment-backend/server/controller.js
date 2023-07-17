const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

const fortune = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way."]

module.exports = {
    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
        res.status(200).send(randomFortune);
    },

    newCompliment: (req, res) => {
        const { compliment } = req.body;
        compliments.push(compliment);
        res.status(200).send("Compliment added successfully!")
    },

    deleteCompliment: (req, res) => {
        const { index } = req.params;
        if (index >= 0 && index < compliments.length) {
            compliments.splice(index, 1);
            res.status(200).send("Compliment deleted successfully!");
        } else {
            res.status(404).send("Compliment not found");
        }
    }
}