const sequelize = require('../config/connection.js');
const { User } = require('../models/User.js');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }).catch(err => console.error('Error syncing database', err));

  console.log(sequelize);
  console.log(User);
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
