exports.CONNECTION_STATE = {};

exports.CONNECTION_STATE.CLOSED = 'CLOSED';
exports.CONNECTION_STATE.AWAITING_AUTHENTICATION = 'AWAITING_AUTHENTICATION';
exports.CONNECTION_STATE.AUTHENTICATING = 'AUTHENTICATING';
exports.CONNECTION_STATE.OPEN = 'OPEN';
exports.CONNECTION_STATE.ERROR = 'ERROR';
exports.CONNECTION_STATE.RECONNECTING = 'RECONNECTING';

exports.MESSAGE_SEPERATOR = String.fromCharCode( 30 ); // ASCII Record Seperator 1E
exports.MESSAGE_PART_SEPERATOR = String.fromCharCode( 31 ); // ASCII Unit Separator 1F

exports.TYPES = {};
exports.TYPES.STRING = 'S';
exports.TYPES.OBJECT = 'O';
exports.TYPES.NUMBER = 'N';
exports.TYPES.NULL = 'L';
exports.TYPES.TRUE = 'T';
exports.TYPES.FALSE = 'F';
exports.TYPES.UNDEFINED = 'U';

exports.TOPIC = {};
exports.TOPIC.AUTH = 'AUTH';
exports.TOPIC.ERROR = 'ERROR';
exports.TOPIC.EVENT = 'EVENT';
exports.TOPIC.RECORD = 'RECORD';
exports.TOPIC.RPC = 'RPC';
exports.TOPIC.PRIVATE = 'PRIVATE/';

exports.EVENT = {};
exports.EVENT.CONNECTION_ERROR = 'connectionError';
exports.EVENT.CONNECTION_STATE_CHANGED = 'connectionStateChanged';

exports.ACTIONS = {};
exports.ACTIONS.ACK = 'A';
exports.ACTIONS.READ = 'R';
exports.ACTIONS.CREATE = 'C';
exports.ACTIONS.UPDATE = 'U';
exports.ACTIONS.DELETE = 'D';
exports.ACTIONS.SUBSCRIBE = 'S';
exports.ACTIONS.UNSUBSCRIBE = 'US';
exports.ACTIONS.INVOKE = 'I';
exports.ACTIONS.LISTEN = 'L';
exports.ACTIONS.PROVIDER_UPDATE = 'PU';
exports.ACTIONS.QUERY = 'Q';
exports.ACTIONS.CREATEORREAD = 'CR';
exports.ACTIONS.RPC = 'RPC';
exports.ACTIONS.EVENT = 'EVT';
exports.ACTIONS.ERROR = 'E';
exports.ACTIONS.REQUEST = 'REQ';
exports.ACTIONS.RESPONSE = 'RES';
exports.ACTIONS.REJECTION = 'REJ';