const path = require('path');

module.exports = {
  JWT_ACCESS_SECRET: 'asdasdasd4as5d4as8d7a8sd4as65d4a8sd7asd4as56d4',
  JWT_REFRESH_SECRET: 'asdasdasd4as5d4as8d7a8sd4as65d4a8sd7asd4as56d4',
  ACCESS_TOKEN_TIME: 30 * 60,
  REFRESH_TOKEN_TIME: 60 * 60 * 24 * 20,

  MAX_DEVICE_AMOUNT: 3,
  SALT_ROUNDS: 5,

  SQUADHELP_BANK_NUMBER: '4564654564564564',
  SQUADHELP_BANK_NAME: 'SquadHelp',
  SQUADHELP_BANK_CVC: '453',
  SQUADHELP_BANK_EXPIRY: '11/22',

  ROLES: {
    CUSTOMER: 'customer',
    CREATOR: 'creator',
  },

  CREATOR_ENTRIES: 'creator_entries',

  CONTEST_STATUSES: {
    CONTEST_STATUS_ACTIVE: 'active',
    CONTEST_STATUS_FINISHED: 'finished',
    CONTEST_STATUS_PENDING: 'pending',
  },

  CONTEST_TYPES: {
    NAME: 'name',
    LOGO: 'logo',
    TAGLINE: 'tagline',
  },

  OFFER_STATUSES: {
    PENDING: 'pending',
    REJECTED: 'rejected',
    WON: 'won',
  },

  CONTESTS_DEFAULT_DIR: 'public/contestFiles/',
  FILES_PATH: path.resolve(__dirname, '..', 'public/'),

  SOCKET_CONNECTION: 'connection',
  SOCKET_SUBSCRIBE: 'subscribe',
  SOCKET_UNSUBSCRIBE: 'unsubscribe',

  NOTIFICATION_ENTRY_CREATED: 'onEntryCreated',
  NOTIFICATION_CHANGE_MARK: 'changeMark',
  NOTIFICATION_CHANGE_OFFER_STATUS: 'changeOfferStatus',

  NEW_MESSAGE: 'newMessage',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
};
