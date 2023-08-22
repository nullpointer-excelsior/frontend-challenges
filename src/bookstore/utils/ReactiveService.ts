import { Subscription } from "rxjs";

export class ReactiveService {

    subscriptions: Subscription[] = []

    addSubscription(subscription: Subscription) {
        this.subscriptions.push(subscription)
    }

    dispose() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe())
    }
}