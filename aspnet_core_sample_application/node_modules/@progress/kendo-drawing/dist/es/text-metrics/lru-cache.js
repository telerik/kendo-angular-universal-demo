import { Class } from '../common';

var LRUCache = (function (Class) {
    function LRUCache(size) {
        Class.call(this);

        this._size = size;
        this._length = 0;
        this._map = {};
    }

    if ( Class ) LRUCache.__proto__ = Class;
    LRUCache.prototype = Object.create( Class && Class.prototype );
    LRUCache.prototype.constructor = LRUCache;

    LRUCache.prototype.put = function put (key, value) {
        var map = this._map;
        var entry = { key: key, value: value };

        map[key] = entry;

        if (!this._head) {
            this._head = this._tail = entry;
        } else {
            this._tail.newer = entry;
            entry.older = this._tail;
            this._tail = entry;
        }

        if (this._length >= this._size) {
            map[this._head.key] = null;
            this._head = this._head.newer;
            this._head.older = null;
        } else {
            this._length++;
        }
    };

    LRUCache.prototype.get = function get (key) {
        var entry = this._map[key];

        if (entry) {
            if (entry === this._head && entry !== this._tail) {
                this._head = entry.newer;
                this._head.older = null;
            }

            if (entry !== this._tail) {
                if (entry.older) {
                    entry.older.newer = entry.newer;
                    entry.newer.older = entry.older;
                }

                entry.older = this._tail;
                entry.newer = null;

                this._tail.newer = entry;
                this._tail = entry;
            }

            return entry.value;
        }
    };

    return LRUCache;
}(Class));

export default LRUCache;
//# sourceMappingURL=lru-cache.js.map
