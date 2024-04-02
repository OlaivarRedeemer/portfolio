export interface IWorkCard {
    title: string;
    description: string;
    image: string;
    image2?: string;
    url?: string;
    bgClass: string;
    shadowClass?: string;
    titleClass: string;
    buttonClass: string;
    descriptionClass: string;
    reversed?: boolean;
    alternate?: boolean;
}
