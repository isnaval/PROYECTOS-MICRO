document
  .getElementById("numVariationsSlider")
  .addEventListener("input", (e) => {
    document.getElementById("numVariationsValue").textContent = e.target.value;
  });

document
  .getElementById("generateVariationsButton")
  .addEventListener("click", async () => {
    const fileInput = document.getElementById("imageInput").files[0];
    const numVariations = document.getElementById("numVariationsSlider").value;
    const note = document.getElementById("noteInput").value;

    if (!fileInput) return alert("Please select an image.");
    if (note.length > 50) return alert("Note must be 50 characters or less.");

    const formData = new FormData();
    formData.append("image", fileInput);
    formData.append("numVariations", numVariations);
    formData.append("note", note);

    try {
      const response = await fetch("http://localhost:3000/api/images/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      alert(result.message || "Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image.");
    }
  });

document
  .getElementById("filterImagesButton")
  .addEventListener("click", async () => {
    const filterBy = document.getElementById("filterBy").value;
    const filterValue = document.getElementById("filterValue").value;

    let query = "";
    if (filterBy === "date") query = `date=${filterValue}`;
    else if (filterBy === "note") query = `note=${filterValue}`;
    else if (filterBy === "name") query = `name=${filterValue}`;

    try {
      const response = await fetch(`http://localhost:3000/api/images?${query}`);
      const images = await response.json();

      const filteredResultsContainer = document.getElementById(
        "filteredResultsContainer"
      );
      filteredResultsContainer.innerHTML = ""; // Clear previous results

      images.forEach((image) => {
        const imageCard = document.createElement("div");
        imageCard.className = "image-card";
        imageCard.style.display = "flex"; // Flexbox for horizontal layout
        imageCard.style.alignItems = "center"; // Center content vertically
        imageCard.style.justifyContent = "space-between"; // Space between text and image

        const textContent = document.createElement("div");
        textContent.innerHTML = `
          <p><strong>Original Image:</strong> ${image.originalName}</p>
          <p><strong>Note:</strong> ${image.note || "N/A"}</p>
          <p><strong>Date:</strong> ${image.uploadedAt}</p>
        `;

        const imgElement = document.createElement("img");
        imgElement.src = `http://localhost:3000/uploads/${image.originalName}`;
        imgElement.alt = image.originalName;
        imgElement.style.width = "100px";
        imgElement.style.height = "100px";
        imgElement.style.borderRadius = "8px";
        imgElement.style.objectFit = "cover";
        imgElement.style.marginLeft = "20px"; // Add spacing

        imageCard.appendChild(textContent);
        imageCard.appendChild(imgElement);
        filteredResultsContainer.appendChild(imageCard);
      });
    } catch (error) {
      console.error("Error fetching filtered images:", error);
      alert("Error fetching filtered images.");
    }
  });
