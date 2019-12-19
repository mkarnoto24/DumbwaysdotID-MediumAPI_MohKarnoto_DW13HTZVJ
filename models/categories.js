'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,//
    is_published: DataTypes.INTEGER,
    is_archived: DataTypes.INTEGER
  }, {});
  categories.associate = function (models) {
    // associations can be defined here!
    categories.hasMany(models.articles, {
      as: 'articlesId',
      foreignKey: 'category_id'
    })
  };
  return categories;
};