export interface Genre {
    status: number;
    msg:    string;
    datas:  Data[];
}

export interface Data {
    id:   number;
    name: string;
    img:  string;
}