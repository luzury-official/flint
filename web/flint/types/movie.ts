export type Category = 'Generated' | 'Human-Made' | 'Hybrid';

export interface Movie {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    category: Category;
    duration: number; // In seconds
    createdAt: string;
}