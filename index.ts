function promiseWrapper(fn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            args.push((error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
            fn(...args);
        });
    }
}

export { promiseWrapper };
export default promiseWrapper;