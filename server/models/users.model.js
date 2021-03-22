
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        user_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING//DATE
        },
        password: {
            type: Sequelize.STRING
        },
        avatar_image_url: {
            type: Sequelize.STRING
        },
        height_id: {
            type: Sequelize.INTEGER
        },
        weight_id: {
            type: Sequelize.INTEGER
        },
        // height_unit: {
        //     type: Sequelize.INTEGER
        // },
        // weight_unit: {
        //     type: Sequelize.INTEGER
        // },
        // level_of_exercise_id: {
        //     type: Sequelize.INTEGER
        // },
        age: {
            type: Sequelize.INTEGER
        },
        status:{
            type: Sequelize.INTEGER
        },
        social_login_id:{
            type: Sequelize.STRING
        },
        signup_type:{
            type: Sequelize.INTEGER // 1=>email 2=>fb 3=>google 4=>apple
        },
        user_type:{
            type: Sequelize.INTEGER // 1=>admin 2=>users
        },
        // meal_collection_id:{

        // }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "users"
    });

  
    User.associate = function(models) {
        User.belongsTo(models.MealCollection, {
          foreignKey: 'meal_collection_id',
          as: 'meal_collection'
        });
        User.belongsTo(models.LevelOfExercise, {
            foreignKey: 'level_of_exercise_id',
            as: 'level_of_exercise'
        });
        User.belongsTo(models.MajorGoalTypes, {
            foreignKey: 'major_goal_type_id',
            as: 'major_goal'
        });
        User.belongsTo(models.Weight, {
            foreignKey: 'goal_weight_id',
            as: 'goal_weight',
            key: "weight_id"
        });
        
        
        User.belongsToMany(models.ProteinSource, { through: models.UserProteinSource, foreignKey: 'user_id' });
        
        User.belongsToMany(models.Recipe, { through: models.UserFavouriteFood, foreignKey: 'user_id' });
        User.belongsToMany(models.Allergies, { through: models.UserAllergy, foreignKey: 'user_id' });
        User.belongsToMany(models.GoalType, { through: models.UserGoalPlan, foreignKey: 'user_id' });
        User.belongsToMany(models.Subscription, { through: models.UserSubscription, foreignKey: 'user_id' });
        User.belongsToMany(models.MealType, { through: models.UserMeal, foreignKey: 'user_id' });
            
    }

    // User.associate = function(models) {
    //     User.belongsToMany(models.Allergies, { through: "UserAllergies" });
    // }    
    return User;
};