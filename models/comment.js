'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    is_published: DataTypes.INTEGER,
    is_archived: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT//
  }, {});
  comment.associate = function (models) {
    // associations can be defined here!
    comment.belongsTo(models.articles, {
      as: 'articleId',
      foreignKey: 'article_id'
    })

  };
  return comment;
};