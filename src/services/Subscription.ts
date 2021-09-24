type TSubscriber<T> = (changes: T) => void;

export default class Subscription<T> {
    private subscribers: TSubscriber<T>[] = [];
    private _lastValue: T | null = null;

    public get lastValue(): T | null {
        return this._lastValue;
    }

    public subscribe(callback: TSubscriber<T>): void {
        this.subscribers.push(callback);
    }

    public unsubscribe(callback: TSubscriber<T>): void {
        this.subscribers.splice(this.subscribers.indexOf(callback), 1);
    }

    public update(changes: T): void {
        this._lastValue = changes;
        this.subscribers.forEach(subscriber => subscriber(changes));
    }
}
