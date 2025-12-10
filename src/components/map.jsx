import styles from "../styles/GoogleMap.module.css";

function GoogleMap() {
  return (
    <section
      className={styles.background}
      style={{
        WebkitFilter: "grayscale(100%)",
        filter: "grayscale(100%)",
      }}
    >
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=R.+José+Bisol,+1220+-+Nossa+Senhora+de+Lourdes,+Caxias+do+Sul+-+RS,+Brasil&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        scrolling="no"
        allowFullScreen
        width="100%"
        className={styles.mapa}
      ></iframe>
    </section>
  );
}

export default GoogleMap;