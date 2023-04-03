
import { Content } from "./content";
import { Title } from "./Title";


export interface Post {
    id:string;
    date:Date;
    modified:Date;
    title:Title;
    content: Content;
    comment_status: string;
    ping_status: string;
}
