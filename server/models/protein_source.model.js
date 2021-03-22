
module.exports = (sequelize, Sequelize) => {
    const ProteinSource = sequelize.define("ProteinSource", {
        protein_source_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        protein_source_image_url: {
            type: Sequelize.STRING
        },
        protein_source_name: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "protein_sources"
    });

    ProteinSource.associate = function(models) {

        ProteinSource.hasMany(models.MealCollection,{
            foreignKey: 'meal_collection_id',
            as:'meal_collections'

        });

        ProteinSource.belongsToMany(models.User, { through: models.UserProteinSource, foreignKey: 'protein_source_id' });

    }    


    return ProteinSource;
};