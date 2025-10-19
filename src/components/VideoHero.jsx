// andryrabanales/commerces/Commerces-29543afc4541042fd2440339e053fff8867a926a/src/components/VideoHero.jsx

export default function VideoHero() {
    return (
      <section className="video-hero">
        {/* Eliminado el div con className="container" para permitir full-width */}
        <div className="video-wrapper card overflow-hidden p-0">
          <video
            src="/MisteryBox.mp4"
            className="w-full h-full object-cover" // object-cover asegura que llene el espacio
            autoPlay
            loop
            muted
            playsInline
          >
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </section>
    );
  }