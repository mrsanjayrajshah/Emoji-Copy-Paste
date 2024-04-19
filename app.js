const emojiListEl = document.querySelector(".emoji-list");

  async function main() {
  // Access emoji data from emojis.js
     const emojisData = allEmojis;

     emojiListEl.innerHTML = emojisData.map((emoji) => emojiHTML(emoji)).join("");
  }

  main();

// Making HTML code more dynamic for each object in the array
function emojiHTML(emoji) {
    return `
    <div class="emoji-card">
        <div id="${emoji.codePoint}" onclick="copyContent(event)">${emoji.character}</div>
    </div>`;
}

// Copy emoji to keyboard when user clicks
function copyContent(event) {
    let copiedText = event.target.innerText;

    navigator.clipboard
        .writeText(copiedText)
        .then(() => {
            alert("Copied! " + copiedText);
        })
        .catch(() => {
            alert("Something went wrong.");
        });
}

// Using search value to render suitable emojis associated to keywords
async function onSearchChange(event) {
    const searchResult = event.target.value;
    renderPosts(searchResult);
}

// Displaying results of search
// https://emoji-api.com/emojis?search=${searchResult}&access_key=138b962caecb4ec84d9cc4b9b3d7cc59a8f56fce
// async function renderPosts(searchResult) {
//     const emojiResults = await fetch(
//         `https://emoji-api.com/emojis?search=${searchResult}&access_key=138b962caecb4ec84d9cc4b9b3d7cc59a8f56fce`
//     );
//     const emojiData = await emojiResults.json();
//     emojiListEl.innerHTML = emojiData.map((emoji) => emojiHTML(emoji)).join("");
// }

  

async function searchCategory(category) {
    try {
      // Create a path to the category's JavaScript file
      const categoryPath = `./categories/${category}.js`;
  
      // Use import() to dynamically import the emoji data module
      const emojiModule = await import(categoryPath);
  
      // Access the emoji data from the imported module (assuming it's exported as 'emojis')
      const emojiData = emojiModule.emojis;
  
      emojiListEl.innerHTML = emojiData.map((emoji) => emojiHTML(emoji)).join("");
    } catch (error) {
      console.error('Error fetching category:', error);
      // Handle errors like non-existent categories or import failures
    }
  }
  

// Toggle Menu
  function toggleMenu() {
    const navLinks = document.querySelector('.nav__links');
    navLinks.classList.toggle('active');
}