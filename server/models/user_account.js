
module.exports = (sequelize,DataTypes) => {
    let UserAccount = sequelize.define('UserAccount',{
        user_account_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // user_id:{
        // 	type:DataTypes.INTEGER,
        	
        // }

        // email : DataTypes.STRING
    },
     {
        sequelize,
        paranoid: true,

        // If you want to give a custom name to the deletedAt column
        deletedAt: 'deletedAt'
    });

    // User.associate = function(models) {

    //     User.belongsToMany(models.Account, { through: UserAccount })

    //     // User.hasMany(models.Post,{
    //     //     foreignKey : 'userId',
    //     //     as : 'posts'
    //     // });
    // };
    return UserAccount;
}