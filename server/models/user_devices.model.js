
module.exports = (sequelize, Sequelize) => {
    const UserDevice = sequelize.define("UserDevice", {
        user_device_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        token_id: {
            type: Sequelize.STRING
        },
        token: {
            type: Sequelize.STRING
        },
        device_name: {
            type: Sequelize.STRING
        },
        os_version: {
            type: Sequelize.STRING
        },
        app_version: {
            type: Sequelize.STRING
        },
        model_name: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER
        }

    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_devices"
    });

    UserDevice.associate = function(models) {

        UserDevice.hasMany(models.User,{
            foreignKey: 'user_id',
            as:'users'

        });

    }    


    return UserDevice;
};