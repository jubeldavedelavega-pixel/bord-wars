'use strict';
module.exports = {
  async up(q, S) {
    await q.createTable('question_sets', {
      question_set_id: { type: S.INTEGER, autoIncrement: true, primaryKey: true },
      host_id: { type: S.INTEGER, allowNull: false, references: { model: 'users', key: 'id' }, onDelete: 'CASCADE' },
      title: { type: S.STRING(80), allowNull: false },
      description: { type: S.TEXT, allowNull: false },
      subject: { type: S.STRING(80), allowNull: false },
      grade_level: { type: S.STRING(40), allowNull: false },
      createdAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW },
      updatedAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW }
    });
  },
  async down(q){ await q.dropTable('question_sets'); }
};
