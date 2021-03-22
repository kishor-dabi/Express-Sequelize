
module.exports = (sequelize, Sequelize) => {
    const UserMealRecipe = sequelize.define("UserMealRecipe", {
        user_meal_plan_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_meal_recipies"
    });

    // UserMealRecipe.associate = function(models) {
    //     UserMealRecipe.belongsToMany(models.UserMealRecipe, { through: models.UserMeal, foreignKey: 'user_meal_plan_id' });
    // }

    return UserMealRecipe;
};