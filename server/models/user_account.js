
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