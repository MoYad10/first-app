import { Comment } from './comment';

export class Dish {
  id: string;
  name: string;
  image: string;
  category: boolean;
  featured: boolean;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}
