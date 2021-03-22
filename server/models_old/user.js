
module.exports = (sequelize,DataTypes) => {
    let User = sequelize.define('User',{
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email : {
            type: DataTypes.STRING,
            unique: true
        },
        password:{
            type:DataTypes.STRING,      
        },
        first_name:{
            type:DataTypes.STRING,   
        },
        last_name:{
            type:DataTypes.STRING,   
        },
        gender:{
            type:DataTypes.INTEGER,// 1 => male 2 => female   
        }
    },
    {
        sequelize,
        paranoid: true,

        // If you want to give a custom name to the deletedAt column
        deletedAt: 'deletedAt'
    }
    );

    User.associate = function(models) {

        User.belongsToMany(models.Account, { through: models.UserAccount, foreignKey: 'user_id', as:"accounts" });

        // User.hasMany(models.Post,{
        //     foreignKey : 'userId',
        //     as : 'posts'
        // });
    };
    return User;
}