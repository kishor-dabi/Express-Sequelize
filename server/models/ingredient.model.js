
module.exports = (sequelize, Sequelize) => {
    const Ingredient = sequelize.define("Ingredient", {
        ingredient_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bigo_IngredientID: {
            type: Sequelize.INTEGER
        },
        bigo_DisplayIndex:{
            type: Sequelize.STRING
        },
        bigo_Name:{
            type: Sequelize.STRING
        },
        bigo_Quantity:{
            type: Sequelize.INTEGER
        },
        bigo_Unit:{
            type: Sequelize.STRING
        },
        dump:{
            type: Sequelize.STRING
        },


        status:{
            type: Sequelize.INTEGER
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "ingredients"
    });

    Ingredient.associate = function(models) {
        Ingredient.belongsToMany(models.Recipe, { through: models.RecipeIngredient, foreignKey: 'ingredient_id' });
    }

    return Ingredient;
};