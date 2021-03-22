

module.exports = (sequelize, Sequelize) => {
    const UserMealPlan = sequelize.define("UserMealPlan", {
        user_meal_plan_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        meal_count:{
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_meal_plans"
    });

    UserMealPlan.associate = function(models) {
        UserMealPlan.belongsToMany(models.Recipe, { through: models.UserMealRecipe, foreignKey: 'user_meal_plan_id' });
    }

    return UserMealPlan;
};