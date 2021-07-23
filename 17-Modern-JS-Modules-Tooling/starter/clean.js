let budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const limits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const add = function (value,
  description,
  user = "jonas") {
  user = user.toLowerCase();

  const limit  = limits[user] ? limits[user] : 0 

console.log(limit)
  if (value <= limit) {
    budget.push({ value: -value, description: description, user: user });
  }
};
add(10, 'Pizza 🍕');
add(100, 'Going to movies 🍿', 'Matilda');
add(200, 'Stuff', 'Jay');
console.log(budget);

const check = function () {
  for (let el of budget) {
    let lim;
    if (limits[el.user]) {
      lim = limits[el.user];
    } else {
      lim = 0;
    }

    if (el.value < -lim) {
      el.flag = 'limit';
    }
  }
};
check();

console.log(budget);

const bigExpenses = function (limit) {
  const output = '';
  for (let el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};