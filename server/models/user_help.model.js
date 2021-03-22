
module.exports = (sequelize, Sequelize) => {
    const UserHelp = sequelize.define("UserHelp", {
        help_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING//DATE
        },
        description: {
            type: Sequelize.STRING
        },
        help_reply: {
            type: Sequelize.STRING
        },
       
        status:{
            type: Sequelize.INTEGER //1->open, 2->resolved
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_helps"
    });

  
    UserHelp.associate = function(models) {
        UserHelp.belongsTo(models.User, {
          foreignKey: 'user_id'
        });
        UserHelp.belongsTo(models.HelpCategory, {
            foreignKey: 'help_category_id',
        });
       
    }
   
    return UserHelp;
};