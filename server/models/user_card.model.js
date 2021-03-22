
module.exports = (sequelize, Sequelize) => {
    const UserCard = sequelize.define("UserCard", {
        user_card_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // user_id: {
        //     type: Sequelize.STRING
        // },
        stripe_card_id: {
            type: Sequelize.STRING 
        },
        is_default: {
            type: Sequelize.BOOLEAN 
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_cards"
    });

    UserCard.associate = function(models) {

        UserCard.belongsTo(models.User,{
            foreignKey : 'user_id'
        });
    }
    return UserCard;
};