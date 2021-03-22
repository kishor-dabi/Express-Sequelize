
module.exports = (sequelize, Sequelize) => {
    const MasterPolicy = sequelize.define("MasterPolicy", {
        master_policy_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        policy_type: {
            type: Sequelize.INTEGER // 1=>terms & conditions 2=>privacy policy etc
        },
        policy_text:{
            type: Sequelize.STRING
        },
        status:{
            type: Sequelize.INTEGER
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "master_policies"
    });


    return MasterPolicy;
};