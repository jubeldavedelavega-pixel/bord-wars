'use strict';
module.exports = {
  async up(q, S) {
    await q.createTable('choices', {
      choice_id: { type: S.INTEGER, autoIncrement: true, primaryKey: true },
      question_id: { type: S.INTEGER, allowNull: false, references: { model: 'questions', key: 'question_id' }, onDelete: 'CASCADE' },
      choice_index: { type: S.INTEGER, allowNull: false },
      choice_text: { type: S.STRING(120), allowNull: false },
      createdAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW },
      updatedAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW }
    });
  },
  async down(q){ await q.dropTable('choices'); }
};
