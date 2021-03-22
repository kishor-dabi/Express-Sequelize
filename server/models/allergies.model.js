
module.exports = (sequelize, Sequelize) => {
    const Allergies = sequelize.define("Allergies", {
        allergy_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        allergy_name: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "allergies"
    });

    Allergies.associate = function(models) {
        Allergies.belongsToMany(models.User, { through: models.UserAllergy, foreignKey: 'allergy_id' });
    }

    return Allergies;
};