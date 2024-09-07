export interface Detalles {
    status: number;
    msg:    string;
    datas:  Data[];
}

export interface Data {
    id:               number;
    name:             string;
    img:              string;
    bitrate:          string;
    tags:             string;
    type_radio:       string;
    source_radio:     string;
    link_radio:       string;
    user_agent_radio: string;
    url_facebook:     string;
    url_twitter:      string;
    url_instagram:    string;
    url_website:      string;
}