import React, { useState } from 'react';
import styles from './CodeBlock.module.css'; 
import img from '../../../assets/button.png'
const CodeBlock = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  function updateGutters(cm) {
    var gutters = cm.display.gutters,
      __specs = cm.options.gutters;

    removeChildren(gutters);

    for (var i = 0; i < __specs.length; ++i) {
      var gutterClass = __specs[i];
      var gElt = gutters.appendChild(
        elt("div", null, "CodeMirror-gutter " + gutterClass)
      );
      if (gutterClass == "CodeMirror-linenumbers") {
        cm.display.lineGutter = gElt;
        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = i ? "" : "none";
    updateGutterSpace(cm);
    return false;
  }
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Сбрасываем состояние через 2 секунды
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className={styles.codeBlockContainer}>
      <div className={styles.textContainer}>
        <h2>Самые мощные и <br /> простые в использовании API <br /> в мире</h2>
        <div className={styles.microText}>
          <div className={styles.microCode1}>
            <h2>
              Инструменты для каждого стека
            </h2>
            <p>
              Мы предлагаем клиентские и серверные <br /> библиотеки на всех языках - от React и PHP <br />до .NET и iOS.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.codeBlock}>
        <pre className={styles.pre}>
          <code>{code}</code>
        </pre>
        <button className={styles.button} onClick={handleCopy}>
            <img src={img} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
