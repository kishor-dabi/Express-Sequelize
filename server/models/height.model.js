
module.exports = (sequelize, Sequelize) => {
    const Height = sequelize.define("Height", {
        height_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        height: {
            type: Sequelize.STRING
        },
        unit: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "heights"
    });


    return Height;
};