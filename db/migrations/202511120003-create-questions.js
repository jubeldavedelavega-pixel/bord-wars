'use strict';
module.exports = {
  async up(q, S) {
    await q.createTable('questions', {
      question_id: { type: S.INTEGER, autoIncrement: true, primaryKey: true },
      question_set_id: { type: S.INTEGER, allowNull: false, references: { model: 'question_sets', key: 'question_set_id' }, onDelete: 'CASCADE' },
      text: { type: S.TEXT, allowNull: false },
      type: { type: S.STRING(20), defaultValue: 'multiple_choice' },
      correct_index: { type: S.INTEGER, allowNull: false },
      time_limit_sec: { type: S.INTEGER, defaultValue: 20 },
      createdAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW },
      updatedAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW }
    });
  },
  async down(q){ await q.dropTable('questions'); }
};
