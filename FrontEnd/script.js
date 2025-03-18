async function fetchSuggestions() {
    let query = document.getElementById("search-input").value;
    let suggestionsBox = document.getElementById("suggestions");

    if (query.length < 2) {
        suggestionsBox.style.display = "none";
        return;
    }

    try {
        let response = await fetch(`http://localhost:8081/search?query=${query}`);
        let suggestions = await response.json();

        suggestionsBox.innerHTML = "";
        suggestionsBox.style.display = "block";

        suggestions.forEach(suggestion => {
            let item = document.createElement("div");
            item.className = "suggestion-item";
            item.innerText = suggestion;
            item.onclick = () => {
                document.getElementById("search-input").value = suggestion;
                suggestionsBox.style.display = "none";
            };
            suggestionsBox.appendChild(item);
        });
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}