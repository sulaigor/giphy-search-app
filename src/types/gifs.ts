interface IGifImage {
  url: string;
}

export interface IGif {
  id: string;
  images: Record<'original' | 'downsized_large', IGifImage>;
}
