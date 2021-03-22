

module.exports = (sequelize,DataTypes) => {
    let Account = sequelize.define('Account',{
    	account_id:{
    		type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
    	},
        name : DataTypes.STRING
    },
     {
        sequelize,
        paranoid: true,

        // If you want to give a custom name to the deletedAt column
        deletedAt: 'deletedAt'
    }
    );



    Account.associate = function(models) {
        // User.hasMany(models.Post,{
        //     foreignKey : 'userId',
        //     as : 'posts'
        // });
        Account.belongsToMany(models.User, { through: models.UserAccount, foreignKey: 'account_id' });

    };
    return Account;
}