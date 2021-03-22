
module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("Recipe", {
        recipe_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bigo_RecipeID:{
            type: Sequelize.INTEGER,
            // unique:true
        },
        recipe_name: {
            type: Sequelize.STRING
        },
        recipe_description: {
            type: Sequelize.STRING
        },
        bigo_ImageURL: {
            type: Sequelize.STRING
        },
        ingredients: {
            type: Sequelize.STRING
        },
        steps: {
            type: Sequelize.STRING
        },
        nutritions: {
            type: Sequelize.STRING
        },
        bigo_collectionID: {
            type: Sequelize.STRING
        },
        dump: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "recipes"
    });

    Recipe.associate = function(models) {
    
        Recipe.belongsToMany(models.User, { through: models.UserFavouriteFood, foreignKey: 'recipe_id' });
    
        Recipe.belongsToMany(models.UserMealPlan, { through: models.UserMealRecipe, foreignKey: 'recipe_id' });
        
        Recipe.belongsToMany(models.Ingredient, { through: models.RecipeIngredient, foreignKey: 'recipe_id' });
    
    }
    


    return Recipe;
};