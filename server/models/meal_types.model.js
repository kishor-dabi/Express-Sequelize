
module.exports = (sequelize, Sequelize) => {
    const MealType = sequelize.define("MealType", {
        meal_type_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        meal_type_name: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "meal_types"
    });

    MealType.associate = function(models) {
        MealType.belongsToMany(models.User, { through: models.UserMeal, foreignKey: 'meal_type_id' });
    }

    return MealType;
};