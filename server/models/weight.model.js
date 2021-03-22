
module.exports = (sequelize, Sequelize) => {
    const Weight = sequelize.define("Weight", {
        weight_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        weight: {
            type: Sequelize.STRING
        },
        unit: {
            type: Sequelize.STRING // kg and lbs
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "weights"
    });


    return Weight;
};