import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const employees = [];

function showMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");
  rl.question("\nChoose an Option: ", handleInput);
}

function handleInput(choice) {
  switch (choice) {
    case "1":
      rl.question("\nEnter employee name: ", (name) => {
        rl.question("\nEnter employee Id: ", (id) => {
          employees.push({ id, name });
          console.log(`\nEmployee ${name} (ID: ${id})`);
          showMenu();
        });
      });
      break;
    case "2":
      console.log("\nEmployee List:\n");
      employees.forEach((emp, index) => {
        console.log(`${index + 1}. ID: ${emp.id}, NAME: ${emp.name}`);
      });
      showMenu();
      break;
    case "3":
      rl.question("\nEnter employee ID to remove: ", (id) => {
        employees.forEach((emp, idx) => {
          if (emp.id === id) {
            employees.splice(idx, 1);
            console.log(`\nEmployee (ID: ${id}) removed.`);
          }
          showMenu();
        });
      });
      break;
    case "4":
      rl.close();
      break;
    default:
      console.log("\nInvalid Option.");
      showMenu();
  }
}

showMenu();
