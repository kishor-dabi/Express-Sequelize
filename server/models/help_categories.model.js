
module.exports = (sequelize, Sequelize) => {
    const HelpCategory = sequelize.define("HelpCategory", {
        help_categorie_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER //
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "help_categories"
    });


    return HelpCategory;
};