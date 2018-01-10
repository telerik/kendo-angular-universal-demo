export default function createPromise() {
    var resolveFn, rejectFn;
    var promise = new Promise(function (resolve, reject) {
        resolveFn = function (data) {
            promise._state = "resolved";
            resolve(data);
            return promise;
        };
        rejectFn = function (data) {
            promise._state = "rejected";
            reject(data);

            return promise;
        };
    });
    promise._state = "pending";
    promise.resolve = resolveFn;
    promise.reject = rejectFn;
    promise.state = function () { return promise._state; };

    return promise;
}

//# sourceMappingURL=create-promise.js.map
