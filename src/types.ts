export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  price?: string;
  modality: 'grupal' | 'individual' | 'presencial';
  duration: string;
}

export interface Testimony {
  id: string;
  name: string;
  role?: string;
  text: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  category: string;
  image?: string;
}

export interface FreeResource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'audio' | 'guia' | 'ejercicio';
  downloadUrl?: string;
  duration?: string;
}
