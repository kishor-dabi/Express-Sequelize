
module.exports = (sequelize, Sequelize) => {
    const UserSubscription = sequelize.define("UserSubscription", {
        user_subscription_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subscription_start_date: {
            type: Sequelize.DATE 
        },
        subscription_end_date: {
            type: Sequelize.DATE 
        },
        status: {
            type: Sequelize.INTEGER // 1->active, 2->cancelled, 3->expired
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_subscriptions"
    });

    UserSubscription.associate = function(models) {

        // UserSubscription.belongsTo(models.User,{
        //     foreignKey : 'user_id'
        // });

        // UserSubscription.belongsTo(models.UserSubscription,{
        //     foreignKey : 'user_subscription_id'
        // });

        
    }
    return UserSubscription;
};