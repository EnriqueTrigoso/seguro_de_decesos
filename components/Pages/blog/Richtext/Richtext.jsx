import styles from "./Richtext.module.css";
import { useEffect, useState } from "react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHTML from "remark-html";

function processMarkdownWithNofollow(markdownContent) {
  return new Promise((resolve, reject) => {
    remark()
      .use(remarkGfm)
      .use(remarkHTML)
      .process(markdownContent, (err, file) => {
        if (err) {
          console.error("Error al procesar el Markdown:", err);
          reject(err);
        } else {
          const htmlWithNofollow = file.value
            .toString()
            .replace(
              /<a(.*?)href="(https?:\/\/[^"]+)"(.*?)>(.*?)<\/a>/g,
              '<a$1href="$2"$3 target="_blank" rel="noreferrer noopener nofollow">$4</a>'
            );

          // // Elimina {rel="nofollow"} del enlace
          // const finalHtml = htmlWithNofollow.replace(/{rel="nofollow"}/g, "");
          resolve(htmlWithNofollow);
          console.log(finalHtml);
        }
      });
  });
}

export default function RichText({ data, id }) {
  const content = data.body;
  const [renderedContent, setRenderedContent] = useState("");

  useEffect(() => {
    processMarkdownWithNofollow(content).then((htmlWithNofollow) => {
      setRenderedContent(htmlWithNofollow);
    });
  }, [content]);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      setActiveSection(currentHash);
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section className={styles.rich_text} id={id}>
      <div
        // className={activeSection === `#${id}` ? styles.top : ""}
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    </section>
  );
}
