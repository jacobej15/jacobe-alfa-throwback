// Tree data
var trees = [
  {
    name: 'Coconut',
    taste: 'Sweet',
    wood: 'Timber',
    image: 'Image/coconut-palm-points-to-sea-1024x768.webp'
  },
  {
    name: 'Magnolia',
    taste: 'Flower',
    wood: 'Hardwood',
    image: 'Image/magnolia-trees4.jpg'
  },
  {
    name: 'Maple',
    taste: 'Sweet',
    wood: 'Light HW',
    image: 'Image/american-red-maple-1.webp'
  }
];

function favoriteTreeSelected() {

var favoriteTree =
document.getElementById("favorite-tree").value;

if (favoriteTree !==""){


alert(
  "Thanks! Great choice! " +
  favoriteTree + " is a great tree!"
);


}
}

// Run after the page loads
document.addEventListener("DOMContentLoaded", function () {

console.log("Tree page loaded!");

});
