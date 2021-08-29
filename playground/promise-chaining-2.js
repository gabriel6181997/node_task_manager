require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("612b23bbf2a10a519dd0403f")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count
}

deleteTaskAndCount("612b2d9f8d49ab8a21427fb2").then((count)=> {
  console.log(count)
}).catch((error)=> {
  console.log(error)
})
