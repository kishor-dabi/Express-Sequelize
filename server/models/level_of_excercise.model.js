
module.exports = (sequelize, Sequelize) => {
    const LevelOfExercise = sequelize.define("LevelOfExercise", {
        level_of_exercise_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        exercise_name: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "level_of_exercises"
    });

    LevelOfExercise.associate = function(models) {
        // LevelOfExercise.hasOne(models.User);
    }


    return LevelOfExercise;
};