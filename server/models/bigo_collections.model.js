
module.exports = (sequelize, Sequelize) => {
    const BigoCollection = sequelize.define("BigoCollection", {
        collection_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bigo_CollectionID:{
            type: Sequelize.INTEGER,
            // unique:true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        photo_url: {
            type: Sequelize.STRING
        },
        dump: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "bigo_collections"
    });


    return BigoCollection;
};