
module.exports = (sequelize, Sequelize) => {
    const RecipeIngredient = sequelize.define("RecipeIngredient", {
        recipe_ingredient_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status:{
            type: Sequelize.INTEGER
        }
        
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "recipe_ingredients"
    });


    return RecipeIngredient;
};