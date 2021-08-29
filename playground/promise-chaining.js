require("../src/db/mongoose");
const User = require("../src/models/user");

//612b2d18acad16fa471cbcb2
// User.findByIdAndUpdate("612b3c29b9097e3b960af460", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id,{age});
  const count = await User.countDocuments({age});
  return count;
};

updateAgeAndCount("612b3c29b9097e3b960af460", 2).then((count)=> {
  console.log(count);
}).catch((error)=> {
  console.log(error)
})
