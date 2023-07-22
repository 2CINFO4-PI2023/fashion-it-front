export interface Publication {
    [x: string]: any;
    title: string;
    status?: string;
    content : String,
    contentType: string; // Add contentType property
    text: string | null; // Allow null for text
    image: File | null; // Allow null for image
    comments?: Comment[];
    ratings?: Rating[];
  }
  
  export enum ContentType {
    Text = 'text',
    Image = 'image',
  }
  
  export interface Comment {
    userId: string;
    content: string;
  }
  
  export interface Rating {
    userId: string;
    rating: number;
  }
  