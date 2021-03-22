
module.exports = (sequelize, Sequelize) => {
    const MealCollection = sequelize.define("MealCollection", {
        meal_collection_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        meal_collection_name: {
            type: Sequelize.STRING
        },
        meal_type_logo_url:{
            type: Sequelize.STRING
        },
        bigo_collections:{
            type: Sequelize.STRING // comma saperated IDs
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "meal_collections"
    });


    MealCollection.associate = function(models) {
        // MealCollection.hasOne(models.User);
    }
    

    return MealCollection;
};