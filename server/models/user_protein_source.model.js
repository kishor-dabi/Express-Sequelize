

module.exports = (sequelize, Sequelize) => {
    const UserProteinSource = sequelize.define("UserProteinSource", {
        user_protein_source_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_protein_sources"
    });

    // UserProteinSource.associate = function(models) {


    //     UserProteinSource.hasMany(models.User,{
    //         foreignKey: 'user_id',

    //     });

    //     UserProteinSource.hasMany(models.User,{
    //         foreignKey: 'user_id', 
    //     });
    // }    

    return UserProteinSource;
};