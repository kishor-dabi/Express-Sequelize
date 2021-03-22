
module.exports = (sequelize, Sequelize) => {
    const MajorGoalTypes = sequelize.define("MajorGoalTypes", {
        major_goal_type_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        major_goal_name: {
            type: Sequelize.STRING
        },
        goal_icon: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "major_goal_types"
    });

    return MajorGoalTypes;
};