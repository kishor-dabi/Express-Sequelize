
module.exports = (sequelize, Sequelize) => {
    const UserFavouriteFood = sequelize.define("UserFavouriteFood", {
        favourite_food_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },


    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_favourite_foods"
    });

    // UserFavouriteFood.associate = function(models) {

    //     UserFavouriteFood.hasMany(models.User,{
    //         foreignKey: 'user_id',
    //         as:'users'

    //     });

    // }    


    return UserFavouriteFood;
};