
module.exports = (sequelize, Sequelize) => {
    const Subscription = sequelize.define("Subscription", {
        subscription_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subscription_name: {
            type: Sequelize.STRING
        },
        stripe_subscription_id:{
            type: Sequelize.STRING
        },
        status:{
            type: Sequelize.INTEGER
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "subscriptions"
    });

    Subscription.associate = function(models) {
        Subscription.belongsToMany(models.User, { through: models.UserSubscription, foreignKey: 'subscription_id' });
    }


    return Subscription;
};