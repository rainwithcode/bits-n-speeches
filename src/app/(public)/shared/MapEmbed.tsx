type MapEmbedProps = {
  src: string;
  title: string;
};
export default function MapEmbed({ src, title }: MapEmbedProps) {
  return (
    <iframe
      src={src}
      width="100%"
      height="200"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
    />
  );
}
