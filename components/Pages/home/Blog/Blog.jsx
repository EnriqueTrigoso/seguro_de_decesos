import styles from "./Blog.module.css";
import Button from "components/UI/Button/Button";
import useText from "contexts/TextContext/useText";

const Blog = () => {
  return <section className={styles.section}></section>;
};

// const Blog = () => {
//   return (
//     <section className={`${styles.blog} container`}>
//       <div className={styles.header}>
//         <h2 className={styles.h2}>
//           Conoce mejor tu comunidad autónoma gracias a Eva Seguros
//         </h2>
//         <p className={styles.description}>
//           Bienvenido a España, donde explorarás la gastronomía, cultura,
//           deportes y economía de esta ciudad. Únete a nosotros en este
//           emocionante viaje por una localidad única.{" "}
//           <strong>¡Descubre el encanto de España!</strong>
//         </p>
//       </div>
//       <div className={styles.content}>
//         <div className={styles.container}>
//           <div className={styles.card}>
//             <div className={styles.detail}>
//               <div className={styles.ctn}>
//                 <div className={styles.category}>Lorem ipsum</div>
//                 <h3 className={styles.h3}>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </h3>
//               </div>
//               <p className={styles.p}>Lorem ipsum</p>
//             </div>
//           </div>
//           <div className={styles.group}>
//             <div className={styles.card}>
//               <div className={styles.detail}>
//                 <div className={styles.ctn}>
//                   <div className={styles.category}>Lorem ipsum</div>
//                   <h3 className={styles.h3}>
//                     Lorem ipsum dolor sit amet consectetur.
//                   </h3>
//                 </div>
//                 <p className={styles.p}>Lorem ipsum</p>
//               </div>
//             </div>
//             <div className={styles.card}>
//               <div className={styles.detail}>
//                 <div className={styles.ctn}>
//                   <div className={styles.category}>Lorem ipsum</div>
//                   <h3 className={styles.h3}>
//                     Lorem ipsum dolor sit amet consectetur.
//                   </h3>
//                 </div>
//                 <p className={styles.p}>Lorem ipsum</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.container}>
//           <div className={styles.card_1}>
//             <div className={styles.detail}>
//               <div className={styles.ctn}>
//                 <div className={styles.category}>Lorem ipsum</div>
//                 <h3 className={styles.h3}>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </h3>
//               </div>
//               <p className={styles.p}>Lorem ipsum</p>
//             </div>
//           </div>
//           <div className={styles.card_2}>
//             <div className={styles.detail}>
//               <div className={styles.ctn}>
//                 <div className={styles.category}>Lorem ipsum</div>
//                 <h3 className={styles.h3}>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </h3>
//               </div>
//               <p className={styles.p}>Lorem ipsum</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.ctn_btn}>
//         <Button variant="secondary" width={200}>
//           Ir al blog
//         </Button>
//       </div>
//     </section>
//   );
// };

export default Blog;
