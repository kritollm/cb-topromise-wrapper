declare function promiseWrapper(fn: any): (...args: any[]) => Promise<{}>;
export { promiseWrapper };
export default promiseWrapper;
