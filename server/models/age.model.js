
module.exports = (sequelize, Sequelize) => {
    const Age = sequelize.define("Age", {
        age_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        age: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "ages"
    });


    return Age;
};