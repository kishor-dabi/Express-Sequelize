
module.exports = (sequelize,DataTypes) => {
    let User = sequelize.define('User',{
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email : DataTypes.STRING
    });

    User.associate = function(models) {

        User.belongsToMany(models.Account, { through: models.UserAccount, foreignKey: 'user_id', as:"accounts" });

        // User.hasMany(models.Post,{
        //     foreignKey : 'userId',
        //     as : 'posts'
        // });
    };
    return User;
}