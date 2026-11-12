'use strict';
module.exports = {
  async up(q, S) {
    await q.createTable('session_players', {
      session_player_id: { type: S.INTEGER, autoIncrement: true, primaryKey: true },
      session_id: { type: S.INTEGER, allowNull: false, references: { model: 'sessions', key: 'session_id' }, onDelete: 'CASCADE' },
      user_id: { type: S.INTEGER, allowNull: true, references: { model: 'users', key: 'id' } },
      nickname: { type: S.STRING(20), allowNull: false },
      team: { type: S.CHAR(1), allowNull: true },
      row_position: { type: S.INTEGER, defaultValue: 1 },
      column_position: { type: S.INTEGER, defaultValue: 1 },
      correct_answers: { type: S.INTEGER, defaultValue: 0 },
      wrong_answers: { type: S.INTEGER, defaultValue: 0 },
      movement_available: { type: S.BOOLEAN, defaultValue: false },
      finished: { type: S.BOOLEAN, defaultValue: false },
      finished_at: { type: S.DATE, allowNull: true },
      createdAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW },
      updatedAt: { type: S.DATE, allowNull: false, defaultValue: S.NOW }
    });
    await q.addConstraint('session_players', {
      fields: ['session_id', 'user_id'],
      type: 'unique',
      name: 'uq_one_seat'
    });
  },
  async down(q){ await q.dropTable('session_players'); }
};
