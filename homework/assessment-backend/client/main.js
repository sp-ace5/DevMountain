const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const newComplimentBtn = document.getElementById("newComplimentButton");
const deleteComplimentBtn = document.getElementById("deleteComplimentButton");
const randomBtn = document.getElementById("randomButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const newCompliment = () => {
  const newComplimentInput = document.getElementById("newComplimentInput");
  const newCompliment = newComplimentInput.value;

  axios
    .post("http://localhost:4000/api/compliment/", {
      compliment: newCompliment,
    })
    .then((res) => {
      const message = res.data;
      alert(message);
    });
};

const deleteCompliment = () => {
  const deleteIndexInput = document.getElementById("deleteIndexInput");
  const index = deleteIndexInput.value;

  axios
    .delete(`http://localhost:4000/api/compliment/${index}`)
    .then((res) => {
      const message = res.data;
      alert(message);
    })
    .catch((err) => {
      const errorMessage = err.response.data;
      alert(errorMessage);
    });
};

const getRandomFortuneAndCompliment = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const fortune = res.data;
    axios.get("http://localhost:4000/api/compliment/").then((res) => {
      const compliment = res.data;
      const message = `Fortune: ${fortune}\nCompliment: ${compliment}`;
      alert(message);
    });
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
newComplimentBtn.addEventListener("click", newCompliment);
deleteComplimentBtn.addEventListener("click", deleteCompliment);
randomBtn.addEventListener('click', getRandomFortuneAndCompliment);

