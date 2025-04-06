fetch("/endpoint")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("apiData");

    // Clear any existing content
    container.innerHTML = "";

    // Create a list element
    const ul = document.createElement("ul");

    // Assuming data is cleanedTitles (an array of strings)
    data.forEach((title) => {
      const li = document.createElement("li");
      li.textContent = title;
      ul.appendChild(li);
    });

    // Append the list to the container
    container.appendChild(ul);
  })
  .catch((err) => {
    document.getElementById("apiData").textContent = "Error fetching data";
    console.error(err);
  });
