fetch("/endpoint")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("apiData").textContent = data.message;
  })
  .catch((err) => {
    document.getElementById("apiData").textContent = "Error fetching data";
    console.error(err);
  });
