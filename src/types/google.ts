type AdSize = [number, number];

export interface AdSlot {
    adUnit: string;
    sizes: AdSize[];
    container: string;
}
