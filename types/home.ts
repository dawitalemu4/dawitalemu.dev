export interface IconRow {
    id: number;
    header: string;
    images: string[][];
};

export interface Project {
    element_id: string;
    header: string;
    paragraph: string;
    footnote?: string; 
    icons: string[];
    github: string;
    siteURL: string;
    thumbnail?: string;
    video?: string;
};