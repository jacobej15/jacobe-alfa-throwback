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

// Picks a random tree
function greetRandomTree() {
  var pick = trees[Math.floor(Math.random() * trees.length)];

  console.log('Your daily tree is ' + pick.name);

  return pick;
}

// Run when the page is ready
document.addEventListener('DOMContentLoaded', function () {
  console.log('Tree page loaded!');

  // Fill the tree table
  var tableBody = document.getElementById('tree-table-body');

  trees.forEach(function (tree) {
    var row = document.createElement('tr');

    row.innerHTML =
      '<td>' + tree.name + '</td>' +
      '<td>' + tree.taste + '</td>' +
      '<td>' + tree.wood + '</td>';

    tableBody.appendChild(row);
  });

  // Pick a random tree
  greetRandomTree();
});
