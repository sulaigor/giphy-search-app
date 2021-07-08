interface IGifImage {
  url: string;
}

export interface IGif {
  id: string;
  title: string;
  images: Record<'original' | 'downsized_large', IGifImage>;
}
