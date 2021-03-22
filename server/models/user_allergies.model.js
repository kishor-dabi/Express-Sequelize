
module.exports = (sequelize, Sequelize) => {
    const UserAllergy = sequelize.define("UserAllergy", {
        user_allergy_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_allergies"
    });


    return UserAllergy;
};