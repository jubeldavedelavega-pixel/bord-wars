'use strict';
module.exports = {
  async up(q, S) {
    await q.createTable('answers', {
      answer_id: { type: S.INTEGER, autoIncrement: true, primaryKey: true },
      session_player_id: { type: S.INTEGER, allowNull: false, references: { model: 'session_players', key: 'session_player_id' }, onDelete: 'CASCADE' },
      question_id: { type: S.INTEGER, allowNull: false, references: { model: 'questions', key: 'question_id' } },
      round_number: { type: S.INTEGER, allowNull: false },
      choice_id: { type: S.INTEGER, allowNull: false, references: { model: 'choices', key: 'choice_id' } },
      is_correct: { type: S.BOOLEAN, allowNull: false },
      answered_at: { type: S.DATE, allowNull: false, defaultValue: S.NOW },
      createdAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW },
      updatedAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW }
    });
    await q.addConstraint('answers', {
      fields: ['session_player_id', 'question_id', 'round_number'],
      type: 'unique',
      name: 'uq_one_answer'
    });
  },
  async down(q){ await q.dropTable('answers'); }
};
