export interface MessageInterface {
    action: ActionType;
}

export type ActionType = 
    | { type: 'webview', detail: 'open' | 'close' , url: string }
    | { type: 'bottomSheet', detail: 'open' | 'close' , content: { header: string, content: string} | {header: string, url: string} }
    | { type: 'toast', detail: 'show' | 'hide' , message: string }
    | { type: 'vibration', detail: 'vibrate' };