
module.exports = (sequelize, Sequelize) => {
    const GoalType = sequelize.define("GoalType", {
        goal_type_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        goal_name: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "goal_types"
    });

    GoalType.associate = function(models) {

        GoalType.belongsToMany(models.User, { through: models.UserGoalPlan, foreignKey: 'goal_type_id' });
    }

    return GoalType;
};