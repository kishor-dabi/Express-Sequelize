
module.exports = (sequelize, Sequelize) => {
    const DislikeFood = sequelize.define("DislikeFood", {
        food_you_dislike_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        food_name: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "dislike_foods"
    });

    

    return DislikeFood;
};