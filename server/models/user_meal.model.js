
module.exports = (sequelize, Sequelize) => {
    const UserMeal = sequelize.define("UserMeal", {
        user_meal_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        meal_count: {
            type: Sequelize.INTEGER 
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_meals"
    });

    return UserMeal;
};