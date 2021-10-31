import ChartValue from "./ChartValue";

export default class ChartRecord {
    id: string;
    total: number;
    values: Array<ChartValue>;
    label: string;
}