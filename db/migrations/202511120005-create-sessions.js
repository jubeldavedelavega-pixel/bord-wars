'use strict';
module.exports = {
  async up(q, S) {
    await q.createTable('sessions', {
      session_id: { type: S.INTEGER, autoIncrement: true, primaryKey: true },
      host_id: { type: S.INTEGER, allowNull: false, references: { model: 'users', key: 'id' } },
      question_set_id: { type: S.INTEGER, allowNull: false, references: { model: 'question_sets', key: 'question_set_id' } },
      code: { type: S.CHAR(6), allowNull: false, unique: true },
      status: { type: S.STRING(20), defaultValue: 'waiting' },
      current_round: { type: S.INTEGER, defaultValue: 0 },
      current_question_id: { type: S.INTEGER, allowNull: true },
      winner_team: { type: S.CHAR(1), allowNull: true },
      started_at: { type: S.DATE, allowNull: true },
      ended_at: { type: S.DATE, allowNull: true },
      createdAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW },
      updatedAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW }
    });
  },
  async down(q){ await q.dropTable('sessions'); }
};
