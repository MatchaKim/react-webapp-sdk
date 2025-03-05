export interface MessageInterface {
    action: ActionType;
    data: any;
}

export type ActionType = 
    | { type: 'webview', detail: 'open' | 'close' }
    | { type: 'bottomSheet', detail: 'open' | 'close' }
    | { type: 'toast', detail: 'show' | 'hide' }
    | { type: 'vibration', detail: 'vibrate' };