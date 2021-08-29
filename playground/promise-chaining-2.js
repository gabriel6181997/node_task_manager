require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("612b23bbf2a10a519dd0403f")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
