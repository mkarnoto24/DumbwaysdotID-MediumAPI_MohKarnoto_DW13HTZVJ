'use strict';
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    is_published: DataTypes.INTEGER,
    is_archived: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {});
  articles.associate = function (models) {
    articles.belongsTo(models.categories, {
      as: 'categoryId',
      foreignKey: 'category_id'
    })
    articles.belongsTo(models.users, {
      as: 'authorId',
      foreignKey: 'author_id'
    })
    articles.hasMany(models.comment, {
      as: 'commentId',
      foreignKey: 'article_id'
    })

    // associations can be defined here
  };
  return articles;
};