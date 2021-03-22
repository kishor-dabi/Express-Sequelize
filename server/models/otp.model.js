
module.exports = (sequelize, Sequelize) => {
    const OTP = sequelize.define("OTP", {
        otp_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        otp: {
            type: Sequelize.STRING 
        },
        status: {
            type: Sequelize.INTEGER 
        }, 
        otp_for: {
            type: Sequelize.INTEGER // 1=>signup 2=>forgot password
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "otps"
    });

    return OTP;
};