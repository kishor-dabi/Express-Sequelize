
module.exports = (sequelize, Sequelize) => {
    const UserPayment = sequelize.define("UserPayment", {
        payment_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        payment_amount: {
            type: Sequelize.STRING
        },
        payment_date: {
            type: Sequelize.DATE 
        },
        payment_status: {
            type: Sequelize.INTEGER 
        },
        payment_mode: {
            type: Sequelize.INTEGER // 1->card, 2->Apple Pay, 3->google pay 
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_payments"
    });

    UserPayment.associate = function(models) {

        UserPayment.belongsTo(models.User,{
            foreignKey : 'user_id'
        });

        UserPayment.belongsTo(models.UserSubscription,{
            foreignKey : 'user_subscription_id'
        });

        
    }
    return UserPayment;
};