
module.exports = (sequelize, Sequelize) => {
    const UserGoalPlan = sequelize.define("UserGoalPlan", {
        user_goal_plan_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // user_id: {
        //     type: Sequelize.STRING
        // },
        user_goal_name: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER 
        }, 
        goal_date: {
            type: Sequelize.DATE 
        },
        goal_time: {
            type: Sequelize.TIME 
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_goal_plans"
    });

    return UserGoalPlan;
};