export interface EntryInterface {
    id: number,
    title: string,
    description: string,
    date: string,
    mood?: "happy" | "angry" | "sad"
}